	var win = Ti.UI.currentWindow;
	win.fullscreen = true;
	
	var Paint = require('ti.paint');
	var Admob = require('ti.admob');

	
	var OS_is_Android = Ti.Platform.osname == 'android';
	
	Ti.include('/includes/colorViews.js');
	Ti.include('/functions/share.js');
	Ti.include('/functions/iads.js');


	var overallview = Ti.UI.createView({
		top : -1,
		left : -1,
		width : 1,
		height : 1,
		zIndex : 100,
	
	});
	overallview.hide();
	win.add(overallview);
	
	var containerView = Ti.UI.createImageView({
		height : '100%',
		width : '100%',
		bottom : '280dp',
	
	});
	win.add(containerView);
	
	var paintView = Paint.createPaintView({
		backgroundColor : '#000',
		top : 0,
		width : '100%',
		height : '100%',
		strokeAlpha : 255,
		strokeWidth : '30dp',
		strokeColor : '#ffffff',
		zIndex : 10,
		useBezierCorrection : true,
		eraseMode : false,
		visible : true,
	
	});
	containerView.add(paintView);
	
	var bottomContainer = Ti.UI.createView({
		width : '100%',
		height : '170dp',
		bottom : '80dp',
	
	});
	win.add(bottomContainer);
	

	//Här börjar kod som rör verktygen
	//En view som håller alla verktygsbilderna
	var toolContainerView = Ti.UI.createView({
		width : '330',
		height : '85dp',
		left : '10dp',
		top : '10dp',
		backgroundColor : '#000',
		layout : 'Horizontal',
	
	});
	bottomContainer.add(toolContainerView);
	
	var tools = [];
	
	for ( i = 0; i < 4; i++) {
	
		tools[i] = Ti.UI.createButton({
			height : '75dp',
			width : '75dp',
			top : '5dp',
			bottom : '5dp',
	
		});
		//Den visar
		tools[i].addEventListener('click', function(e) {
			var clickedTool = e.source;
	
			if (clickedTool.id == 1) {
	
				choiceContainerView.views = [colorView1, colorView2, colorView3, colorView4, colorView5, colorView6, colorView7];
				choiceContainerView.visible = true;
				paintView.eraseMode = false;
	
			} else if (clickedTool.id == 2) {
	
				choiceContainerView.views = [brushView];
				choiceContainerView.visible = true;
				paintView.eraseMode = false;
				paintView.strokeWidth = brushSlider.value;
				circle1.backgroundColor = paintView.strokeColor;
				circle1.borderColor = paintView.strokeColor;
	
				if (paintView.strokeColor == '#ffffff') {
	
					circle1.backgroundColor = '#000';
					circle1.borderColor = '#000';
	
				}
	
			} else if (clickedTool.id == 3) {
				choiceContainerView.views = [opacityView];
				choiceContainerView.visible = true;
				paintView.eraseMode = false;
				paintView.strokeAlpha = opacitySlider.value;
				circle2.backgroundColor = paintView.strokeColor;
				circle2.borderColor = paintView.strokeColor;
	
				if (paintView.strokeColor == '#ffffff') {
	
					circle2.backgroundColor = '#000';
					circle2.borderColor = '#000';
	
				}
	
			} else if (clickedTool.id == 4) {
	
				choiceContainerView.visible = false;
				paintView.eraseMode = true;
			}
	
		});
	
		toolContainerView.add(tools[i]);
	}
	
	tools[0].backgroundImage = '/images/pallette.png';
	tools[0].left = '0dp';
	tools[0].id = '1';
	tools[1].backgroundImage = '/images/brush.png';
	tools[1].left = '10dp';
	tools[1].id = '2';
	tools[2].backgroundImage = '/images/opacity.png';
	tools[2].left = '10dp';
	tools[2].id = '3';
	tools[3].backgroundImage = L('eraserImage');
	tools[3].left = '10dp';
	tools[3].id = '4';
	
	//Här slutar kod som rör vertygen
	
	var brushView = Ti.UI.createView({
		height : '80dp',
		width : '100%',
		backgroundColor : '#fff',
		borderRadius : '5dp'
	});
	
	var brushSlider = Titanium.UI.createSlider({
		top : '45dp',
		min : '2dp',
		max : '30dp',
		width : '50%',
		value : '30dp'
	});
	
	brushView.add(brushSlider);
	
	var circle1 = Ti.UI.createImageView({
		width : '40dp',
		height : '40dp',
		top : '20dp',
		borderRadius : '20dp',
		borderColor : '#000',
		backgroundColor : '#000'
	});
	
	brushView.add(circle1);
	
	brushSlider.addEventListener('change', function(e) {
		var selectedNumber = Math.round(e.value);
		//brushLabel.text = selectedNumber;
		paintView.strokeWidth = selectedNumber;
	
		circle1.borderRadius = selectedNumber / 2;
		circle1.width = selectedNumber;
		circle1.height = selectedNumber;
	
	});
	
	var opacityView = Ti.UI.createView({
		height : '80dp',
		width : '100%',
		backgroundColor : '#fff',
		borderRadius : '5dp'
	});
	
	var opacitySlider = Titanium.UI.createSlider({
		top : '45dp',
		min : '40',
		max : '255',
		width : '50%',
		value : '255',
	});
	
	opacityView.add(opacitySlider);
	
	var circle2 = Ti.UI.createImageView({
		width : '30dp',
		height : '30dp',
		top : '20dp',
		borderRadius : '15dp',
		borderColor : '#000',
		backgroundColor : '#000'
	});
	
	opacityView.add(circle2);
	
	opacitySlider.addEventListener('change', function(e) {
		var selectedNumber = Math.round(e.value);
		paintView.strokeAlpha = selectedNumber;
	
		circle2.opacity = Math.round(e.value) / 200;
		// Between 0 - 1
	
	});
	
	//Views till scrollable ligger i mappen includes
	var choiceContainerView = Ti.UI.createScrollableView({
		width : '330dp',
		height : '85dp',
		top : '10dp',
		left : '350dp',
		borderRadius : '5dp',
		visible : false,
	});
	bottomContainer.add(choiceContainerView);
	
	var resetBtn = Ti.UI.createButton({
		backgroundImage : '/images/reset.png',
		right : '180dp',
		bottom : '10dp',
		height : '50dp',
		width : '50dp',
		style : Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
	
	});
	resetBtn.addEventListener('click', function() {
	
		var dialog = Ti.UI.createAlertDialog({
			buttonNames : ['Cancel', 'OK'],
			message : 'You´re about to delete your painting?',
	
		});
	
		if (Ti.Platform.locale == 'sv') {
	
			dialog.buttonNames = ['Nej', 'Ja'];
			dialog.message = 'Vill du radera din teckning?';
	
		}
	
		dialog.addEventListener('click', function(e) {
	
			if (e.index == 0) {// clicked "Cancel"
				Ti.API.info('The cancel button was clicked');
	
			} else if (e.index == 1) {// clicked "No"
				Ti.API.info('The yes button was clicked');
				paintView.clear();
				choiceContainerView.visible = false;
			}
		});
		dialog.show();
	
	});
	bottomContainer.add(resetBtn);
	
	var noAdsBtn = Ti.UI.createLabel({
		text : L('noAdsBtn'),
		color : '#fff',
		left : '10dp',
		bottom : '15dp',
		height : 'auto',
		width : 'auto',
		visible : true,
	
	});
	bottomContainer.add(noAdsBtn);
	
	noAdsBtn.addEventListener('click', function() {
	
		var newWin = Ti.UI.createWindow({
			url : '/buy.js',
			backgroundColor : '#fff',
		});
	
		newWin.open();
	
	});
	
	var confirmSave = Titanium.UI.createLabel({
		width : '150dp',
		height : '50dp',
		textAlign : 'center',
		text : L('confirmSave'),
		top : '400dp',
		backgroundColor : '#ccc',
		visible : 'false',
		font : {
			fontSize : '14sp'
		},
	
	});
	win.add(confirmSave);
	
	var saveBtn = Ti.UI.createButton({
		color : '#000',
		backgroundImage : L('saveImage'),
		right : '40dp',
		bottom : '10dp',
		height : '50dp',
		width : '50dp',
		borderRadius : '5dp',
		style : Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
	
	});
	
	saveBtn.addEventListener('click', function() {
	
		shareImage();
	
	});
	
	bottomContainer.add(saveBtn);
	
	var galleryBtn = Ti.UI.createButton({
		color : '#000',
		backgroundImage : L('galleryImage'),
		right : '110dp',
		bottom : '10dp',
		height : '50dp',
		width : '50dp',
		style : Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
	});
	
	galleryBtn.addEventListener('click', function() {
		choiceContainerView.visible = false;
		Titanium.Media.openPhotoGallery({
			success : function(event) {
				// called when media returned from the camera
				Ti.API.debug('Our type was: ' + event.mediaType);
				if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
	
					paintView.image = event.media;
	
				} else {
					alert("got the wrong type back =" + event.mediaType);
				}
			},
			cancel : function() {
				// called when user cancels taking a picture
			},
			error : function(error) {
				// called when there's an error
				alert('Sorry something went wrong');
				a.show();
			},
			allowEditing : false,
			mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]
		});
	
	});
	bottomContainer.add(galleryBtn);
	
		if(Ti.App.Properties.getBool('Purchased', false) == true) {


		containerView.bottom = '190dp';
		bottomContainer.bottom = 0;
		noAdsBtn.visible = false;
	}

	
	adView();
	
		
	Ti.App.addEventListener('adsHasBeenRemoved', function(e) {
	
			if (ad != null) {
				if (ad != undefined) {
					win.remove(ad);
					ad = null;
					
				}
				containerView.bottom = '190dp';
				bottomContainer.bottom = 0;
				noAdsBtn.visible = false;
		
			}
		
		
	});
	
		
	

	
	
