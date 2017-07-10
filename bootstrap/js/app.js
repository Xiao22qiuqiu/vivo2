$(function () {
//	$("#header .container-fluid .headdiv span.glyphicon-menu-hamburger").click(function () {
//		$("#collapsed-content").toggleClass("menudiaplay");
////		$(".header ul li").toggleClass("linew");
//		
//	})
	$("#head-bar li").hover(function  () {		
		$("#head-bar li:first-child").removeClass("li-active");
		$(this).addClass("li-active");
	},function  () {		
		$(this).removeClass("li-active");
		$("#head-bar li:first-child").addClass("li-active");
	})
	//设置轮播图
		$(window).scroll(function() {
			var sc = $(window).scrollTop();
			var rheight = $(window).height();
			if (sc > rheight) {
				$('#vivo-foot').css("display", "block");
				$('#myCarousel').css("display", "none");
			} else {
				$('#vivo-foot').css("display", "none");
				$('#myCarousel').css("display", "block");
			}
		})
//	获取滚动条高度判断是否回到页面顶部	
		var flag = 0;
		$(window).scroll(function() {
			var sc = $(window).scrollTop();
			var rheight = $(window).height()
			if (sc > rheight * 0.6 && flag === 0) {
				$($("#footer-top-wrap")[0]).animate({
					bottom: 30
				}, 500);
				flag = 1;
			} else if (sc < rheight * 0.6 && flag === 1) {
				$($("#footer-top-wrap")[0]).animate({
					bottom: -50
				}, 500);
				flag = 0;
			}
		});
		$($("#footer-top-wrap")[0]).click(function() {
			var sc = $(window).scrollTop();
			$('body,html').animate({
				scrollTop: 0
			}, 300);
			return false;
		});
		
})