import { ImageList } from "@mui/material";
import React from "react";
import {FiArrowLeft  , FiTrash , FiMap } from "react-icons/fi" ; 
import EventMap from "./EventMap";
import { useState } from "react";


export default function Event({evenement }) {
    const [afficher , setAfficher] = useState(false) ; 
   const path = './images/Pic1.png' ; 
    return(
        <div className=" w-96 rounded-2xl py-2 m-4 bg-white shadow-md shadow-slate-600 ">
              {afficher &&(<EventMap coords={evenement.coords} ></EventMap>) }  
                    <div>
                    <img src={evenement.url} className=" ml-8 w-96 h-52 inline-block" />
                    <div className="ml-8">
                    <h1 className="text-xl font-semibold text-blue-700">{evenement.name}</h1>
                        <p className="text-md text-black font-semibold">{evenement.description} </p>
                        <p className="text-lg text-green-500 font-semibold"><span>{evenement.wilaya}</span> - <pan> { evenement.place }</pan></p>
                        <p className="text-lg text-green-500 font-semibold"> {evenement.date } <div className="inline-block  "> <FiMap className="inline ml-48 text-red-500 w-8 h-8" onClick={()=>{
                            if (afficher == true ) setAfficher(false) ; 
                            else setAfficher(true) ; 
                               
                            
                        }}></FiMap></div>  </p>
                    </div>
                        

                    
             </div>
        </div>
    )
}