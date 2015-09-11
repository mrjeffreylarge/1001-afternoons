
$("document").ready(function () {

	/*
	need to grab the height of the window so we can start with the buckets stuck there
	make the content box 100% height of the window \/
	take off a little of the win height to compensate for height of the buckets and nav
	
	then link resize to resize the main content box making it 100% height




	*/
	//dem variables
	var win   		  = $(window),
		body		  = $(document),
		buckets 	  = $("#fixedBuckets"),
		bucketsHeight = buckets.innerHeight(),
		nav 		  = $("nav"),
		navItems	  = $("#navItems"),
		navHeight 	  = nav.innerHeight(),
		social		  = $("#social"),
		speadTheWord  = $("#speadTheWord"),
		hero 		  = $("#heroUnit"),
		panelOne 	  = $("#theFilm"),
		panelTwo 	  = $("#theArtists"),
		panelThree 	  = $("#screeningsContact"),
		sharePop	  = $("#sharePop"),
		toggleShare   = $(".toggleShare");

	//dat big variable
	var Page = {
		isMobile : function(){
			var response = false;
			if(win.width() < 768) {
				//ya u mobile.
				response = true;
			}
			return response;
		}
	}


	//dem functions
	function initHero() {
		//check to see if we are in mobile land
		// if(!Page.isMobile()) {
		// 	//make sure to reset this ! ;)
		// 	windowHeight  = win.height();
		// 	var newHeight = windowHeight - navHeight;
		// 	hero.css({"height" : newHeight + "px"});
		// 	buckets.css({"marginTop" : "-" + 266 + "px"}); //hardcode fornow...
		// }
		// else if(Page.isMobile()) {
		// 	// hero.css({"height" : "auto"});
		// }
		// else {
		// 	//wut
		// }
		
	}

	function checkBuckets() {
		//make sure to reset this ! ;)
		var maxHeight = null;
		//wierd error when doing this on mobiel.. not sure why
		if(!Page.isMobile()) {
			maxHeight  = hero.innerHeight();
			if(body.scrollTop() >= (maxHeight - navHeight)) {
				navItems.fadeIn();
				social.fadeIn();
				speadTheWord.hide();
				nav.css({"background" : "#1d1c19"});
			}
			else {
				navItems.hide();
				social.hide();
				speadTheWord.fadeIn();
				nav.css({"background" : "transparent"});
			}
		}

		
		
	}

	function panelOneInit() {
		if(body.scrollTop() >= panelOne.offset().top) {
			//make that shit fixed
			
			if(body.scrollTop() >= (panelOne.offset().top + panelOne.innerHeight())) {
				$("#theFilm .fixedImage").removeClass("fixMe").addClass("unfixMe");
			}
			else {
				$("#theFilm .fixedImage").removeClass("unfixMe").addClass("fixMe");
			}
		}
		if(body.scrollTop() < (panelOne.offset().top)) {
			$("#theFilm .fixedImage").removeClass("fixMe").addClass("unfixMe");
		}

	}
	function panelTwoInit() {
		if(body.scrollTop() >= panelTwo.offset().top) {
			//make that shit fixed
			
			if(body.scrollTop() >= (panelTwo.offset().top + panelTwo.innerHeight())) {
				$("#theArtists .fixedImage").removeClass("fixMe").addClass("unfixMe");
			}
			else {
				$("#theArtists .fixedImage").removeClass("unfixMe").addClass("fixMe");
			}
		}
		if(body.scrollTop() < (panelTwo.offset().top)) {
			$("#theArtists .fixedImage").removeClass("fixMe").addClass("unfixMe");
		}

	}
	function panelThreeInit() {
		if(body.scrollTop() >= panelThree.offset().top) {
			//make that shit fixed
			
			if(body.scrollTop() >= (panelThree.offset().top + panelThree.innerHeight())) {
				$("#screeningsContact .fixedImage").removeClass("fixMe").addClass("unfixMe");
			}
			else {
				$("#screeningsContact .fixedImage").removeClass("unfixMe").addClass("fixMe");
			}
		}
		if(body.scrollTop() < (panelThree.offset().top)) {
			$("#screeningsContact .fixedImage").removeClass("fixMe").addClass("unfixMe");
		}

	}

	function toggleSharePop(e) {
		if(e.target.id == "sharePop") {
			if(sharePop.hasClass("active")) {
				sharePop.fadeOut().promise().done(function(){
					sharePop.removeClass("active");
				});
			}
		}
		
		if(!sharePop.hasClass("active")) {
			sharePop.fadeIn().promise().done(function(){
				sharePop.addClass("active");
			});
		}
	}
	//get time
	// var currentdate = new Date(); 
	// var time = currentdate.getHours();
 //    if(time > 18) {
 //    	$("body").addClass("night");
 //    	$("#desktop").attr("src", "img/1001logo.png");
 //    	$("#mobile").attr("src", "img/1001logoMobile_night.png");
 //    }
	//check to see 
	initHero();
	checkBuckets();
	if(!Page.isMobile()) {
		$(".content .leftContentPane").css({"marginTop" : win.height() + "px"});
		$("#theIdea .fixedImage").css({"height" : (win.height() + 50) + "px"});
		$("#theFilm .fixedImage").css({"height" : (win.height() + 50) + "px"});
		$("#getInvolved .fixedImage").css({"height" : (win.height() + 50) + "px"});
	}
	else {
		$(".content .leftContentPane").css({"marginTop" : "0px"});
		$("#videoArea").html('<iframe src="//player.vimeo.com/video/79164578" width="240" height="135" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	}
	


	toggleShare.click(function(e){
		toggleSharePop(e);
	});

	if(Page.isMobile()) {
		navItems.show();
		social.show();
		speadTheWord.hide();
	}
	$(window).resize(function(e){
		initHero();

	});
	$(document).scroll(function(){
		checkBuckets();
		if(!Page.isMobile()) {
			panelOneInit();
			panelTwoInit();
			panelThreeInit();
			$(".content .leftContentPane").css({"marginTop" : win.height() + "px"});
			$("#theIdea .fixedImage").css({"height" : (win.height() + 50) + "px"});
			$("#theFilm .fixedImage").css({"height" : (win.height() + 50) + "px"});
			$("#getInvolved .fixedImage").css({"height" : (win.height() + 50) + "px"});
		}
		else {
			$(".content .leftContentPane").css({"marginTop" : "0px"});
		}
		if(!Page.isMobile()) {
			
		}

	});
});