
function shareImage(e) {
	

		if (!OS_is_Android) {
			imgBlob = containerView.toImage(toImageIsDone, true);

		} else {
			imgBlob = containerView.toImage();
			toImageIsDone();
		}
	
		function toImageIsDone() {
			Ti.API.info(imgBlob.length);
	
			if (OS_is_Android) {
				var fileName = Ti.Filesystem.externalStorageDirectory + 'shareImg.jpg';
			} else {
				var fileName = Ti.Filesystem.applicationDataDirectory+ 'shareImg.jpg';
			}
	
	
	
			var imageFile = Ti.Filesystem.getFile(fileName);
	
			if (OS_is_Android) {
				imageFile.write(imgBlob.media);
	
			} else {
				imageFile.write(imgBlob);
			}
	
			imageFile = Ti.Filesystem.getFile(fileName);
			if (imageFile.exists()) {
				
				if (OS_is_Android) {
					intent = Ti.Android.createIntent({
						action : Ti.Android.ACTION_SEND,
						type : "image/*"
					});
					intent.putExtraUri(Ti.Android.EXTRA_STREAM, imageFile.nativePath);
	
					try {
						Ti.Android.currentActivity.startActivityForResult(intent, function(e) {
							if (e.error === undefined) {
								//inget fel, men på android kan användaren ha även avbrutit
	
							} else {
								alertD(L('share_error'));
							}
	
						});
					} catch(err) {
						alertD(L('share_error'));
					}
	
				} else {
					
					
					Titanium.Media.saveToPhotoGallery(imgBlob,{
				            "success": function(e){
				                   confirmSave.visible = true;
				                	paintView.clear();
				                
				                setTimeout(function()
									{
									  confirmSave.visible = false;
 
									},1500);
				                
				                 
				            },
				            "error": function(e){
				                
				                confirmSave.text = 'Sorry try again'; 
				                confirmSave.visible = true; 
				                
				                setTimeout(function()
									{
									  confirmSave.visible = false;
 
									},1500);
				                
				                
				            }
        });         
					//iOS om du vill visa alla val med Fb osv
					/*z = Ti.UI.iOS.createDocumentViewer({
						url : imageFile.nativePath
					});
	
					
					z.show({
						animated : true,
						view : overallview
					});*/
					
					
				}
			}
		}
	
}
	