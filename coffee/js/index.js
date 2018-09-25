$(function(){
	var $imgs=$(".imgbox"),
		arr=["puff","blind","slide","fold","highlight","drop","clip"],
		index=0,
		len=$imgs.length,
		timer=null,
		$lis=$(".dots li"),
		arr1=["img/images/index_13.png","img/images/index_03.png","img/images/index_17.png"];
	 function runEffect(){
	 	var ran=parseInt(Math.random()*(arr.length+1));
      	var texiao=arr[ran];
      	$imgs.hide();
      	$lis.css("background-color","rgba(0,0,0,.3)");
      	$($imgs[index]).toggle(texiao,400);
      	$($lis[index]).css("background-color","#fff");
	}
	//  开始轮播
	function startPlay(){  
		timer=setInterval(function(){
			index++;
			if(index>=len){
				index=0;
			}
			runEffect();
		},3000);
	}
	// 停止轮播
	function stopPlay(){
		if(timer){
			clearInterval(timer);
			timer=null;
		}
	}
	// 打开页面开始轮播
	(function(){
		//鼠标移出
		var $slider=$(".slider");
		$slider.mouseenter(function(){
			console.log(111)
			stopPlay();
		})
		//鼠标移出
		$slider.mouseleave(function(){
			startPlay();
		})
	//点击小圆点
	$lis.click(function(){
		index=$(this).index();
		runEffect();
	})
		$slider.mouseleave();
	})();
	
	
	$(".layer").click(function(){
		$(".prolayer").css("display","block");
		font_index=$(".layer").index($(this));
		$(".pro_img").css("background","url("+arr1[font_index]+")"+" no-repeat").css("background-size","100% 100%");
	})
	$(".prolayer .pro_img").click(function(){
		$(".prolayer").css("display","none");
	})
	$(".prev").click(function(){
		font_index--;
		if(font_index<0){
			font_index=2;
		}
		$(".pro_img").css("background","url("+arr1[font_index]+")"+" no-repeat").css("background-size","100% 100%");
	})
	$(".next").click(function(){
		font_index++;
		if(font_index>2){
			font_index=0;
		}
		$(".pro_img").css("background","url("+arr1[font_index]+")"+" no-repeat").css("background-size","100% 100%");
	})
	//地图map
    var map = new BMap.Map('allmap');
    var poi = new BMap.Point(106.4916628946,29.5374158192);
    map.centerAndZoom(poi, 16);
    map.enableScrollWheelZoom();

    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                    '<img src="../img/baidu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                    '地址：重庆市九龙坡区石桥铺大西洋国际<br/>电话：(010)59928888<br/>简介：。。。。。。xxxxxxx-------++++++。' +
                  '</div>';

    var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
			title  : "xxxxx", 
			width  : 290, 
			height : 105, 
			panel  : "panel", 
			enableAutoPan : true,
			searchTypes   :[
				BMAPLIB_TAB_SEARCH,
				BMAPLIB_TAB_TO_HERE,
				BMAPLIB_TAB_FROM_HERE
			]
		});
    var marker = new BMap.Marker(poi); 
    marker.enableDragging(); 
    marker.addEventListener("click", function(e){
	    searchInfoWindow.open(marker);
    })
    map.addOverlay(marker);
	
	function openInfoWindow3(){
		searchInfoWindow3.open(new BMap.Point(116.328852,40.057031)); 
	}
})
