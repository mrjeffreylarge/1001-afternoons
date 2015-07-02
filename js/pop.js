//popup

$(document).ready(function () {

	var popable = $(".pop"),
		video	= $("#video");

	popable.click(function(){
		console.log("clicked");
		var that = $(this);
		var friend = that.data("id");
		$("#" + friend).show();
	});

	video.click(function(e){
		if(e.target.id == "video") {
			video.hide();
		}
	});

});