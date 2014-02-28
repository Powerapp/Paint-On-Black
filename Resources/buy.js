	var win = Ti.UI.currentWindow;
	win.backgroundColor = '#FFC0CB';
	
	Ti.include('/functions/iads.js');
	
	function handleOrientation(orientation){
         if(orientation == 0 || orientation == 5){
            
            }else if (Ti.Gesture.isLandscape(orientation)) {
               buyBtn.left = '440dp';
               restoreBtn.left = '530dp';
               buyBtn.bottom = '210dp';
               restoreBtn.bottom = '210dp';
                
                } else {
                buyBtn.left = '310dp';
                restoreBtn.left = '390dp';
                buyBtn.bottom = '310dp';
                restoreBtn.bottom = '310dp';
                               
            
            }
        }
    Ti.Gesture.addEventListener('orientationchange', function (ev) {
      handleOrientation(ev.orientation);
      
    });
	
	//knapp tillbaka
	var back = Ti.UI.createButton({
		title : L('back'),
		width : '70dp',
		height : '60dp',
		top : '30dp',
		left : '30dp',
		borderRadius : '5dp',
		backgroundColor : '#000',
		style : Titanium.UI.iPhone.SystemButtonStyle.PLAIN
	});
	back.addEventListener("click", function() {
		Ti.UI.currentWindow.close();
	});
	
	win.add(back);
	
	var label = Ti.UI.createLabel({
		width : '50%',
		height : '200dp',
		text : L('label'),
		textAlign : 'center',
	
	});
	win.add(label);
	
	var loading = Ti.UI.createActivityIndicator({
		bottom : 10,
		height : 50,
		width : 50,
		backgroundColor : 'black',
		borderRadius : 10,
		style : Ti.UI.iPhone.ActivityIndicatorStyle.BIG
	});
	var loadingCount = 0;
	
	function showLoading() {
		loadingCount += 1;
		if (loadingCount == 1) {
			loading.show();
		}
	}
	
	function hideLoading() {
		if (loadingCount > 0) {
			loadingCount -= 1;
			if (loadingCount == 0) {
				loading.hide();
			}
		}
	}
	
	win.add(loading);
	
	//
	//kod för in-app för iOS
	//
	var verifyingReceipts = false;
	
	var Storekit = require('ti.storekit');
	
	function markProductAsPurchased(identifier) {
		Ti.API.info('Marking as purchased: ' + identifier);
	
		Ti.App.Properties.setBool('Purchased', true);
	
		adView();
	}
	
	function requestProduct(identifier, success) {
		showLoading();
		Storekit.requestProducts([identifier], function(evt) {
			hideLoading();
			if (!evt.success) {
				alert('ERROR: We failed to talk to App store!');
			} else if (evt.invalid) {
				alert('ERROR: You requested an invalid product!');
			} else {
				success(evt.products[0]);
			}
		});
	}
	
	Storekit.addEventListener('transactionState', function(evt) {
		hideLoading();
		switch (evt.state) {
			case Storekit.FAILED:
				if (evt.cancelled) {
					buyBtn.enabled = true;
					buyBtn.backgroundColor = '#000';
					alert('Purchase cancelled');
				} else {
					alert('ERROR: Buying failed! ' + evt.message);
				}
				break;
			case Storekit.PURCHASED:
				if (verifyingReceipts) {
					Storekit.verifyReceipt(evt, function(e) {
						if (e.success) {
							if (e.valid) {
								alert('Thanks! Receipt Verified');
								markProductAsPurchased(evt.productIdentifier);
	
							} else {
								alert('Sorry. Receipt is invalid');
							}
						} else {
							alert(e.message);
						}
					});
				} else {
					alert('Thanks!');
					markProductAsPurchased(evt.productIdentifier);
					win.close();
	
				}
				break;
			case Storekit.PURCHASING:
				Ti.API.info("Purchasing " + evt.productIdentifier);
				break;
			case Storekit.RESTORED:
				// The complete list of restored products is sent with the `restoredCompletedTransactions` event
				Ti.API.info("Restored " + evt.productIdentifier);
				break;
		}
	});
	
	function purchaseProduct(product) {
		showLoading();
		Storekit.purchase(product);
	}
	
	function restorePurchases() {
		showLoading();
		Storekit.restoreCompletedTransactions();
	}
	
	Storekit.addEventListener('restoredCompletedTransactions', function(evt) {
		hideLoading();
		if (evt.error) {
			alert(evt.error);
		} else if (evt.transactions == null || evt.transactions.length == 0) {
			alert('There were no purchases to restore!');
		} else {
			for (var i = 0; i < evt.transactions.length; i++) {
				if (verifyingReceipts) {
					Storekit.verifyReceipt(evt.transactions[i], function(e) {
						if (e.valid) {
							markProductAsPurchased(e.productIdentifier);
						} else {
							Ti.API.error("Restored transaction is not valid");
						}
					});
				} else {
					markProductAsPurchased(evt.transactions[i].productIdentifier);
				}
			}
			alert('Restored ' + evt.transactions.length + ' purchases!');
		}
	});
	
	var buyBtn = Ti.UI.createButton({
		title : L('buyBtn'),
		height : '60dp',
		width : '60dp',
		bottom : '290dp',
		left : '310dp',
		borderRadius : '5dp',
		backgroundColor : '#000',
		style : Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
	});
	win.add(buyBtn);
	
	buyBtn.addEventListener('click', function(e) {
	
		//vi har inte köpt den tidigare, köp nu!
		requestProduct('PaintOnBlackfreefromad20131004', function(product) {
			purchaseProduct(product);
		});
	
	});
	
	var restoreBtn = Ti.UI.createButton({
		title : L('restoreBtn'),
		height : '60dp',
		width : '80dp',
		bottom : '290dp',
		left : '390dp',
		borderRadius : '5dp',
		backgroundColor : '#000',
		style : Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
	});
	win.add(restoreBtn);
	
	restoreBtn.addEventListener('click', function(e) {
			restorePurchases();
	});
	handleOrientation();
	
