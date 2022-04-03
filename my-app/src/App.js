import React from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './App.css';
import Map, {FullscreenControl,Popup, GeolocateControl} from 'react-map-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZG9naWJvaTE1IiwiYSI6ImNsMWo0Zjk4aTB0NGQzb281OG1nMDcycm0ifQ.9CGpm27pBuSCauqVrzwLsQ';


function App() {

  return (
   
      <Map
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 3.5,
          bearing: 0,
          pitch: 0
        }}
        style={{width: 600, height: 400}}

        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken="pk.eyJ1IjoiZG9naWJvaTE1IiwiYSI6ImNsMWo0Zjk4aTB0NGQzb281OG1nMDcycm0ifQ.9CGpm27pBuSCauqVrzwLsQ"
      >
           <FullscreenControl position="top-left" />
           <GeolocateControl position='top-right'/>
    
       

      
      </Map>
  
  );
}

export default App;
