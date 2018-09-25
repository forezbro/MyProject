$(function(){
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
