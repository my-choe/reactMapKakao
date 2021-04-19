/*global kakao*/
import React, { Component } from 'react';
import jsonData from "./map_info.json";
import $ from 'jquery';

class App extends Component { 
  componentDidMount() {
    var mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new kakao.maps.LatLng(37.505496, 127.005116),
        level: 9
    }
    var map = new kakao.maps.Map(mapContainer, mapOption)

    var clusterer = new kakao.maps.MarkerClusterer({
      map: map,
      averageCenter: true,  // 클러스터링되는 마커들의 중간 좌표에 클러스터링 마커가 표시됨
      minLevel: 5 // 값이 클 수록 지도륵 더 많이 축소해야 클러스터링 기능 적용
    });

    var markers = $(jsonData.positions).map(function(i, position) {
      var imageSrc = require("./img/hop0"+(i+1)+".png")
      if(position.finish == '완치'){
          imageSrc = require("./img/clearp0"+(i+1)+".png")
      }

      var imageSize = new kakao.maps.Size(60, 70)
      var imageOption = {offset: new kakao.maps.Point(27, 69)}

      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
      var marker = new kakao.maps.Marker({
          map: map,
          position : new kakao.maps.LatLng(position.lat, position.lng),
          image: markerImage
      });
      return marker;
    })
    clusterer.addMarkers(markers);
  }

  render() {
    return (
      <div id="map" style={{"width":"100%","height":"700px"}}></div>
    )
  }
}
export default App;