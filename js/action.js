$(document).ready(function(){
	var numberOfAnimation = $(".animation").length;
	var numberOfAnimation2nd = $(".animation2nd").length;
	var numberOfAnimationOther = $(".animationOther").length;
	var scrollPosition, screenHeight;
	var selectAnimationObject= 0;
	var selectAnimationObject2nd= 0;
	var completeAnimationObject2nd=0;
	var selectAnimationObjectOther= 0;
	var positionSpecialBox=$(".specialBox").offset();
	var positionSpecialLine=$(".specialLine").offset();
	var selectedImage=0;
	var whichGallery;
	var screenWidth = $(window).width();
	var webBrowser =navigator.userAgent;
		showObjectOther();
		showPicture();
		showObject();
		showObject2nd();
	$('a[href*="#"]').click(scroll);
	$(".animation").addClass("hidden");
	$(".animation2nd").addClass("hidden");
	$(".animationOther").addClass("hidden");
	$(".webdiscriptions ul li").eq(0).hover (function(){
		$(this).css("background","rgb(142,148,155,0.5");
		$(".look").eq(0).css("left","98%").css("opacity","1");
		$(".technologyLogo img").eq(0).css("opacity","1");
	},function(){
		$(this).css("background","none");
		$(".look").eq(0).css("left","15%").css("opacity","0");
		$(".technologyLogo img").eq(0).css("opacity","0");
	});
	$(".webdiscriptions ul li").eq(1).hover (function(){
		$(this).css("background","rgb(142,148,155,0.5");
		$(".look").eq(1).css("left","98%").css("opacity","1");
		$(".technologyLogo img").eq(1).css("opacity","1");
	},function(){
		$(this).css("background","none");
		$(".look").eq(1).css("left","15%").css("opacity","0");
		$(".technologyLogo img").eq(1).css("opacity","0");
	});
	$(".webdiscriptions ul li").eq(2).hover (function(){
		$(this).css("background","rgb(142,148,155,0.5");
		$(".look").eq(2).css("left","98%").css("opacity","1");
		$(".technologyLogo img").eq(2).css("opacity","1");
	},function(){
		$(this).css("background","none");
		$(".look").eq(2).css("left","15%").css("opacity","0");
		$(".technologyLogo img").eq(2).css("opacity","0");
	});
	$(".webdiscriptions ul li").eq(3).hover (function(){
		$(this).css("background","rgb(142,148,155,0.5");
		$(".look").eq(3).css("left","98%").css("opacity","1");
		$(".technologyLogo img").eq(3).css("opacity","1");
	},function(){
		$(this).css("background","none");
		$(".look").eq(3).css("left","15%").css("opacity","0");
		$(".technologyLogo img").eq(3).css("opacity","0");
	});
	$(".webdiscriptions ul li").eq(4).hover (function(){
		$(this).css("background","rgb(142,148,155,0.5");
		$(".look").eq(4).css("left","98%").css("opacity","1");
		$(".technologyLogo img").eq(4).css("opacity","1");
	},function(){
		$(this).css("background","none");
		$(".look").eq(4).css("left","15%").css("opacity","0");
		$(".technologyLogo img").eq(4).css("opacity","0");
	});
	$(".webdiscriptions ul li").eq(5).hover (function(){
		$(this).css("background","rgb(142,148,155,0.5");
		$(".look").eq(5).css("left","98%").css("opacity","1");
		$(".technologyLogo img").eq(5).css("opacity","1");
	},function(){
		$(this).css("background","none");
		$(".look").eq(5).css("left","15%").css("opacity","0");
		$(".technologyLogo img").eq(5).css("opacity","0");
	});
	$(".webdiscriptions ul li").eq(6).hover (function(){
		$(this).css("background","rgb(142,148,155,0.5");
		$(".look").eq(6).css("left","98%").css("opacity","1");
		$(".technologyLogo img").eq(6).css("opacity","1");
	},function(){
		$(this).css("background","none");
		$(".look").eq(6).css("left","15%").css("opacity","0");
		$(".technologyLogo img").eq(6).css("opacity","0");
	});
	$(".webdiscriptions ul li").eq(7).hover (function(){
		$(this).css("background","rgb(142,148,155,0.5");
		$(".look").eq(7).css("left","98%").css("opacity","1");
		$(".technologyLogo img").eq(7).css("opacity","1");
	},function(){
		$(this).css("background","none");
		$(".look").eq(7).css("left","15%").css("opacity","0");
		$(".technologyLogo img").eq(7).css("opacity","0");
	});
		$(window).scroll(function(){
			scrollPosition=$(window).scrollTop();
			screenHeight = screen.height;	
			showObjectOther();
			showPicture();
			showObject();
			showObject2nd();
			if(scrollPosition > 150){
				$(".fixedNavigation").css("top","0%")
			}else{
				$(".fixedNavigation").css("top","-20%")
			}
			if(screenWidth > 576){
			if (positionSpecialBox.top <= scrollPosition){
				$(".specialBox").removeClass("specialBoxFixedEnd");
				$(".specialBox").addClass("specialBoxFixed");
			}
			if (positionSpecialLine.top > scrollPosition){
				$(".specialBox").removeClass("specialBoxFixed");
			}	
			var endFixedPosition = $(".specialLine").eq(1).offset().top - $(".specialBox").height();
			if (endFixedPosition < scrollPosition){
				$(".specialBox").removeClass("specialBoxFixed");
				$(".specialBox").addClass("specialBoxFixedEnd");		
			}
		return scrollPosition, screenHeight;
			}
		});
//pokazywanie objektu o klasie animation--------------------------//			
	function showObject (){
			if (webBrowser === "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.3; Zoom 3.6.0; rv:11.0) like Gecko"){
		$(".animation").addClass("show").removeClass("hidden animated hinge");
			}
	else{
		var visableObject = screenHeight * 60 / 100;
		var offsetAnimationObject=$(".animation").eq(selectAnimationObject).offset();	
		if(selectAnimationObject < numberOfAnimation){ 
			if (offsetAnimationObject.top - visableObject <= scrollPosition){
				$(".animation").eq(selectAnimationObject).addClass("show").removeClass("hidden animated hinge");
				$(".animation").eq(selectAnimationObject).addClass('animated tada');
				if (selectAnimationObject < numberOfAnimation -1 ){
				selectAnimationObject=selectAnimationObject + 1
				};			
			}else {
				$(".animation").eq(selectAnimationObject).addClass("hidden animated hinge").removeClass("show animated tada");
				if (selectAnimationObject >0 ){
				selectAnimationObject = selectAnimationObject - 1	
				}
			};
		};
		return selectAnimationObject;
	}
	};
//ukrycie objektu o klasie animation--------------------------//

//pokazywanie objektu o klasie animation2nd--------------------------//			
	function showObject2nd (){
	if (webBrowser === "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.3; Zoom 3.6.0; rv:11.0) like Gecko"){
		$(".animation2nd").addClass("show").removeClass("hidden animated flipOutX");
			}
	else{
		var visableObject = screenHeight * 70 / 100;
		var offsetAnimationObject=$(".animation2nd").eq(selectAnimationObject2nd).offset();
		var checkClass=$(".animation2nd").eq(0).attr("id");
		if(selectAnimationObject2nd < numberOfAnimation2nd){ 
			if (offsetAnimationObject.top - visableObject <= scrollPosition){
				$(".animation2nd").eq(selectAnimationObject2nd).addClass("show").removeClass("hidden animated flipOutX");
				$(".animation2nd").eq(selectAnimationObject2nd).addClass('animated jello');
				if (selectAnimationObject2nd < numberOfAnimation2nd -1 ){
				selectAnimationObject2nd = selectAnimationObject2nd + 1
				};
			}else {
				$(".animation2nd").eq(selectAnimationObject2nd).addClass("hidden animated flipOutX").removeClass("show animated jello");
				if (selectAnimationObject2nd >0 ){
				selectAnimationObject2nd = selectAnimationObject2nd - 1	
				}
			};
		};
		return selectAnimationObject2nd;
	}
	};
	function showObjectOther(){
			if (webBrowser === "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.3; Zoom 3.6.0; rv:11.0) like Gecko"){
		$(".animationOther").addClass("show").removeClass("hidden animated flash");
			}
	else{
		var visableObject = screenHeight * 40 / 100;
		var offsetAnimationObject=$(".animationother").eq(selectAnimationObjectOther).offset();
		var checkClass=$(".animationOther").eq(0).attr("id");
		if(selectAnimationObjectOther < numberOfAnimationOther){ 
			if (offsetAnimationObject.top - visableObject <= scrollPosition){
				$(".animationOther").eq(selectAnimationObjectOther).addClass("show").removeClass("hidden animated flash");
				$(".animationOther").eq(selectAnimationObjectOther).attr("id","shown");
				$(".animationOther").eq(selectAnimationObjectOther).addClass('animated flash');
				if (selectAnimationObjectOther < numberOfAnimationOther -1 ){
				selectAnimationObjectOther=selectAnimationObjectOther + 1
				};
			}else {
				$(".animationother").eq(selectAnimationObjectOther).addClass("hidden animated flash").removeClass("show animated flash");
				$(".animation2nd").eq(selectAnimationObject2nd).removeAttr("id","shown");
				if (selectAnimationObjectOther >0 ){
				selectAnimationObjectOther = selectAnimationObjectOther - 1	
				}
			};
		};
	}
	};
	function showPicture(){
		var visableObject = screenHeight * 50 / 100;
		var offsetPicture=$("#picture").offset(); 
		if (offsetPicture.top - visableObject <= scrollPosition){
			$("#picture").css("height","100%")
		}else{
			$("#picture").css("height","0%")
		}
	};
	
//============================wyjaśnienie===================
	$(".firstQuest").hover(function(){
		$(".explanation-layout").css("opacity",1).css("right","0%");	
	},function(){
		$(".explanation-layout").css("opacity",0).css("right","40%");
	});
	$(".secondQuest").hover(function(){
		$(".explanation-banner").css("opacity",1).css("right","0%");	
	},function(){
		$(".explanation-banner").css("opacity",0).css("right","40%");
	});
	$(".thirdQuest").hover(function(){
		$(".explanation-logo").css("opacity",1).css("right","0%");	
	},function(){
		$(".explanation-logo").css("opacity",0).css("right","40%");
	});
	$(".fourthQuest").hover(function(){
		$(".explanation-info").css("opacity",1).css("right","0%");	
	},function(){
		$(".explanation-info").css("opacity",0).css("right","40%");
	});
	$(".fifthQuest").hover(function(){
		$(".explanation-leaflet").css("opacity",1).css("right","0%");	
	},function(){
		$(".explanation-leaflet").css("opacity",0).css("right","40%");
	});
	$(".sixthQuest").hover(function(){
		$(".explanation-paper").css("opacity",1).css("right","0%");	
	},function(){
		$(".explanation-paper").css("opacity",0).css("right","40%");
	});
//============================przewijanie strony===================
	function scroll(e) {
	  var href = $(this).attr('href');
		$(".animationOther").addClass("show");
		$(".animation2nd").addClass("show");
		$(".animation").addClass("show");
		$('html, body').animate({
			scrollTop:$(href).offset().top
		}, 1000);
		location.hash = href;
	};
//============================Galeria Strony ===================
	 $(".gallery").click(function(empty){
		 empty.preventDefault();
		 whichGallery="site";
		 selectedImage = $(this).attr("id");
		 $(document.body).append('<div class="galleryBackground"></div>')
		 $(".sampleGrpahics").append('<div class="buttonBorder"></div>')
		 $(".buttonBorder").append('<div class="insideGalleryBackground"></div>');
		 $(".insideGalleryBackground").append('<img src="image/grafika/strony/big/'+selectedImage+'.jpg"></img>');
		 $(".closeButton").css("zIndex","7").css("opacity","1");
		 $(".buttonBorder").css("top","10%");
		 $(".rightButtonGraphic").css("zIndex","7").css("opacity","1").css("right","-9% !important").css("top","30%!important");
		 $(".leftButtonGraphic").css("zIndex","7").css("opacity","1").css("left","-9% !important").css("top","30%!important");
		 return selectedImage, whichGallery;
		 
	 });
	$(".closeButton").click(function(){
		$(".closeButton").removeAttr('style')
		$(".rightButtonGraphic").removeAttr('style')
		$(".leftButtonGraphic").removeAttr('style')
		$(".buttonBorder").removeAttr('style');
		$(".galleryBackground").remove();
		$(".insideGalleryBackground").remove();
	});
	$(".rightButtonGraphic").click(function(){	
		var howManyId;
		if (whichGallery =="site"){
			howManyId= $(".exampleContainer").find ("img").length;
		}else if (whichGallery =="logo"){
			howManyId= $(".exampleContainerLogo").find ("img").length;
		}else if (whichGallery =="banner"){
			howManyId= $(".exampleContainer2").find ("img").length;
		}else if (whichGallery =="cards"){
			howManyId= $(".exampleContainerCards").find ("img").length;
		}else if (whichGallery =="photo"){
			howManyId= $(".exampleContainer3").find ("img").length -3;
		}
		var numberOfImage = parseInt(selectedImage);
		if (selectedImage <= howManyId -1){
			numberOfImage = numberOfImage +1;
			selectedImage = numberOfImage;
		$(".insideGalleryBackground img").remove()	
		if (whichGallery =="site"){
			$(".insideGalleryBackground").append('<img src="image/grafika/strony/big/'+selectedImage+'.jpg"></img>');
		}else if (whichGallery =="logo"){
			$(".insideGalleryBackground").append('<img src="image/grafika/logo/big/'+selectedImage+'.jpg"></img>');
		}else if (whichGallery =="banner"){
			$(".insideGalleryBackground").append('<img src="image/grafika/infografika/big/'+selectedImage+'.jpg"></img>');
		}else if (whichGallery =="cards"){
			$(".insideGalleryBackground").append('<img src="image/grafika/wizytowki/big/'+selectedImage+'.jpg"></img>');
		}else if (whichGallery =="photo"){
			$(".insideGalleryBackground").append('<img src="image/grafika/zdjecia/big/'+selectedImage+'.jpg"></img>');
		}		
			return selectedImage	
		}
		else{
			selectedImage = 1 
		$(".insideGalleryBackground img").remove()	
		if (whichGallery =="site"){
			$(".insideGalleryBackground").append('<img src="image/grafika/strony/big/'+selectedImage+'.jpg"></img>');
		}else if (whichGallery =="logo"){
			$(".insideGalleryBackground").append('<img src="image/grafika/logo/big/'+selectedImage+'.jpg"></img>');
		}else if (whichGallery =="banner"){
			$(".insideGalleryBackground").append('<img src="image/grafika/infografika/big/'+selectedImage+'.jpg"></img>');
		}else if (whichGallery =="cards"){
			$(".insideGalleryBackground").append('<img src="image/grafika/wizytowki/big/'+selectedImage+'.jpg"></img>');
		}else if (whichGallery =="photo"){
			$(".insideGalleryBackground").append('<img src="image/grafika/zdjecia/big/'+selectedImage+'.jpg"></img>');
		}
			return selectedImage;
		}
	});
	$(".leftButtonGraphic").click(function(){
		var howManyId;
		if (whichGallery =="site"){
			howManyId= $(".exampleContainer").find ("img").length;
		}else if (whichGallery =="logo"){
			howManyId= $(".exampleContainerLogo").find ("img").length;
		}else if (whichGallery =="banner"){
			howManyId= $(".exampleContainer2").find ("img").length;
		}else if (whichGallery =="cards"){
			howManyId= $(".exampleContainerCards").find ("img").length;
		}else if (whichGallery =="photo"){
			howManyId= $(".exampleContainer3").find ("img").length -3;
		}
		var numberOfImage = parseInt(selectedImage);
		if (selectedImage > 1){
			numberOfImage = numberOfImage -1;
			selectedImage = numberOfImage;
		$(".insideGalleryBackground img").remove()	
		if (whichGallery =="site"){
			$(".insideGalleryBackground").append('<img src="image/grafika/strony/big/'+selectedImage+'.jpg"></img>');
		}else if (whichGallery =="logo"){
			$(".insideGalleryBackground").append('<img src="image/grafika/logo/big/'+selectedImage+'.jpg"></img>');
		}else if (whichGallery =="banner"){
			$(".insideGalleryBackground").append('<img src="image/grafika/infografika/big/'+selectedImage+'.jpg"></img>');
		}else if (whichGallery =="cards"){
			$(".insideGalleryBackground").append('<img src="image/grafika/wizytowki/big/'+selectedImage+'.jpg"></img>');
		}else if (whichGallery =="photo"){
			$(".insideGalleryBackground").append('<img src="image/grafika/zdjecia/big/'+selectedImage+'.jpg"></img>');
		}		 
			return selectedImage	
		}else{
			selectedImage = howManyId 
		$(".insideGalleryBackground img").remove()	
		if (whichGallery =="site"){
			$(".insideGalleryBackground").append('<img src="image/grafika/strony/big/'+selectedImage+'.jpg"></img>');
		}else if (whichGallery =="logo"){
			$(".insideGalleryBackground").append('<img src="image/grafika/logo/big/'+selectedImage+'.jpg"></img>');
		}else if (whichGallery =="banner"){
			$(".insideGalleryBackground").append('<img src="image/grafika/infografika/big/'+selectedImage+'.jpg"></img>');
		}else if (whichGallery =="cards"){
			$(".insideGalleryBackground").append('<img src="image/grafika/wizytowki/big/'+selectedImage+'.jpg"></img>');
		}else if (whichGallery =="photo"){
			$(".insideGalleryBackground").append('<img src="image/grafika/zdjecia/big/'+selectedImage+'.jpg"></img>');
		}
			return selectedImage;
		}
	});
	//============================Galeria Logo ===================
	 $(".galleryLogo").click(function(empty){
		empty.preventDefault();
		 whichGallery="logo";
		 selectedImage = $(this).attr("id");
		 $(document.body).append('<div class="galleryBackground"></div>')
		 $(".sampleGrpahics").append('<div class="buttonBorder"></div>')
		 $(".buttonBorder").append('<div class="insideGalleryBackground"></div>');
		 $(".insideGalleryBackground").append('<img src="image/grafika/logo/big/'+selectedImage+'.jpg"></img>');
		 $(".closeButton").css("zIndex","7").css("opacity","1");
		 $(".buttonBorder").css("top","10%");
		 $(".rightButtonGraphic").css("zIndex","7").css("opacity","1").css("right","-9%");
		 $(".leftButtonGraphic").css("zIndex","7").css("opacity","1").css("left","-9%");
		 return selectedImage, whichGallery;
		 
	 });
	 //============================Galeria Infografika ===================
	 $(".galleryBanner").click(function(empty){
		empty.preventDefault();
		 whichGallery="banner";
		 var screenWidth = $(window).width();
		 selectedImage = $(this).attr("id");
		 $(document.body).append('<div class="galleryBackground"></div>')
		 $(".sampleGrpahics").append('<div class="buttonBorder"></div>')
		 $(".buttonBorder").append('<div class="insideGalleryBackground"></div>');
		 $(".insideGalleryBackground").append('<img src="image/grafika/infografika/big/'+selectedImage+'.jpg"></img>');
		 $(".closeButton").css("zIndex","7").css("opacity","1");
		 $(".buttonBorder").css("top","10%");
		 $(".rightButtonGraphic").css("zIndex","7").css("opacity","1").css("right","-4%");
		 $(".leftButtonGraphic").css("zIndex","7").css("opacity","1").css("left","-4%"); 
		 return selectedImage, whichGallery;
		 
	 });
	 //============================Galeria wizytówki ===================
	 $(".galleryCards").click(function(empty){
		empty.preventDefault();
		 whichGallery="cards";
		 selectedImage = $(this).attr("id");
		 $(document.body).append('<div class="galleryBackground"></div>')
		 $(".sampleGrpahics").append('<div class="buttonBorder"></div>')
		 $(".buttonBorder").append('<div class="insideGalleryBackground"></div>');
		 $(".insideGalleryBackground").append('<img src="image/grafika/wizytowki/big/'+selectedImage+'.jpg"></img>');
		 $(".closeButton").css("zIndex","7").css("opacity","1");
		 $(".buttonBorder").css("top","10%");
		 $(".rightButtonGraphic").css("zIndex","7").css("opacity","1").css("right","-5%");
		 $(".leftButtonGraphic").css("zIndex","7").css("opacity","1").css("left","-5%");
		 return selectedImage, whichGallery;
		 
	 });
	//============================Galeria zdjęcia ===================
	 $(".galleryPhoto").click(function(empty){
		 empty.preventDefault();
		 whichGallery="photo";
		 selectedImage = $(this).attr("id");
		 $(document.body).append('<div class="galleryBackground"></div>')
		 $(".sampleGrpahics").append('<div class="buttonBorder"></div>')
		 $(".buttonBorder").append('<div class="insideGalleryBackground"></div>');
		 $(".insideGalleryBackground").append('<img src="image/grafika/zdjecia/big/'+selectedImage+'.jpg"></img>');
		 $(".closeButton").css("zIndex","7").css("opacity","1");
		 $(".buttonBorder").css("top","10%");
		 $(".rightButtonGraphic").css("zIndex","7").css("opacity","1").css("right","-4%");
		 $(".leftButtonGraphic").css("zIndex","7").css("opacity","1").css("left","-4%");
		 return selectedImage, whichGallery;
		 
	 });
//============================Galeria ulotki ===================
	$(".galleryLeaflet").click(function(empty){
		 empty.preventDefault();
		 whichGallery="leaflet";
		 selectedImage = $(this).attr("id");
		 $(document.body).append('<div class="galleryBackground"></div>')
		 $(".sampleGrpahics").append('<div class="buttonBorder"></div>')
		 $(".buttonBorder").append('<div class="insideGalleryBackground"></div>');
		 $(".insideGalleryBackground").append('<img src="image/grafika/ulotki/big/'+selectedImage+'.jpg"></img>');
		 $(".insideGalleryBackground").addClass("leafletImage");
		 $(".buttonBorder").css("top","10%");
		 $(".closeButton").css("zIndex","7").css("opacity","1");
		 return selectedImage, whichGallery;
		 
	 });
//============================ mini Menu ===================
	$(".navigationFixedWebButton").click(function(){
			$(".miniNavigationFixedWeb ol").removeClass("hideNavigation")
			$(".navigationFixedWebButton").css("display","none");
			$(".navigationFixedWebButtonClose").css("display","block");
		});
	$(".navigationFixedWebButtonClose").click(function(){
			$(".miniNavigationFixedWeb ol").addClass("hideNavigation")
			$(".navigationFixedWebButton").css("display","block");
			$(".navigationFixedWebButtonClose").css("display","none");
	});
	$(".navigationFixedAboutMeButton").click(function(){
			$(".miniNavigationFixedAboutMe ol").removeClass("hideNavigation")
			$(".navigationFixedAboutMeButton").css("display","none");
			$(".navigationFixedAboutMeButtonClose").css("display","block");
		});
	$(".navigationFixedAboutMeButtonClose").click(function(){
			$(".miniNavigationFixedAboutMe ol").addClass("hideNavigation")
			$(".navigationFixedAboutMeButton").css("display","block");
			$(".navigationFixedAboutMeButtonClose").css("display","none");
	});
	$(".navigationFixedGraphicButton").click(function(){
			$(".miniNavigationFixedGraphic ol").removeClass("hideNavigation")
			$(".navigationFixedGraphicButton").css("display","none");
			$(".navigationFixedGraphicButtonClose").css("display","block");
		});
	$(".navigationFixedGraphicButtonClose").click(function(){
			$(".miniNavigationFixedGraphic ol").addClass("hideNavigation")
			$(".navigationFixedGraphicButton").css("display","block");
			$(".navigationFixedGraphicButtonClose").css("display","none");
	});
});

