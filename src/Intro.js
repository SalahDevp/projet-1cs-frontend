import React, { useState  , useEffect , createContext} from "react";
import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
 import jwt_decode from "jwt-decode";
import { Input } from 'postcss';
import pic1 from './images/Pic1.png'
import pic2 from './images/Pic2.png'
import pic3 from './images/Pic3.png'
import pic4 from './images/Pic4.png'
import pic5 from './images/Pic5.png'
import pic6 from './images/Pic6.png'
import pic7 from './images/Pic7.png'
import logo from './images/Techmo.png'
import App from "./App";
import { createBrowserHistory } from "history";





export default function Intro (){
   // let images = ['./images/Techmo.png' ,'./images/Pic1.png' , './images/Pic2.png' , './images/Pic3.png','./images/Pic4.png','./images/Pic5.png','./images/Pic6.png','./images/Pic7.png' ] ;
    
    
   const history = createBrowserHistory() ; 

  
   const image = './images/Pic1.png' ;
    let images = [pic1 , pic2, pic3 ,pic4 , pic5 , pic6 ,pic7 ] ; 
    let [currentImage , setCurrentImage] = useState(images[0]) ; 
    useEffect(() => {
        const interval = setInterval(() => {
          // Choisissez une nouvelle image de manière aléatoire
          const randomIndex = Math.floor(Math.random() * images.length);
          const newImage = images[randomIndex];
          setCurrentImage(newImage);
        }, 3000); // Changement toutes les 5 secondes
    
        return () => {
          clearInterval(interval); // Nettoyage de l'intervalle lorsque le composant est démonté
        };
      }, []);
   
    return (
        <div className="flex flex-row  h-screen f-screen ">
               
                <div className="  h-full  w-3/4 bg-cover bg-center inline-block  text-white ease-in duration-1000" style={{ backgroundImage:`url(${currentImage})` }} >  
                
                    
                </div>

                <div className="flex flex-col w-1/4">
                <div className=" h-full w-full flex flex-col justify-center items-center " >
                    <div className="  h-2/5 w-3/4 bg-cover bg-center bg-[url('./images/Techmo.png')] rounded-xl hover:-translate-y-10 duration-1000">

                    </div>
                                         <h1 className="mb-6 font-bold mt-8  text-2xl ">Se connecter </h1>
                                                    <GoogleLogin
                                onSuccess={credentialResponse => {
                                console.log(credentialResponse.credential);
                                var decoded = jwt_decode(credentialResponse.credential);
                                console.log( decoded) ; 
                                sessionStorage.setItem('myData', JSON.stringify(decoded));
                                  
                                 
                                history.push('/landing');
                                window.location.reload();
                                
                               
                               
                                
                             
                               
                            }}
                                onError={() => {
                                console.log('Login Failed');  
                            }}/>


                                       
                </div>
                <div>
                         <h1 className="mb-6 font-semibold mt-8 text-center text-2xl">Par TechMo </h1>
                </div>
                </div>
        </div>
    )
};

