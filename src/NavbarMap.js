import React from 'react'
import { useState } from 'react';
import pic from './pic/Options.png'
import logo from './pic/Logo.png'
import more from './pic/more.png'
import home from './pic/home.png'
import map from './pic/map.png'
import events from './pic/evenement.png'
import vr from './pic/virtual-reality.png'

function NavbarMap() {
    const [searchText, setSearchText] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [filterOpen, setfilterOpen] = useState(false);
    const [categorieOpen, setcategorieOpen] = useState(false);
    const [themeOpen, setthemeOpen] = useState(false);
    const [wilayaOpen, setwilayaOpen] = useState(false);

  const handleSearch = () => {
    // Perform search logic here
    console.log('Searching for:', searchText);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div class='absolute top-5 left-0 right-0 z-50 bg-[#05BFDB] w-[1322px] h-20 mx-auto rounded-3xl shadow-md hover:shadow-lg border border-[#0A4D68] flex items-center justify-between px-4'>
        <div class="flex items-center justify-between w-full px-3 py-3 mx-auto max-w-8xl lg:px-4">
            <div class="w-2/12 flex items-center justify-between">
                <a href="/" class="flex">
                    <img src={logo} alt="Image" class="h-14 mr-6 shadow-md hover:shadow-lg"/>
                    <span class="self-center text-3xl font-bold whitespace-nowrap text-[#F5F3C1]">Jawla</span>
                </a>
            </div>
            <div class="w-8/12 flex items-center justify-between">
                <textarea
                    className="w-3/4 bg-[#F5F3C1] caret-[#0A4D68] font-fredoka font-normal text-xl text-[#0A4D68] px-4 py-2 rounded-lg focus:outline-none resize-none h-12 placeholder:font-fredoka placeholder:font-normal placeholder:text-xl"
                    placeholder="search for a place ..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                ></textarea>
                <button className="h-12 relative w-32 flex ml-4 bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none"
                     onClick={()=>{setfilterOpen(!filterOpen);}}
                >
                    Filter
                    <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                    {filterOpen && (
                    <div className="flex items-center justify-between px-16 absolute mt-14 -left-[861px] w-[1284px] h-16 bg-[#05BFDB] rounded-b-2xl shadow-md hover:shadow-lg border border-[#0A4D68]">
                       <button
                            onClick={(event) => {
                            event.stopPropagation();
                            setcategorieOpen(!categorieOpen);
                            }}
                             className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none shadow-md hover:shadow-lg">
                            Catégorie
                            <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                            {categorieOpen && <div className="absolute max-h-40 overflow-y-scroll scrollbar-custum overflow-x-hidden mt-8 left-0 w-[230px] bg-[#F5F3C1] rounded-b-2xl shadow-md hover:shadow-lg">
                                <div className="w-11/12 m-auto border border-[#0A4D68]"></div>
                                <button
                                    onClick={(event) => {
                                    event.stopPropagation();
                                    // handle button 4 click
                                    }}
                                    className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                                    musé
                                    <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                                </button>
                                <button
                                    onClick={(event) => {
                                    event.stopPropagation();
                                    // handle button 4 click
                                    }}
                                    className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                                    musé
                                    <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                                </button>
                                <button
                                    onClick={(event) => {
                                    event.stopPropagation();
                                    // handle button 4 click
                                    }}
                                    className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                                    musé
                                    <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                                </button>
                                <button
                                    onClick={(event) => {
                                    event.stopPropagation();
                                    // handle button 4 click
                                    }}
                                    className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                                    musé
                                    <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                                </button>
                                <button
                                    onClick={(event) => {
                                    event.stopPropagation();
                                    // handle button 4 click
                                    }}
                                    className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                                    musé
                                    <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                                </button>
                                <button
                                    onClick={(event) => {
                                    event.stopPropagation();
                                    // handle button 4 click
                                    }}
                                    className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                                    musé
                                    <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                                </button>
                                <button
                                    onClick={(event) => {
                                    event.stopPropagation();
                                    // handle button 4 click
                                    }}
                                    className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                                    musé
                                    <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                                </button>
                                <button
                                    onClick={(event) => {
                                    event.stopPropagation();
                                    // handle button 4 click
                                    }}
                                    className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                                    musé
                                    <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                                </button>
                                <button
                                    onClick={(event) => {
                                    event.stopPropagation();
                                    // handle button 4 click
                                    }}
                                    className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                                    musé
                                    <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                                </button>

                                <button
                                    onClick={(event) => {
                                    event.stopPropagation();
                                    // handle button 4 click
                                    }}
                                    className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                                    musé
                                    <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                                </button><button
                                    onClick={(event) => {
                                    event.stopPropagation();
                                    // handle button 4 click
                                    }}
                                    className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                                    musé
                                    <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                                </button>

                                <button
                                    onClick={(event) => {
                                    event.stopPropagation();
                                    // handle button 4 click
                                    }}
                                    className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                                    musé
                                    <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                                </button>
                                </div>}
                        </button>
                        <button
                            onClick={(event) => {
                            event.stopPropagation();
                            // handle button 4 click
                            }}
                             className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                            Thème
                            <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                        </button>
                        <button 
                            onClick={(event) => {
                            event.stopPropagation();
                            // handle button 4 click
                            }}
                            className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                            Wilaya
                            <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                        </button>
                    </div>
                )}
                </button>
                <button 
                    className="h-12 w-32 ml-4 bg-[#0A4D68] text-[#00FFCA] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <div className="w-1/12 relative">
                <button class="w-full h-10" onClick={()=>{setIsOpen(!isOpen);}}>
                   <img src={pic} alt="Image" class="w-10 ml-auto"/> 
                </button>
                {isOpen && (
                    <div className="absolute -right-4 mt-5 w-[400px] bg-[#05BFDB] rounded-b-2xl shadow-md hover:shadow-lg">
                        <div className="m-5 rounded-xl bg-[#F5F3C1]">
                            <button className=" opacity-60 hover:opacity-100 w-full flex items-center justify-between bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                                Home
                                <img src={home} alt="Image" class="w-7 h-7 mt-3"/>
                            </button>
                            <div className="w-11/12 m-auto border border-[#0A4D68]"></div>
                            <button className=" opacity-60 hover:opacity-100 w-full flex items-center justify-between bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                                Map
                                <img src={map} alt="Image" class="w-7 h-7 mt-3"/>
                            </button>
                            <div className="w-11/12 m-auto border border-[#0A4D68]"></div>
                            <button className=" opacity-60 hover:opacity-100 w-full flex items-center justify-between bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                                Events & activities
                                <img src={events} alt="Image" class="w-7 h-7 mt-3"/>
                            </button>
                            <div className="w-11/12 m-auto border border-[#0A4D68]"></div>
                            <button className=" opacity-60 hover:opacity-100 w-full flex items-center justify-between bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                                Virtual visit
                                <img src={vr} alt="Image" class="w-7 h-7 mt-3"/>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default NavbarMap