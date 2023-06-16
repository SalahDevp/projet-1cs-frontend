
import React, { useState, useEffect } from 'react';
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import "leaflet/dist/leaflet.css"; 
import { useMap  , useMapEvent} from 'react-leaflet';




function EventMap({coords}) {
    const [afficher , setAfficher] = useState(true) ; 
    const customIcon = new Icon({
            //iconUrl:"https://www.flaticon.com/free-icon/location_1483336?term=marker&page=1&position=9&origin=search&related_id=1483336"  , 
            iconUrl:require("./images/location.png"),
            iconSize:[25,25]
          }) ; 
    
    const [center, setCenter] = useState(coords);
    const [markerPosition, setMarkerPosition] = useState([0, 0]);
  
    const handleCenterChange = (e) => {
      const { name, value } = e.target;
      setCenter([48,5]);
    };
  
    useEffect(() => {
      setMarkerPosition(center);
    }, [center]);
  
    return (
        <div>
        { afficher && (  <div className="w-[90%] h-[70%] absolute top-14    left-20 ">
      <div className='inline-block fixed relative border rounded-full z-50 bg-red-500  text-2xl font-bold  p-2 right-0' onClick={()=>{
        setAfficher(false) ; 
       }}> exit  </div>
        <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
        
        
          {/* <MyComponent /> */}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  className='z-40 '   attribution= '<div>Mu namejhdekjfhkejh</div>' / >
          <Marker position={markerPosition} icon={customIcon} />
        
        </MapContainer>
      </div>)}
      </div>
    );
  }
  
  export default EventMap;