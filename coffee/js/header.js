$(function(){
	var w=0;
	var index=0;
	$(".nav li").mouseover(function(){
		w+=(parseInt($(this).index())-index)*145;
		$(".line").css("opacity",1).css("transform","translateX("+w+"px)");
		index=parseInt($(this).index());
	})
	$(".nav li").click(function(){
		w+=(parseInt($(this).index())-index)*145;
		$(".line").css("opacity",1).css("transform","translateX("+w+"px)");
		index=$(this).index();
	})
});
	
