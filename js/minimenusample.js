$(document).ready(function(){
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