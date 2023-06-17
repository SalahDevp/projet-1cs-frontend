import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import pic from "./pic/pic8.png";
import NavbarMap from "./NavbarMap";
import position from "./pic/gps.png";

const marker = new L.icon({
  iconUrl: require("./pic/marker2.png"),
  iconSize: [35, 35],
});
const here = new L.icon({
  iconUrl: require("./pic/here.png"),
  iconSize: [35, 35],
});
function LocationMarker() {
  const [position, setPosition] = useState(null);
  

  return position === null ? null : (
    <Marker position={position} icon={here}>
      <Popup>
        <div class="h-full w-full">
          <h2 class="overflow-ellipsis overflow-hidden whitespace-nowrap font-fredoka font-bold text-black text-xl mb-2">
            Great Mosque of Algiers
          </h2>
          <div class="rounded-xl overflow-hidden h-52 w-full mb-1">
            <img src={pic} alt="Image" class="w-full h-full object-cover" />
          </div>
          <p class="overflow-ellipsis overflow-hidden line-clamp-3 text-vertical text-[#252525] leading-[22px] font-fredoka font-bold text-lg">
            Monumental, pillared prayer hall & a lofty minaret, lit up at night
            & topped by an observation deck.
          </p>
          <p class="font-fredoka font-semibold text-base text-[#0A4D68]">
            Type
          </p>
          <button
            type="button"
            class="focus:outline-none font-fredoka font-semibold text-base text-[#0A4D68] bg-[#05BFDB] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg px-2 py-1 mb-2"
          >
            Details...
          </button>
        </div>
      </Popup>
    </Marker>
  );
}
function Map() {
  const [center, setCenter] = useState({ lat: 33.7, lng: 3.042 });
  const Zoom_lvl = 6;
  
  const handleLocateClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };
  return (
    <div class="relative h-full w-full">
      <NavbarMap />
      <MapContainer center={center} zoom={Zoom_lvl} scrollWheelZoom={true}>
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=9Gni4ut7fYquG7x5M2OR"
        />
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={{ lat: 36.75, lng: 3 }}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={{ lat: 36.79, lng: 3 }}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <LocationMarker />
      </MapContainer>
      <button 
        class='fixed bottom-[88px] left-[10px] bg-white p-1 border border-black'
        onClick={handleLocateClick}
      >
        <img src={position} alt="position" class="w-6 h-6"/>
      </button>
    </div>
  );
}

export default Map;
/**const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  }); */