import React from "react";
import { TextField  ,Select , MenuItem ,InputLabel , BootstrapInput} from "@mui/material";
import SideBar from './SideBar';
import { useState , useEffect} from "react";
import AjouterImage from "./AjouterImage";
import logo from './images/Techmo.png'
import { MapContainer, TileLayer, Marker  , useMapEvents} from 'react-leaflet';
import "leaflet/dist/leaflet.css"; 
import { useMap  , useMapEvent} from 'react-leaflet';
import Pic11 from "./images/Pic11.png" ; 
import jwt_decode from "jwt-decode";
import { Icon } from "leaflet";
import { useContext } from "react";
import { infoUser } from "./Intro";
import wilaya from "./wilaya";
import { Link } from "react-router-dom";

export default function AddEvent(   ){
    
    let  data02 = {name : "" , 
   
     wilaya :"" ,
     place:"" , 
      open :"" , 
      close :""  , 
      description : "" ,
      coords : [36.7,3.18]  ,
      date:"" , 
    images : []};

    const [images, setImages] = useState([]);   
    const [center, setCenter] = useState([15, 30]);
    const [position, setPosition] = useState([36.7,3.18]);
    const  storedData =  JSON.parse(sessionStorage.getItem('myData'));
    console.log("addevent") ; 
    console.log(storedData) ; 

    const customIcon = new Icon({
        //iconUrl:"https://www.flaticon.com/free-icon/location_1483336?term=marker&page=1&position=9&origin=search&related_id=1483336"  , 
        iconUrl:require("./images/location.png"),
        iconSize:[25,25]
      }) ; 
    const [markerPosition, setMarkerPosition] = useState(null);
    function handleMapClick(e) {
        const { lat, lng } = e.latlng;
        setMarkerPosition([lat, lng]);
        // setData({...data , [data.coords] : [lat ,lng ]}) ; 
        data02.coords = [lat, lng] ; 
        console.log(data02) ; 
        
        console.log(`Coordonnées: Latitude ${lat}, Longitude ${lng}`);
      }
    
      function MapClickEvents() {
        useMapEvents({
          click: handleMapClick,
        });
        return null;
      }
    
    return (
        <div className="h-screen overflow-y-scroll bg-fixed bg-cover bg-center bg-[url('./images/Pic11.png')]">
           <div className="flex justify-between p-4">
                <img src={logo} className="w-20 h-20 hover:hue-rotate-180 "></img>
                <ul className="flex text-xl font-semibold text-slate-500  w-1/2 justify-around items-center ">
                    <li className="hover:underline underline-offset-8 hover:text-blue-950"> <a href="#" className="focus:underline"> Home</a> </li>
                       <li className=" hover:text-blue-950 hover:scale-110 ">  <Link to={"/addplace"}><div className="border rounded-xl p-3  text-green-400 bg-blue-800">Add a touristic place</div></Link> </li>

                </ul>
                <div className=" flex "> <img src={storedData.picture} className="w-20 h-20 hover:hue-rotate-180  rounded-full "></img>
                 <p className="text-center self-center ml-2 text-md">{storedData.name}</p>
                </div>
            </div>
            <div className="m-6 bg-blue-600 bg-opacity-40 p-4 rounded-2xl ">
            <div className="m-6 bg-white bg-opacity-60 p-4 rounded-2xl ">
            <div className=" my-10">  
        
            
        <h1 className="text-3xl my-8">Add Evenement </h1>
        <h3 className="text-red-500 mb-6 font-semibold">Tous ce qui est marqué * est obligatoire </h3>
         <div className="grid grid-cols-1 gap-y-6 "> 
               <div >    <label htmlFor="outlined-required">Event Name </label>
                    <div>
            
                            <TextField
                required  fullWidth
                id="outlined-required"
                label=""
                onChange={(e) => {
                
                   
                    data02.name = e.target.value ; 
                    console.log(data02) ; 
                }}
                />
                </div>
                <div>
                <label htmlFor="demo-customized-select"> Wilaya* </label>
                <Select required   fullWidth
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    onChange={(e) => {
                
                   
                        data02.wilaya = e.target.value ; 
                        console.log(data02) ; 
                    }}
                    > 
                {
                    wilaya.map((elem)=> {
                        return (
                            <MenuItem value={elem.code} >{elem.code } -  {elem.name}   </MenuItem>
                        )
                    })
                }
                
                    
                    </Select>
                </div>
                <div>
                <label htmlFor="outlined-multiline-static">Place*  </label>
                        <TextField  required fullWidth
                id="outlined-multiline-static"
                label=""
                
                onChange={(e) => {
                
                   
                    data02.place = e.target.value ; 
                    console.log(data02) ; 
                }}
            
                />
            </div>
                <div>
                <label htmlFor="demo-customized-select"> Date* </label>
                <TextField required
                    id="outlined-number"
                    label=""
                    type="date"
                    fullWidth
                    placeholder="Open"
                    onChange={(e) => {
                
                   
                        data02.date = e.target.value ; 
                        console.log(data02) ; 
                    }}
                    />
               
                </div>
            
            </div>
            <div> 
                <h1> Schedule</h1>
                <div  className="grid grid-cols-2 gap-x-10 ">
                    <div>
                        <h1 className="text-xs"> Open</h1>
                <TextField required
                    id="outlined-number"
                    label=""
                    type="time"
                    fullWidth
                    placeholder="Open"
                    onChange={(e) => {
                
                   
                        data02.open = e.target.value ; 
                        console.log(data02) ; 
                    }}
                    />
                    </div>
                    <div>
                        <h1 className="text-xs"> Closed</h1>
                <TextField required
                    id="outlined-number"
                    label=""
                    type="time"
                    fullWidth
                    placeholder="Closed"
                    onChange={(e) => {
                
                   
                        data02.closed = e.target.value ; 
                        console.log(data02) ; 
                    }}
                    />
                    </div>
                     </div>
            </div>
            
            
            <div>
                <label htmlFor="outlined-multiline-static">Description* </label>
                        <TextField  required fullWidth
                id="outlined-multiline-static"
                label=""
                multiline
                rows={4}
                onChange={(e) => {
                
                   
                    data02.description = e.target.value ; 
                    console.log(data02) ; 
                }}
            
                />
            </div>
            <div className="w-full h-150">
                <h1 className="mb-3">Carte(lieu) *</h1>
                <MapContainer center={position} zoom={5} > 
      
      
      {/* <MyComponent /> */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  className='z-40 '   attribution= '<div>Mu namejhdekjfhkejh</div>' / >
      {/* <Marker position={markerPosition} /> */}
      {markerPosition && <Marker position={markerPosition} icon={customIcon}/>}
      <MapClickEvents />
    </MapContainer>
                    
            </div>
         </div>
         <h1 className="mt-14 "> Importer Images (Au moins vou devez importez une image)</h1>
        <div className="mt-8 border rounded-3xl p-4 border-black">
           
        <AjouterImage images={images} setImages={setImages}/>
        </div>
</div>
            </div>
            <div className="flex justify-around">
            <div className="border rounded-3xl px-8  my-8 py-3 text-white bg-blue-800 inline-block  text-center font-semibold text-xl hover:scale-110">Add </div>
            <div className="border rounded-3xl px-8  my-8 py-3 text-white bg-orange-400 inline-block text-center font-semibold hover:scale-110">Cancel </div>
            </div>
    </div>
    </div>
    );
};