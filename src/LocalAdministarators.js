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

export default function LocalAdministrator ()


 

{

  let  user = {placeName : "" , 
firstname : "" , 
lastname : "" ,
 email :"" ,
} ;
  const  storedData =  JSON.parse(sessionStorage.getItem('myData'));

  return(
    

    <div className="h-screen bg-yellow-200 " >
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
            <h1 className="text-3xl font-semibold  ml-16 mt-8">Create a local administrator </h1>
            <div className="w-1/2 h-2/3 p-8  flex flex-col justify-between text-2xl ml-80 mt-12 rounded-2xl">
            <div >    <label htmlFor="outlined-required">firstName  </label>
                    <div className="mb-4">
            
                            <TextField
                required  fullWidth
                id="outlined-required"
                label=""
                type="text"
                onChange={(e) => {
                
                   
                    user.firstname = e.target.value ; 
                    console.log(user) ; 
                    
                }}
                />
                </div>
                

            </div>




            <div >    <label htmlFor="outlined-required">lastName  </label>
                    <div className="mb-4">
            
                            <TextField
                required  fullWidth
                id="outlined-required"
                label=""
               
                // value={data.placeName }
                onChange={(e) => {
                
                  
                    user.placeName = e.target.value ; 
                    console.log(user) ; 
                    
                }}
                />
                </div>
                

            </div>



            <div >    <label htmlFor="outlined-required">E-mail  </label>
                    <div className="mb-4">
            
                            <TextField
                required  fullWidth
                id="outlined-required"
                label=""
                
                type="email"
                // value={data.placeName }
                onChange={(e) => {
                
                    // setData({...data , [data.placeName]  : e.target.value} ) ; 
                    // console.log("nom de place :" + e.target.value) ; 
                    user.email = e.target.value ; 
                    console.log(user) ; 
                    
                }}
                />
                </div>
                

            </div>
    </div>
    </div>
  )
}