$("document").ready (function(){
	var style = 0;
	var help = 7;
	var screenWidth = $(window).width();
	animateBackgroundGraphic();
	askMark();
	
	//=====================animacja obrazków tła==================
	function animateBackgroundGraphic(){
	  $( "#code1" ).animate({
			left: "40%",
			top:"5%",
			width:"20%",
		  }, 2000);
		  $( "#code2" ).animate({
			left: "20%",
			top:"40%",
			width:"20%",
		  }, 2000);
		  $( "#code3" ).animate({
			left: "35%",
			top:"75%",
			width:"20%",
		  }, 2000);
		   $( "#graph1" ).animate({
			left: "35%",
			top:"10%",
			width:"20%",
		  }, 2000)
		   $( "#graph2" ).animate({
			left: "60%",
			top:"40%",
			width:"20%",
		  }, 2000)
		   $( "#graph3" ).animate({
			left: "35%",
			top:"75%",
			width:"20%",
		  }, 2000)
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
	function askMark(){
		$(".graphicSpecialBox img").eq(help).addClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).addClass("showInfo animated tada");
	}
	$(".html5").click (function(){
		if(screenWidth < 576){
			$(".specialBox").css("display","block");
			$(".specialBox").addClass("miniSpecialBox");
		}
		$(".graphicSpecialBox img").eq(help).removeClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).removeClass("showInfo animated tada");	
		help=0
		$(".graphicSpecialBox img").eq(help).addClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).addClass("showInfo animated tada");	
	});
	$(".css3").click (function(){
		if(screenWidth < 576){
			$(".specialBox").css("display","block");
			$(".specialBox").addClass("miniSpecialBox");
		}
		$(".graphicSpecialBox img").eq(help).removeClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).removeClass("showInfo animated tada");	
		help=1
		$(".graphicSpecialBox img").eq(help).addClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).addClass("showInfo animated tada");
	});
	
	$(".rwd").click (function(){
		if(screenWidth < 576){
			$(".specialBox").css("display","block");
			$(".specialBox").addClass("miniSpecialBox");
		}
		$(".graphicSpecialBox img").eq(help).removeClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).removeClass("showInfo animated tada");	
		help=2
		$(".graphicSpecialBox img").eq(help).addClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).addClass("showInfo animated tada");	
	});
	$(".javascript").click (function(){
		if(screenWidth < 576){
			$(".specialBox").css("display","block");
			$(".specialBox").addClass("miniSpecialBox");
		}
		$(".graphicSpecialBox img").eq(help).removeClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).removeClass("showInfo animated tada");	
		help=3
		$(".graphicSpecialBox img").eq(help).addClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).addClass("showInfo animated tada");
	});
	$(".jquery").click (function(){
		if(screenWidth < 576){
			$(".specialBox").css("display","block");
			$(".specialBox").addClass("miniSpecialBox");
		}
		$(".graphicSpecialBox img").eq(help).removeClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).removeClass("showInfo animated tada");	
		help=4
		$(".graphicSpecialBox img").eq(help).addClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).addClass("showInfo animated tada");	
	});
	$(".bootstrap").click (function(){
		if(screenWidth < 576){
			$(".specialBox").css("display","block");
			$(".specialBox").addClass("miniSpecialBox");
		}
		$(".graphicSpecialBox img").eq(help).removeClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).removeClass("showInfo animated tada");	
		help=5
		$(".graphicSpecialBox img").eq(help).addClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).addClass("showInfo animated tada");
	});
	$(".sass").click (function(){
		if(screenWidth < 576){
			$(".specialBox").css("display","block");
			$(".specialBox").addClass("miniSpecialBox");
		}
		$(".graphicSpecialBox img").eq(help).removeClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).removeClass("showInfo animated tada");	
		help=6
		$(".graphicSpecialBox img").eq(help).addClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).addClass("showInfo animated tada");	
	});
	$(".leftButton").click (function(){
		if(help < 0){
			help=7
		}
		$(".graphicSpecialBox img").eq(help).removeClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).removeClass("showInfo animated tada");	
		help= help - 1;
		$(".graphicSpecialBox img").eq(help).addClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).addClass("showInfo animated tada")
		
	});
	$(".rightButton").click (function(){
		if(help >= 7){
			help=-1
		}
		$(".graphicSpecialBox img").eq(help).removeClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).removeClass("showInfo animated tada");	
		help= help + 1;
		$(".graphicSpecialBox img").eq(help).addClass("showGraphic animated flip");
		$(".discriptionsSpecialBox p").eq(help).addClass("showInfo animated tada")
		return help;
	});
	$(".closeButtonMiniInfo").click(function(){
		$(".specialBox").removeAttr('style');
		$(".specialBox").removeClass("miniSpecialBox");
	})
});