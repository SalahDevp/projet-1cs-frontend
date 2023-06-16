import React from "react";
import {FiArrowLeft  , FiTrash , FiPlus} from "react-icons/fi" ; 
import Event from "./Event";
import ima from"./images/Pic1.png" ; 
import { Link } from "react-router-dom";

export default function EventsAndActivities() {
    const  storedData =  JSON.parse(sessionStorage.getItem('myData'));
        let evenement = {
            name :  "" , 
            wilaya :"" , 
            place:"" , 
            description  : "",
            url : ima  , 
            id : "" , 
            coords : [30,45] , 
            date:"" , 
            images : []

        } ; 

        let test = [{
            name :  "festival de koider " , 
            wilaya :"alger" , 
            place:"el harrache 208 jsk" , 
            description  : "je tu il elle nous ios vous jfhejfh  jhfjehfjhe jhejhefjhej jehfjehfjeh jhfejhfjeh jhejhfjeh",
            url : ima , 
            id : "" , 
            coords : [30 , 45 ] , 
            date:"16-06-2023" , 
            images : []

        } , {
            name :  "festival de koider " , 
            wilaya :"alger" , 
            place:"el harrache 208 jsk" , 
            description  : "je tu il elle nous ios vous jfhejfh  jhfjehfjhe jhejhefjhej jehfjehfjeh jhfejhfjeh jhejhfjeh",
            url : ima , 
            id : "" , 
            coords : [30 , 45 ] , 
            date:"16-06-2023" , 
            images : []

        } ,{
            name :  "festival de koider " , 
            wilaya :"alger" , 
            place:"el harrache 208 jsk" , 
            description  : "je tu il elle nous ios vous jfhejfh  jhfjehfjhe jhejhefjhej jehfjehfjeh jhfejhfjeh jhejhfjeh",
            url : ima , 
            id : "" , 
            coords : [30 , 45 ] , 
            date:"16-06-2023" , 
            images : []

        } ,{
            name :  "festival de koider " , 
            wilaya :"alger" , 
            place:"el harrache 208 jsk" , 
            description  : "je tu il elle nous ios vous jfhejfh  jhfjehfjhe jhejhefjhej jehfjehfjeh jhfejhfjeh jhejhfjeh",
            url : ima , 
            id : "" , 
            coords : [30 , 45 ] , 
            date:"16-06-2023" , 
            images : []

        } ,
        {
            name :  "festival de koider " , 
            wilaya :"alger" , 
            place:"el harrache 208 jsk" , 
            description  : "je tu il elle nous ios vous jfhejfh  jhfjehfjhe jhejhefjhej jehfjehfjeh jhfejhfjeh jhejhfjeh",
            url :ima , 
            id : "" , 
            coords : [30 , 45 ] , 
            date:"16-06-2023" , 
            images : []

        }, 
        {
            name :  "festival de koider " , 
            wilaya :"alger" , 
            place:"el harrache 208 jsk" , 
            description  : "je tu il elle nous ios vous jfhejfh  jhfjehfjhe jhejhefjhej jehfjehfjeh jhfejhfjeh jhejhfjeh",
            url : ima , 
            id : "" , 
            coords : [30 , 45 ] , 
            date:"16-06-2023" , 
            images : []

        } , 
        {
            name :  "festival de koider " , 
            wilaya :"alger" , 
            place:"el harrache 208 jsk" , 
            description  : "je tu il elle nous ios vous jfhejfh  jhfjehfjhe jhejhefjhej jehfjehfjeh jhfejhfjeh jhejhfjeh",
            url : ima , 
            id : "" , 
            coords : [30 , 45 ] , 
            date:"16-06-2023" , 
            images : []

        }
    ]
    // < className=" hover:text-blue-950 hover:scale-110 ">  <Link to={"/addplace"}><div className="border rounded-xl p-3  text-green-400 bg-blue-800">Add a touristic place</div></Link> </li>

    return(
        <div className="bg-yellow-200 h-screen overflow-x-hidden">
             <div className="flex justify-between mx-12 my-4 py-4 border-b-2 border-black ">
                  <Link to={"/landing"} >  <FiArrowLeft className="w-16 h-16 text-blue-900"/> </Link>
                    <div className=" flex "> <img src={storedData.picture} className="w-16 h-16 hover:hue-rotate-180  rounded-full "></img>
                 <p className="text-center self-center ml-2 text-sm">{storedData.name}</p>
                </div>
                
        </div>
        <div>
                    <div className="flex justify-between mx-12 my-4 pb-4 ">
                        <h1 className="text-3xl font-semibold text-blue-900">Events and activities </h1>
                        <div className="flex ">
                            <FiTrash className="w-14 h-14 text-red-600" />
                            <Link to={"/addeve"} >  <div className="border-4 rounded-full border-blue-900 ml-8"> <FiPlus className="w-12 h-12 text-blue-900"/></div>   </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-4  px-8">
                    {/* <Event evenement={test[0]}></Event> */}
                        {test.map( (elem) =>{
                            
                           return  <Event evenement={elem} ></Event>
                        })}
                    </div>

        </div>
        </div>
    )
}