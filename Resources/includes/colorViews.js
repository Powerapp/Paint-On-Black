



var colorView1 = Ti.UI.createView({ height:'80dp', width:'100%', bottom:'0dp', layout:'Horizontal'});
var colorView2 = Ti.UI.createView({ height:'80dp', width:'100%', bottom:'0dp', layout:'Horizontal'});
var colorView3 = Ti.UI.createView({ height:'80dp', width:'100%', bottom:'0dp', layout:'Horizontal'});
var colorView4 = Ti.UI.createView({ height:'80dp', width:'100%', bottom:'0dp', layout:'Horizontal'});
var colorView5 = Ti.UI.createView({ height:'80dp', width:'100%', bottom:'0dp', layout:'Horizontal'});
var colorView6 = Ti.UI.createView({ height:'80dp', width:'100%', bottom:'0dp', layout:'Horizontal'});
var colorView7 = Ti.UI.createView({ height:'80dp', width:'100%', bottom:'0dp', layout:'Horizontal'});





var colorsPage1 = [];

	for(i = 0; i < 7; i++){
	
		colorsPage1[i] = Ti.UI.createView({
			height:'34dp',
			width:'34dp',
			left:'7dp',
			bottom:'0dp',
			borderRadius:'5dp',
		
	});
	
	colorsPage1[i].addEventListener('click', function(e){
				
				paintView.strokeColor = e.source.backgroundColor;
				paintView.strokeImage = e.source.backgroundImage;
		
	});

	colorView1.add(colorsPage1[i]);
	
}
colorsPage1[0].backgroundColor='#FFC0CB'; 
colorsPage1[1].backgroundColor='#FF69B4'; 	
colorsPage1[2].backgroundColor='#FF1493'; 	
colorsPage1[3].backgroundColor='#EE82EE'; 	
colorsPage1[4].backgroundColor='#FF00FF'; 	
colorsPage1[5].backgroundColor='#9370DB'; 
colorsPage1[6].backgroundColor='#8A2BE2'; 	

var arrow1 = Ti.UI.createImageView({
	width:'25dp',
	height:'25dp',
	image:'/images/arrow_forward.png',
	left:'5dp',
	bottom:'5dp',
	
});
colorView1.add(arrow1);


var colorsPage2 = [];

	for(i = 0; i < 7; i++){
	
		colorsPage2[i] = Ti.UI.createView({
			height:'34dp',
			width:'34dp',
			left:'7dp',
			bottom:'0dp',
			borderRadius:'5dp',
		
	});
	
	colorsPage2[i].addEventListener('click', function(e){
				
				paintView.strokeColor = e.source.backgroundColor;
		
	});

	colorView2.add(colorsPage2[i]);
	
}
colorsPage2[0].backgroundColor='#FFA07A';  	
colorsPage2[1].backgroundColor='#FA8072'; 	
colorsPage2[2].backgroundColor='#CD5C5C'; 	
colorsPage2[3].backgroundColor='#DC143C'; 	
colorsPage2[4].backgroundColor='#B22222'; 	
colorsPage2[5].backgroundColor='#8B0000'; 	
colorsPage2[6].backgroundColor='#FF0000'; 

var arrow2 = Ti.UI.createImageView({
	width:'25dp',
	height:'25dp',
	image:'/images/arrow_forward.png',
	left:'5dp',
	bottom:'5dp',
	
});
colorView2.add(arrow2);	


var colorsPage3 = [];

	for(i = 0; i < 7; i++){
	
		colorsPage3[i] = Ti.UI.createView({
			height:'34dp',
			width:'34dp',
			left:'7dp',
			bottom:'0dp',
			borderRadius:'5dp',
		
	});
	
	colorsPage3[i].addEventListener('click', function(e){
				
				paintView.strokeColor = e.source.backgroundColor;
		
	});

	colorView3.add(colorsPage3[i]);
	
}
colorsPage3[0].backgroundColor='#FFFACD';  	
colorsPage3[1].backgroundColor='#FF4500'; 	
colorsPage3[2].backgroundColor='#FF8C00'; 	
colorsPage3[3].backgroundColor='#FFFF00'; 	
colorsPage3[4].backgroundColor='#FFD700'; 	
colorsPage3[5].backgroundColor='#EEE8AA'; 	
colorsPage3[6].backgroundColor='#BDB76B'; 


var arrow3 = Ti.UI.createImageView({
	width:'25dp',
	height:'25dp',
	image:'/images/arrow_forward.png',
	left:'5dp',
	bottom:'5dp',
	
});
colorView3.add(arrow3);

