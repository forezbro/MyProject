$(function(){
	$(".lists>li").click(function(){
		let indexs=$(".lists>li").index($(this));
		$(".con-box").removeClass("show");
		$(".banner img").removeClass("show");
		$($(".banner img")[indexs]).addClass("show");
		$($(".con-box")[indexs]).addClass("show");
		let tet=$($(this).children().children()[1]).text();
		$(".instro").text(tet);
	})
})
