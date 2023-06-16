import React from "react";
import logo from './images/logo01.png'
import algerie from './images/image04.png'
import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa";


export default function Home (){

        return(
            <div className="h-screen w-screen">
                <div className="  h-3/4 w-screen bg-cover bg-center bg-[url('./images/image04.png')] flex  flex-col items-center justify-center text-white">
                    <h1 className="text-5xl font-semibold italic font-mono mb-8">Vivre et découvrir l'Algerie</h1>
                    <p className="text-2xl font-semibold ">
                        Nouvel arrivant, expatrié, étudiant, ou tout simplement amoureux de l'Algerie ? Retrouvez les <br/>astuces et bons plans que l’équipe de 7AWASDZ vous prépare chaque semaine et profitez au <br /> maximum de votre nouvelle vie algerienne  !
                    </p>

                    </div>
                 <div className='h-20 w-screen bg-purple-200 fixed top-0      border-b-4 border-indigo-200  fixed top-0 opacity-60 hover:opacity-100'>
                    
                    <ul className=" flex flex-row justify-between mx-8  text-xl font-sans italic font-semibold text-purple-950">
                    <li>
                        <div className='  h-full flex items-center  '>
                            <Link to="/" > <FaList  className="hover:text-red-700 hover:scale-125"/>   </Link>
                         </div>   
                        </li>
                    <li>
                        <div className='  h-full flex items-center hover:border-b-4 border-red-700'>
                            <Link to="/" >  Découvrir l'Algérie </Link>
                         </div>   
                        </li>
                        <li>
                        <div className='  h-full flex items-center hover:border-b-4 border-red-700'>
                            <Link to="/" >  Vivre à l'Algérie </Link>
                         </div>   
                        </li>
                        <li>
                        <div className=''>
                            <Link to="/" >  <img src={logo} className='h-20 m-auto'></img> </Link>
                         </div>   
                        </li>
                        <li>
                        <div className='  h-full flex items-center hover:border-b-4 border-red-700'>
                            <Link to="/" >  louer appartement </Link>
                         </div>   
                        </li>
                        <li>
                        <div className='  h-full flex items-center hover:border-b-4 border-red-700'>
                            <Link to="/" >  acheter appartement </Link>
                         </div>   
                        </li>
                    </ul>
                    
                 </div>

                 <div className="flex items-center px-12 my-12">
                    <div className="border-b-2 border-black  w-full">

                    </div>
                    <code className="px-10 flex-none text-3xl ">
                            Nos derniers articles 
                    </code>
                    <div className="border-t-2 border-black  w-full">

                    </div>
                 </div>
            </div>
        ) ; 
} ;  