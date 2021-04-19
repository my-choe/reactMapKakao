/*global kakao*/
import React, { Component } from 'react';
import jsonData from './map_info.json';

class App extends Component { 

  componentDidMount() {
      var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
      mapOption = { 
          center: new kakao.maps.LatLng(37.505496, 127.005116), // 지도의 중심좌표
          level: 9 // 지도의 확대 레벨
      };
  
    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption); 

    for(var i = 0; i < jsonData.positions.length ; i++){
      var position = jsonData.positions[i];
      var marker = new kakao.maps.Marker({
        map: map,
        position : new kakao.maps.LatLng(position.lat, position.lng),
      });
    }
  }

  render() {
    return (
      <div id="map" style={{"width":"100%","height":"700px"}}></div>
    )
  }
}
export default App;