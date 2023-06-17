import React from "react";
import { useState , useEffect } from "react";
import logo from './images/Techmo.png'
import pic1 from './images/Pic1.png'
import pic2 from './images/Pic2.png'
import pic3 from './images/Pic3.png'
import pic4 from './images/Pic4.png'
import pic5 from './images/Pic5.png'
import pic6 from './images/Pic6.png'
import pic7 from './images/Pic7.png'
import vector from './images/Vector.png'
import {FiPhoneCall , FiSettings} from "react-icons/fi" ; 
import {TfiEmail} from "react-icons/tfi" ; 
import { Link } from "react-router-dom";
// import {FiPhoneCall} from "react-icons/fi" ; 


export default function Landing(){
    let images = [pic1 , pic2, pic3 ,pic4 , pic5 , pic6 ,pic7 ] ; 
    let [currentImage , setCurrentImage] = useState([images[0] ,images[1]  ,images[2] ]) ; 
    let rang1 = 0 ; 
    let rang2 = 1 ; 
    let rang3 = 2 ; 
    let di1 = 'visible'  , di2 = 'visible'  , di3 = 'visible' , di4  = 'visible'  , di5 = 'visible' ; 
   //'hidden
    const nbreImage = images.length;
    useEffect(() => {
        const interval = setInterval(() => {
          rang1 = (rang1 + 1 ) % nbreImage;
          rang2 = (rang2 + 1 ) % nbreImage;
          rang3 = (rang3 + 1 ) % nbreImage;
         
          setCurrentImage([images[rang1] , images[rang2] , images[rang3]]);
            
        }, 4000); // Changement toutes les 5 secondes
    
        return () => {
          clearInterval(interval); // Nettoyage de l'intervalle lorsque le composant est démonté
        };
      }, []);


    return (
        <div className="w-screen h-screen overflow-x-hidden bg-yellow-200 scroll-smooth ">
        <div id="home" className="  h-screen w-screen  bg-cover bg-center bg-[url('./images/pic8.png')] m-0 overflow-x-hidden">
            <div className="flex justify-between p-4 ">
                <img src={logo} className="w-24 h-24 hover:hue-rotate-180 "></img>
                <ul className="flex text-2xl font-semibold text-white  w-1/2 justify-around items-center ">
                    <li className="hover:underline underline-offset-8 hover:text-blue-950"> <a href="#home" className="focus:underline"> Home</a> </li>
                    <li className="hover:underline underline-offset-8 hover:text-blue-950"> <a href="#aboutUs" className="focus:underline"> About Us</a> </li>
                    <li className="hover:underline underline-offset-8 hover:text-blue-950    "> <a href="#contactUs" className="focus:underline"> Contact</a> </li>
                </ul>
                <div></div>
            </div>
            <div className="flex m-16 justify-between">
            <p className="text-white items-center inline-block    text-5xl "> 
                <span className="text-8xl text-emerald-800">Discover </span> <br></br>
                new places <br></br>
                <span className="text-8xl text-emerald-400 mt-6 inline-block">Enjoy </span> <br></br>
                new experiences <br></br>
        <Link to={"/intro"}   >     <span className="inline-block p-3 bg-blue-900 rounded-2xl text-2xl px-6 mt-8 text-emerald-200 hover:scale-110 hover:bg-blue-800 hover:ring-2 ring-violet-300 ">Explore Now </span> </Link>
            </p>
            <div className=" h-96  w-full  my-4 mx-20    ease-in-out duration-1000 inline-block overflow-hidden flex justify-between items-center px-12 text-white ease-in duration-5000">
                    {/* <img src={currentImage[0]} className="w-1/3 h-96 hover:hue-rotate-180  inline-block ease-in-out duration-1000 "></img>  */}
                     {/* <img src={currentImage[1]} className="w-1/3 h-96 hover:hue-rotate-180  "></img>   */}
                    {/* <div className={`${di1}  bg-slate-300`} style={{visibility:`${di1}`}}></div>  */}
                     <div  className={`${di2} h-3/4 w-48  bg-cover bg-center inline-block  text-white ease-in duration-5000  rounded-2xl`} style={{ backgroundImage:`url(${currentImage[0]})` , animationIterationCount:'infinite' }}></div>
                    {/* <div className={`${di3}  bg-slate-300`} style={{visibility:`${di1}`}}></div> */}
                     <div  className={`${di4} h-full w-60 bg-cover bg-center inline-block  text-white ease-in duration-5000 rounded-2xl`}  style={{ backgroundImage:`url(${currentImage[1]})` }}></div>
                    {/* <div className={`${di5} bg-slate-300`} style={{visibility:`${di1}`}}> </div>  */}
                    <div  className={`${di4} h-3/4 w-48 bg-cover bg-center inline-block  text-white ease-in duration-5000 rounded-2xl`}  style={{ backgroundImage:`url(${currentImage[2]})` }}></div>
            </div>
            </div>     
        </div>
        <div id="aboutUs" className="   flex justify-center  -middle  pt-44">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L60,53.3C120,43,240,21,360,16C480,11,600,21,720,42.7C840,64,960,96,1080,96C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
        
            <div className="w-2/5  text-2xl tracking-wide text-blue-900">
            <img src={vector} className="w-150 h-150 float-left  -ml-72 -mt-32 "></img>
            <h1 className="text-center text-5xl mb-6  inline-block ">About us</h1>
               <div className="bg-green-300 text-left  rounded-3xl p-6 space-y-8 indent-8 ">
              
                <p className="pl-48">                        Welcome to our website, where we unveil the world's most captivating tourist attractions. Immerse yourself in a world of breathtaking landscapes, cultural wonders, and awe-inspiring experiences.  </p>
                <p>                        With curated content and expert recommendations, we're here to guide you on your quest for unforgettable adventures. Let us be your trusted companion as you embarkon a journey of discovery, creating memories that will forever linger in your heart. Get ready to explore, indulge, and be inspired by the extraordinary wonders that await you. </p>
                </div>
                </div>
                
                
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="">
            <path fill="#000000" fill-opacity="1" d="M0,64L60,53.3C120,43,240,21,360,16C480,11,600,21,720,42.7C840,64,960,96,1080,96C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">

            <p className="text-white">uhdeuhduehdueh</p>
            </path>
        
        
        </svg> */}
        <div id="contactUs" className="w-full h-96 bg-black z-50 text-white text-2xl ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FEF08A" fill-opacity="1" d="M0,32L40,48C80,64,160,96,240,122.7C320,149,400,171,480,165.3C560,160,640,128,720,122.7C800,117,880,139,960,122.7C1040,107,1120,53,1200,53.3C1280,53,1360,107,1400,133.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            <div className="flex justify-around -mt-28"> 
                <div>
                <img src={logo} className="w-32 h-32    "></img>
                </div>
                <div className="">
                   <h1 className="text-3xl mb-4"> About Us </h1>
                   <div className="flex  "> <FiSettings className="mr-3 self-baseline"/ > Website </div> 
                   
                </div>
                <div>
                       <h1  className="text-3xl mb-4"> Contact Us </h1> 
                    <div  className="flex  align-bottom"> <FiPhoneCall className="mr-3 self-baseline" / > +213 698048172 </div>  
                    <div  className="flex items-baseline"> <TfiEmail  className="mr-3 self-baseline"/ > techmo_c@company.dz </div>  
                </div>
            </div>
        </div>
        </div>
    )   
 } ;// className={`${user}   grid grid-cols-2  lg:grid-cols-3  gap-4 gap-y-6 lg:gap-x-20  flex  `}