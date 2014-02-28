//var iads;
var ad;

function adView() {

	if (Ti.App.Properties.getBool('Purchased', false) == false) {
    
    ad = Admob.createView({
        bottom: '-100dp', 
        width: '768dp', height: '90dp',
        publisherId: '2559253275870504',
        adBackgroundColor: 'black',
        testing: false,
        dateOfBirth: new Date(2000, 10, 1, 12, 1, 1),
        gender: 'female',
        keywords: ''
    });
    win.add(ad);        
        
        animation = Ti.UI.createAnimation({
            bottom : 0,
            duration : 350
        });

        ad.addEventListener('load', function() {
            ad.animate(animation);

        });
       ad.addEventListener('didFailToReceiveAd', function() {
            noAdsBtn.visible = true;
            ad.bottom = '-100dp';

        });


		/*iads = Ti.UI.iOS.createAdView({
			height : 'auto',
			width : 'auto',
			bottom : '-100dp',
			borderColor : '#000',
			backgroundColor : '#000',
			visible : true,
		});
		win.add(iads);

		animation = Ti.UI.createAnimation({
			bottom : 0,
			duration : 350
		});

		iads.addEventListener('load', function() {
			iads.animate(animation);
			//noAdsBtn.visible = true;

		});
		iads.addEventListener('error', function(e) {
		    
		   
			noAdsBtn.visible = true;
			iads.bottom = '-100dp';

		});*/

	}else {
		
	Ti.App.fireEvent('adsHasBeenRemoved');
		
	}	
		
}