var colorsPage4 = [];

	for(i = 0; i < 7; i++){
	
		colorsPage4[i] = Ti.UI.createView({
			height:'34dp',
			width:'34dp',
			left:'7dp',
			bottom:'0dp',
			borderRadius:'5dp',
		
	});
	
	colorsPage4[i].addEventListener('click', function(e){
				
				paintView.strokeColor = e.source.backgroundColor;
		
	});

	colorView4.add(colorsPage4[i]);
	
}
colorsPage4[0].backgroundColor='#556B2F';  	
colorsPage4[1].backgroundColor='#32CD32'; 	
colorsPage4[2].backgroundColor='#00FF00'; 	
colorsPage4[3].backgroundColor='#00FF7F'; 	
colorsPage4[4].backgroundColor='#90EE90'; 	
colorsPage4[5].backgroundColor='#228B22'; 	
colorsPage4[6].backgroundColor='#006400'; 

var arrow4 = Ti.UI.createImageView({
	width:'25dp',
	height:'25dp',
	image:'/images/arrow_forward.png',
	left:'5dp',
	bottom:'5dp',
	
});
colorView4.add(arrow4);

var colorsPage5 = [];

	for(i = 0; i < 7; i++){
	
		colorsPage5[i] = Ti.UI.createView({
			height:'34dp',
			width:'34dp',
			left:'7dp',
			bottom:'0dp',
			borderRadius:'5dp',

		
	});
	
	colorsPage5[i].addEventListener('click', function(e){
				
				paintView.strokeColor = e.source.backgroundColor;
		
	});

	colorView5.add(colorsPage5[i]);
	
}
colorsPage5[0].backgroundColor='#00FFFF';  	
colorsPage5[1].backgroundColor='#AFEEEE'; 	
colorsPage5[2].backgroundColor='#00CED1'; 	
colorsPage5[3].backgroundColor='#20B2AA'; 	
colorsPage5[4].backgroundColor='#008B8B'; 	
colorsPage5[5].backgroundColor='#7FFFD4'; 	
colorsPage5[6].backgroundColor='#5F9EA0'; 

var arrow5 = Ti.UI.createImageView({
	width:'25dp',
	height:'25dp',
	image:'/images/arrow_forward.png',
	left:'5dp',
	bottom:'5dp',
	
});
colorView5.add(arrow5);

var colorsPage6 = [];

	for(i = 0; i < 7; i++){
	
		colorsPage6[i] = Ti.UI.createView({
			height:'34dp',
			width:'34dp',
			left:'7dp',
			bottom:'0dp',
			borderRadius:'5dp',

		
	});
	
	colorsPage6[i].addEventListener('click', function(e){
				
				paintView.strokeColor = e.source.backgroundColor;
		
	});

	colorView6.add(colorsPage6[i]);
	
}
colorsPage6[0].backgroundColor='#87CEFA';  	
colorsPage6[1].backgroundColor='#00BFFF'; 	
colorsPage6[2].backgroundColor='#1E90FF'; 	
colorsPage6[3].backgroundColor='#6495ED'; 	
colorsPage6[4].backgroundColor='#4169E1'; 	
colorsPage6[5].backgroundColor='#0000FF'; 	
colorsPage6[6].backgroundColor='#000080'; 	

var arrow6 = Ti.UI.createImageView({
	width:'25dp',
	height:'25dp',
	image:'/images/arrow_forward.png',
	left:'5dp',
	bottom:'5dp',
	
});
colorView6.add(arrow6);


var colorsPage7 = [];

	for(i = 0; i < 7; i++){
	
		colorsPage7[i] = Ti.UI.createView({
			height:'34dp',
			width:'34dp',
			left:'7dp',
			bottom:'0dp',
			borderRadius:'5dp',

		
	});
	
	colorsPage7[i].addEventListener('click', function(e){
				
				paintView.strokeColor = e.source.backgroundColor;
		
	});

	colorView7.add(colorsPage7[i]);
	
}
colorsPage7[0].backgroundColor='#C0C0C0';  	
colorsPage7[1].backgroundColor='#808080'; 	
colorsPage7[2].backgroundColor='#708090'; 	
colorsPage7[3].backgroundColor='#ffffff'; 	
colorsPage7[4].backgroundColor='#DEB887'; 	
colorsPage7[5].backgroundColor='#D2691E'; 	
colorsPage7[6].backgroundColor='#8B4513'; 	

var arrow7 = Ti.UI.createImageView({
	width:'25dp',
	height:'25dp',
	image:'/images/arrow_back.png',
	right:'5dp',
	
});
colorView7.add(arrow7);


