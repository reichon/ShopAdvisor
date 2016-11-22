// JavaScript Document
// 地図の中心を決める
var latlng = new google.maps.LatLng(35.397633, 139.464268);
// 地図を表示するためのオプションを設定する
var opt = {
  zoom: 18,
  center: latlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var marker;
marker = new google.maps.Marker({
	map:map,
	position: latlng
});
// 地図を表示する。
var map = new google.maps.Map(document.getElementById('map'), opt);
var marker = new google.maps.Marker({
   //マーカーを置く緯度軽度
   position:latlng,
   title:"ここです！",
   map:map
});

google.maps.event.addListener(marker,"click",function(){
	var infowindow = new google.maps.InfoWindow({
		content:"焼肉　ざんまい"
	});
	infowindow.open(map, marker);
});
// JavaScript Document