$(function(){
	let arr=[2,1,0,3];
	$(".li-img").mouseenter(function(){
		// 鼠标移入时所有隐藏，当前显示，第一个子元素绝对定位位置改变，并生成一张新的副本图片
		let indexs=$(".li-img").index($(this));
		$(".li-img").removeClass("show");
		$(".text-con").removeClass("show");
		$(".img-box").removeClass("show");
		$($(".img-box")[arr[indexs]]).addClass("show");
		$(this).addClass("show");
		$($(".text-con")[indexs]).addClass("show");
		let srcs=$($(this).children()[0]).attr("src");
		$($(this).children()[0]).css({
			position:"absolute",
			left:"0px",
			top:"0px",
			transition:"all .5s linear",
			width:"376px",
			height:"600px"
		});
		let $kidss=$("<img src="+srcs+">");
		$(this).append($kidss);
	})
	$(".li-img").mouseleave(function(){
		//鼠标移出时所有隐藏，当前显示，删除第一个子元素
		$(".li-img").removeClass("show");
		$(this).addClass("show");
		$($(this).children()[0]).remove();
	})
})
