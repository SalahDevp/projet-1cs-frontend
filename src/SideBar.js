import React, { useState } from "react";
import { FiLogOut   ,FiArrowDown , FiArrowUp} from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";
import {IoMdArrowDropdown , IoMdArrowDropup} from "react-icons/io"
export default function SideBar() {

        const [eve , setEve] = useState("hidden");
        const [carte , setCarte] = useState("hidden");
        const [iconeve , setIconeve] = useState(<IoMdArrowDropdown className=" ml-2"/>);
        const [iconcarte , setIconcarte] = useState(<IoMdArrowDropdown className=" ml-2"/>);


    return (
        <div className="h-screen w-64 fixed top-0 left-0 bg-slate-200 p-8 text-2xl flex flex-col justify-between pb-12 float-left">
               <div className="flex flex-col h-2/3 justify-around   text-left">
                          <div className="  h-32 w-32 bg-cover bg-center bg-[url('./images/Techmo.png')] self-center">

                        </div>
                        <div>
                                Statistics 
                        </div>
                        
                        <div className="    ">
                          <div className="flex    items-end"   onClick={()=>{
                                if (carte == "hidden"){
                                    setCarte("visible") ; 
                                    setIconcarte(<IoMdArrowDropup className="ml-2"/>);
                                }
                                else {
                                    setCarte("hidden") ; 
                                    setIconcarte(<IoMdArrowDropdown className="ml-2"/>);
                                }
                              }}>  Cartes  {iconcarte} </div>
                                <ul className={` text-lg  ml-4 ${carte}`}>
                                    <li>Ajouter Carte</li>
                                    <li>Modifier Carte</li>
                                </ul>
                        </div>
                        <div >
                              <div className="flex    items-end" onClick={()=>{
                                if (eve == "hidden"){
                                    setEve("visible") ; 
                                    setIconeve(<IoMdArrowDropup className="ml-2"/>);
                                }
                                else {
                                    setEve("hidden") ; 
                                    setIconeve(<IoMdArrowDropdown className="ml-2"/>);
                                }
                              }}>  Evenements {iconeve} </div>
                                <ul className={` text-lg  ml-4 ${eve}`}>
                                    <li>Ajouter evenement</li>
                                    <li>Modifier evenement</li>
                                </ul>
                        </div>
                  </div>
                  <div className="flex    items-end text-red-500"> 
                        <FiLogOut className=" mr-2"/> LogOut
                  </div>

        </div>
    ) ; 
} ; 