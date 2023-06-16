import React from "react";
import { TextField  ,Select , MenuItem ,InputLabel , BootstrapInput} from "@mui/material";
import SideBar from './SideBar';
import { useState , useEffect} from "react";
import AjouterImage from "./AjouterImage";
import logo from './images/Techmo.png'
import { MapContainer, TileLayer, Marker  , useMapEvents} from 'react-leaflet';
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css"; 
import { useMap  , useMapEvent} from 'react-leaflet';
import Pic11 from "./images/Pic11.png" ; 
import jwt_decode from "jwt-decode";

import { useContext } from "react";
import { infoUser } from "./Intro";
import wilaya from "./wilaya";
import communes from "./communes";
import {FormGroup ,Checkbox ,  FormControlLabel} from "@mui/material"


export default function EditTouristicPlace(   ){

   
       let  data02 = {placeName : "" , 
        category : "" , 
        theme : "" ,
         wilaya :"" ,
          commune :""  ,
          open :"" , 
          close :"16:16"  , 
          history : "" ,
          coords : [36.7,3.18]  ,
        images : [] , 
        voiture : false , 
        train : false , 
        bus: false , 
        telepherique : false , 
        metro : false , 
        trame:false 
    }

            
    


    const customIcon = new Icon({
        //iconUrl:"https://www.flaticon.com/free-icon/location_1483336?term=marker&page=1&position=9&origin=search&related_id=1483336"  , 
        iconUrl:require("./images/location.png"),
        iconSize:[25,25]
      }) ; 
    const [markerPosition, setMarkerPosition] = useState(data02.coords);
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
   

   // var decoded = jwt_decode(credentialResponse.credential);
   const  storedData =  JSON.parse(sessionStorage.getItem('myData'));
    const [images, setImages] = useState([]);   
    const [center, setCenter] = useState([15, 30]);
    const [position, setPosition] = useState([36.7,3.18]);
    // useEffect(()=>{
    //         const getCurrentPosition = () => {
    //             if (navigator.geolocation) {
    //                 navigator.geolocation.getCurrentPosition(
    //                       (position) =>{
    //                         setPosition([position.coords.latitude , position.coords.longitude]);
    //                        // window.location.reload() ; 
    //                         console.log([position.coords.latitude , position.coords.longitude]);
    //                     },
    //                     (error)=>{
    //                         console.log("Erreur de geolocalisation !!!!") ;
    //                     }
    //                 )
    //             }
    //             else {
    //                 console.log("La geolocalisation n'est prise en charge par ce navigateur !!!!") ;
    //             }
    //         } ; 
    //         getCurrentPosition() ; 
    // } , [])

    return (
        <div className="h-screen overflow-y-scroll bg-fixed bg-cover bg-center bg-[url('./images/Pic11.png')]">
           <div className="flex justify-between p-4">
                <img src={logo} className="w-20 h-20 hover:hue-rotate-180 "></img>
                <ul className="flex text-xl font-semibold text-slate-500  w-1/2 justify-around items-center ">
                    <li className="hover:underline underline-offset-8 hover:text-blue-950"> <a href="#" className="focus:underline"> Home</a> </li>
                    <li className=" hover:text-blue-950 hover:scale-110 "> <div className="border rounded-xl p-3  text-green-400 bg-blue-800">Add a touristic place</div> </li>

                </ul>
                <div className=" flex "> <img src={storedData.picture} className="w-20 h-20 hover:hue-rotate-180  rounded-full "></img>
                 <p className="text-center self-center ml-2 text-md">{storedData.name}</p>
                </div>
            </div>
            <div className="m-6 bg-blue-600 bg-opacity-40 p-4 rounded-2xl ">
            <div className="m-6 bg-white bg-opacity-60 p-4 rounded-2xl ">
            <div className=" my-10">  
        
            
        <h1 className="text-3xl my-8">Edit A Touristic Place </h1>
        <h3 className="text-red-500 mb-6 font-semibold">Tous ce qui est marqué * est obligatoire </h3>
         <div className="grid grid-cols-1 gap-y-6 "> 
               <div >    <label htmlFor="outlined-required">Place Name* </label>
                    <div className="mb-4">
            
                            <TextField
                required  fullWidth
                id="outlined-required"
                label=""
                defaultValue={data02.placeName}
                // value={data.placeName }
                onChange={(e) => {
                
                    // setData({...data , [data.placeName]  : e.target.value} ) ; 
                    // console.log("nom de place :" + e.target.value) ; 
                    data02.placeName = e.target.value ; 
                    console.log(data02) ; 
                    
                }}
                />
                </div>

                <div className="grid grid-cols-2 gap-x-10 my-4">

<div >
    <label htmlFor="demo-customized-select"> Place Category* </label>
    <Select required   fullWidth
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        defaultValue={data02.category}
        onChange={(e) => {
                
            // setData({...data , [data.category]  : e.target.value} ) ; 
            // console.log("nom de place :" + e.target.value) ; 
            data02.category = e.target.value ; 
            console.log(data02) ; 
        }}
        > 
    
    
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </div>
    
    <div>
    <label htmlFor="demo-customized-select"> Place Theme* </label>
    <Select required   fullWidth
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        defaultValue={data02.theme}
        onChange={(e) => {
                
            // setData({...data , [data.theme]  : e.target.value} ) ; 
            // console.log("nom de place :" + e.target.value) ; 
            data02.theme = e.target.value ; 
            console.log(data02) ; 
        }}

        > 
    
    
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </div>
</div>
                <div>
                <div className="grid grid-cols-2 gap-x-10 ">
                <div>
                <label htmlFor="demo-customized-select"> Wilaya* </label>
                <Select required   fullWidth
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    defaultValue={data02.wilaya}
                    onChange={(e) => {
                
                        // setData({...data , [data.wilaya]  : e.target.value} ) ; 
                        // console.log("nom de place :" + e.target.value) ; 
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
                <label htmlFor="demo-customized-select"> Adresse* </label>
                <TextField
                required  fullWidth
                id="outlined-required"
                label=""
                defaultValue={data02.adresse}
                // value={data.placeName }
                onChange={(e) => {
                
                    // setData({...data , [data.placeName]  : e.target.value} ) ; 
                    // console.log("nom de place :" + e.target.value) ; 
                    data02.adresse = e.target.value ; 
                    console.log(data02) ; 
                    
                }}
                />
                </div>

                </div>
                <div>
                <label htmlFor="demo-customized-select"> Moyens de transport * </label>
                <FormGroup>
                    <FormControlLabel control={<Checkbox  onChange={(e)=>{
                        data02.voiture = !data02.voiture ; 
                        console.log(data02) ; 
                    }} />} label="Voiture" />
                    <FormControlLabel required control={<Checkbox  onChange={(e)=>{
                        data02.train = !data02.train ; 
                        console.log(data02) ; 
                    }} />} label="Train" />
                    <FormControlLabel disabled control={<Checkbox  onChange={(e)=>{
                        data02.bus = !data02.bus ; 
                        console.log(data02) ; 
                    }} />} label="bus" />
                    <FormControlLabel control={<Checkbox  onChange={(e)=>{
                        data02.metro = !data02.metro ; 
                        console.log(data02) ; 
                    }}  />} label="Metro" />
                    <FormControlLabel required control={<Checkbox  onChange={(e)=>{
                        data02.trame = !data02.trame ; 
                        console.log(data02) ; 
                    }} />} label="Trame" />
                    <FormControlLabel disabled control={<Checkbox  onChange={(e)=>{
                        data02.telepherique = !data02.telepherique ; 
                        console.log(data02) ; 
                    }}  />} label="Téléphérique" />
                    </FormGroup>
                </div>

                </div>
            
            </div>
            <div> 
                <h1> Schedule*</h1>
                <div  className="grid grid-cols-2 gap-x-10 ">
                    <div>
                        <h1 className="text-xs"> Open</h1>
                <TextField required
                    id="outlined-number"
                    label=""
                    type="time"
                    fullWidth
                    placeholder="Open"
                    defaultValue={data02.open}
                    onChange={(e) => {
                
                        // setData({...data , [data.open]  : e.target.value} ) ; 
                        // console.log("nom de place :" + e.target.value) ; 
                        data02.open = e.target.value ; 
                         console.log(data02) ; 
                    }}
                    />
                    </div>
                    <div>
                        <h1 className="text-xs"> Closed*</h1>
                <TextField required
                    id="outlined-number"
                    label=""
                    type="time"
                    fullWidth
                    placeholder="Closed"
                    defaultValue={data02.close}
                    onChange={(e) => {
                
                        // setData({...data , [data.close]  : e.target.value} ) ; 
                        // console.log("nom de place :" + e.target.value) ; 
                        data02.close = e.target.value ; 
                        console.log(data02) ; 
                    }}
                    />
                    </div>
                     </div>
            </div>
            
            
            <div>
                <label htmlFor="outlined-multiline-static">History* </label>
                        <TextField  required fullWidth
                id="outlined-multiline-static"
                label=""
                multiline
                rows={4}
                defaultValue={data02.history}
                onChange={(e) => {
                
                    // setData({...data , [data.history]  : e.target.value} ) ; 
                    // console.log("nom de place :" + e.target.value) ; 
                    data02.history = e.target.value ; 
                    console.log(data02) ; 
                }}
                />
            </div>
           
            <div className="w-full h-150">
                <h1 className="mb-3">Carte(lieu) *</h1>
                <MapContainer center={position} zoom={10} > 
      
      
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