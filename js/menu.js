$("document").ready (function(){
	var style = 0;
	var complete = 0;
	var screenSize = $(window).width();
	$(".webNavigation").click(function(){
		$(".aboutMeNavigation").css("zIndex","1");
		$(".graphicNavigation").css("zIndex","1");
		$(".graphicNavigation span").css("opacity","0");
		$(".aboutMeNavigation span").css("opacity","0");
		var newSize =$(this).width();
		if (style == "0"){
			$(this).css("borderRadius","100%").css("background","#ffffff").css("zIndex","3");
			$(".webNavigation span").css("color","#56738E");
			$(".webNavigationSample").css("display","block")
			$(".webNavigationDiscriptions").css("display","block")
			$(".webNavigationContact").css("display","block")
			var miniSizePosition = "46%";
			if(screenSize < 575){
				miniSizePosition ="42%";
			}
			$(".webNavigation").animate({
				left: miniSizePosition,
				width:"+=20",
				height:"+=20"
			},100,function(){
				$(".aboutMeNavigation").animate({
				borderRadius:"100%",
				marginTop:"4%",
				width:"0",
				height:"0",
				opacity:"0"
			},300)
				$(".graphicNavigation").animate({
					borderRadius:"100%",
					left:"46%",
					width:"0",
					height:"0",
					opacity:"0"
				},300,function(){
					$(".webMenuOpen").animate({
						opacity:"1"
						})
					$(".webMenu").animate({
						opacity:"0"
						},100,function(){
							$(".webNavigation span").eq(0).css("display","none");
						});	
				});	
			});
			$(".webNavigationSample").animate({
				opacity:"1",
				top:"90%",
				left:miniSizePosition,
				width:newSize,
				height:newSize
			},500,function(){
				$(".webNavigationDiscriptions").animate({
					opacity:"1",
					left:"15%",
					top:"30%",
					width:newSize,
					height:newSize
				},500)
				$(".webNavigationContact").animate({
					opacity:"1",
					left:"74%",
					top:"30%",
					width:newSize,
					height:newSize
				},500)
			});
				$(".webNavigationSample").addClass("webNavigationSampleFinish"),
				$(".webNavigationDiscriptions").addClass("webNavigationDiscriptionsFinish"),
				$(".webNavigationContact").addClass("webNavigationContactFinish");
				style=1;
			
		}else{
			$(".webNavigationDiscriptions").animate({
					width:"5px",
					top:"100%",
					height:"10px",
					left:"50%",
					opacity:"0",
			},700);
			$(".webNavigationContact").animate({
					width:"5px",
					top:"100%",
					height:"10px",
					left:"50%",
					opacity:"0",
					display:"none"
			},700,function(){
				$(".webNavigationSample").animate({
				opacity:"0",
				top:"1vw",
				left:"47%",
				width:"10px",
				height:"5px"
				},100,function(){
					setTimeout(function(){
						$(".webNavigationSample").removeClass("webNavigationSampleFinish");
						$(".webNavigationDiscriptions").removeClass("webNavigationDiscriptionsFinish");
						$(".webNavigationContact").removeClass("webNavigationContactFinish");
						$(".webNavigationSample").removeAttr("style");
						$(".webNavigationDiscriptions").removeAttr("style");
						$(".webNavigationContact").removeAttr("style");
						$(".webNavigation").removeAttr("style");
						$(".aboutMeNavigation").removeAttr("style");
						$(".graphicNavigation").removeAttr("style");
						$(".webNavigation span").removeAttr("style");
						$(".aboutMeNavigation span").removeAttr("style");
						$(".graphicNavigation span").removeAttr("style");
						$(".webMenu").removeAttr("style");
						style=0;
					},500)	
					$(".webMenuOpen").removeAttr("style");
				});
			})		
		}
	});
	$(".aboutMeNavigation").click(function(){
		$(".webNavigation").css("zIndex","1");
		$(".graphicNavigation").css("zIndex","1");
		var newSize =$(this).width();
		if (style == "0"){
			$(this).css("borderRadius","100%").css("background","#ffffff").css("zIndex","3");
			$(".aboutMeNavigation span").css("color","#093904");
			$(".aboutMeNavigationDiscriptions").css("display","block")
			$(".aboutMeNavigationContact").css("display","block")
			$(".aboutMeNavigation").animate({
				borderRadius:"100%",
			},100,function(){
				$(".webNavigation").animate({
				borderRadius:"100%",
				width: "0",
				marginTop:"5%",
				left:"48%",
				height:"0",
				opacity:"0"
			},300)
				$(".graphicNavigation").animate({
					borderRadius:"100%",
					left:"48%",
					marginTop:"5%",
					width:"0",
					height:"0",
					opacity:"0"
				},300,function(){
					$(".aboutMeMenuOpen").animate({
						opacity:"1"
						})
					$(".webMenu").animate({
						opacity:"0"
						},100,function(){
							$(".aboutMeNavigation span").eq(0).css("display","none");
						});
					
				});
				
			});
			$(".aboutMeNavigation").animate({
				width:"+=20",
				height:"+=20"
			},200,function(){
				$(".aboutMeNavigationDiscriptions").animate({
					opacity:"1",
					left:"15%",
					top:"40%",
					width:newSize,
					height:newSize
				},200)
				$(".aboutMeNavigationContact").animate({
					opacity:"1",
					left:"74%",
					top:"40%",
					width:newSize,
					height:newSize
				},200)
			});
				$(".aboutMeNavigationDiscriptions").addClass("aboutMeNavigationDiscriptionsFinish"),
				$(".aboutMeNavigationContact").addClass("aboutMeNavigationContactFinish");
				style=1;
			
		}else{
			$(".aboutMeNavigationDiscriptions").animate({
					width:"5px",
					top:"10%",
					height:"10px",
					left:"47%",
					opacity:"0",
			},500);
			$(".aboutMeNavigationContact").animate({
					width:"5px",
					top:"10%",
					height:"10px",
					left:"47%",
					opacity:"0",
					display:"none"
			},500,(function(){
					setTimeout(function(){
						$(".aboutMeNavigationDiscriptions").removeClass("aboutMeNavigationDiscriptionsFinish");
						$(".aboutMeNavigationContact").removeClass("aboutMeNavigationContactFinish");
						$(".aboutMeNavigationDiscriptions").removeAttr("style");
						$(".aboutMeNavigationContact").removeAttr("style");
						$(".webNavigation").removeAttr("style");
						$(".aboutMeNavigation").removeAttr("style");
						$(".graphicNavigation").removeAttr("style");
						$(".webNavigation span").removeAttr("style");
						$(".aboutMeNavigation span").removeAttr("style");
						$(".graphicNavigation span").removeAttr("style");
						$(".aboutMeMenu").removeAttr("style");
						$(".webMenu").removeAttr("style");
						style=0;
					},500)	
					$(".aboutMeMenuOpen").removeAttr("style");
				})
			)			
		}
	});
	$(".graphicNavigation").click(function(){
		$(".aboutMeNavigation").css("zIndex","1");
		$(".webNavigation").css("zIndex","1");
		var newSize =$(this).width();
		var miniSizePosition = "46%";
			if(screenSize < 575){
				miniSizePosition ="42%";
			}
		if (style == "0"){
			$(this).css("borderRadius","100%").css("background","#ffffff").css("zIndex","3");
			$(".graphicNavigation span").css("color","#940000");
			$(".aboutMeNavigation").css("borderRadius","100%");
			$(".webNavigation").css("borderRadius","100%");
			$(".graphicNavigationSample").css("display","block")
			$(".graphicNavigationDiscriptions").css("display","block")
			$(".graphicNavigationContact").css("display","block")
			$(".graphicNavigation").animate({
				borderRadius:"100%",
				width:"+=20",
				height:"+=20",
				left:miniSizePosition
			},100,function(){
				$(".webNavigation").animate({
				width: "0",
				left:"47%",
				height:"0",
				marginTop:"4%",
				opacity:"0"
				
			},300)
				$(".aboutMeNavigation").animate({
					borderRadius:"100%",
					width: "0",
					left:"47%",
					height:"0",
					marginTop:"4%",
					opacity:0
				},300,function(){
					$(".graphicMenuOpen").animate({
						opacity:"1"
						})
					$(".graphicMenu").animate({
						opacity:"0"
						},100,function(){
							$(".graphicNavigation span").eq(0).css("display","none");
						});	
				});	
			});
			$(".graphicNavigationSample").animate({
				opacity:"1",
				top:"90%",
				left:miniSizePosition,
				width:newSize,
				height:newSize
			},500,function(){
				$(".graphicNavigationDiscriptions").animate({
					opacity:"1",
					left:"15%",
					top:"30%",
					width:newSize,
					height:newSize
				},500)
				$(".graphicNavigationContact").animate({
					opacity:"1",
					left:"70%",
					top:"30%",
					width:newSize,
					height:newSize
				},500)
			});
				$(".graphicNavigationSample").addClass("graphicNavigationSampleFinish"),
				$(".graphicNavigationDiscriptions").addClass("graphicNavigationDiscriptionsFinish"),
				$(".graphicNavigationContact").addClass("graphicNavigationContactFinish");
				style=1;
			
		}else{
			$(".graphicNavigationDiscriptions").animate({
					width:"5px",
					top:"100%",
					height:"10px",
					left:"50%",
					opacity:"0",
			},300);
			$(".graphicNavigationContact").animate({
					width:"5px",
					top:"100%",
					height:"10px",
					left:"50%",
					opacity:"0",
					display:"none"
			},300,function(){
				$(".graphicNavigationSample").animate({
				opacity:"0",
				top:"1vw",
				left:"47%",
				width:"10px",
				height:"5px"
				},100,function(){
					setTimeout(function(){
						$(".graphicNavigationSample").removeClass("graphicNavigationSampleFinish");
						$(".graphicNavigationDiscriptions").removeClass("graphicNavigationDiscriptionsFinish");
						$(".graphicNavigationContact").removeClass("graphicNavigationContactFinish");
						$(".graphicNavigationSample").removeAttr("style");
						$(".graphicNavigationDiscriptions").removeAttr("style");
						$(".graphicNavigationContact").removeAttr("style");
						$(".webNavigation").removeAttr("style");
						$(".aboutMeNavigation").removeAttr("style");
						$(".graphicNavigation").removeAttr("style");
						$(".webNavigation span").removeAttr("style");
						$(".aboutMeNavigation span").removeAttr("style");
						$(".graphicNavigation span").removeAttr("style");
						$(".graphicMenu").removeAttr("style");
						style=0;
					},500)	
					$(".graphicMenuOpen").removeAttr("style");
				});
			})		
		}
	});
	//============================Animacja===================
	$(".leftSideMenu").hover (function(){
		$(".moveBrush").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".moveBrush2").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".moveBrush3").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".moveBrush4").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".moveBrush5").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".moveBrush6").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".moveBrush7").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".moveBrush8").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".moveBrush9").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".otherBackgroundLeft").animate({width: '50%'});	
		if(style=="0"){
		$(".webNavigation").css("transform","rotate(-45deg)");
		}
	},function(){
		$(".moveBrush").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".moveBrush2").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".moveBrush3").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".moveBrush4").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".moveBrush5").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".moveBrush6").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".moveBrush7").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".moveBrush8").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".moveBrush9").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".otherBackgroundLeft").animate({width: '0%'});
		$(".webNavigation").css("transform","rotate(0deg)");
	});
	$(".rightSideMenu").hover (function(){
		$(".moveBrushRight").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".moveBrushRight2").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".moveBrushRight3").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".moveBrushRight4").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".moveBrushRight5").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".moveBrushRight6").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".moveBrushRight7").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".moveBrushRight8").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".moveBrushRight9").css ("-webkit-animation-play-state","paused").css ("animation-play-state","paused");
		$(".otherBackgroundRight").animate({width: '50%'});
		if(style=="0"){
		$(".graphicNavigation").css("transform","rotate(45deg)");
		}
	},function(){
		$(".moveBrushRight").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".moveBrushRight2").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".moveBrushRight3").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".moveBrushRight4").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".moveBrushRight5").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".moveBrushRight6").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".moveBrushRight7").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".moveBrushRight8").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".moveBrushRight9").css ("-webkit-animation-play-state","").css ("animation-play-state","");
		$(".otherBackgroundRight").animate({width: '0%'});
		$(".graphicNavigation").css("transform","rotate(0deg)");
		//============================Koniec Animacji===================
	});
	$(".logoContainer").hover (function(){
		if (style=="0"){
		$(".aboutMeNavigation").css("transform","rotate(135deg)");
		}
		$(".otherBackgroundCenter").animate({width: '35%',left: '31%'});
	},function(){
		$(".aboutMeNavigation").css("transform","rotate(0deg)");
		$(".otherBackgroundCenter").animate({width: '0%',left: '50%'});
	});
});