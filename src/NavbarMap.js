import React from 'react'
import { useState } from 'react';
import pic from './pic/Options.png'
import logo from './pic/Logo.png'
import more from './pic/more.png'
import home from './pic/home.png'
import map from './pic/map.png'
import p1 from './pic/01.png';import p2 from './pic/02.png';import p3 from './pic/03.png';
import p4 from './pic/04.png';import p5 from './pic/05.png';import p6 from './pic/06.png';
import p7 from './pic/07.png';import p8 from './pic/08.png';import p9 from './pic/09.png';
import p10 from './pic/10.png';import p11 from './pic/11.png';import p12 from './pic/12.png';
import p13 from './pic/13.png';import p14 from './pic/14.png';import p15 from './pic/15.png';
import p16 from './pic/16.png';import p17 from './pic/17.png';import p18 from './pic/18.png';
import p19 from './pic/19.png';import p20 from './pic/20.png';import p21 from './pic/21.png';
import p22 from './pic/22.png';import p23 from './pic/23.png';import p24 from './pic/24.png';
import p25 from './pic/25.png';import p26 from './pic/26.png';import p27 from './pic/27.png';
import p28 from './pic/28.png';import p29 from './pic/29.png';import p30 from './pic/30.png';
import p31 from './pic/31.png';import p32 from './pic/32.png';import p33 from './pic/33.png';
import p34 from './pic/34.png';import p35 from './pic/35.png';import p36 from './pic/36.png';
import p37 from './pic/37.png';import p38 from './pic/38.png';import p39 from './pic/39.png';
import p40 from './pic/40.png';import p41 from './pic/41.png';import p42 from './pic/42.png';
import p43 from './pic/43.png';import p44 from './pic/44.png';import p45 from './pic/45.png';
import p46 from './pic/46.png';import p47 from './pic/47.png';import p48 from './pic/48.png';
import p49 from './pic/49.png';import p50 from './pic/50.png';import p51 from './pic/51.png';
import p52 from './pic/52.png';import p53 from './pic/53.png';import p54 from './pic/54.png';
import p55 from './pic/55.png';import p56 from './pic/56.png';import p57 from './pic/57.png';
import p58 from './pic/58.png';
import events from './pic/evenement.png'
import vr from './pic/virtual-reality.png'
import { Link} from "react-router-dom";

function NavbarMap() {
    const [searchText, setSearchText] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [filterOpen, setfilterOpen] = useState(false);
    const [categorieOpen, setcategorieOpen] = useState(false);
    const [themeOpen, setthemeOpen] = useState(false);
    const [wilayaOpen, setwilayaOpen] = useState(false);
    const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, 
        p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, 
        p40, p41, p42, p43, p44, p45, p46, p47, p48, p49, p50, p51, p52, p53, p54, p55, p56, p57, p58
    ];
    const categories = ["Campagne","Chute d'eau","Désert","Falaise","Forét","Grotte","Lac","Montagne","Musé","Plage","Rivière", "Ville"];
    const themes = ["Historique","Naturel","Culturel"];
    const wilayas = ["Adrar","Chlef","Laghouat","Oum El Bouaghi","Batna","Béjaïa","Biskra","Bechar","Blida",
        "Bouira","Tamanrasset","Tbessa","Tlemcen","Tiaret","Tizi Ouzou","Alger","Djelfa","Jijel","Setif","Saïda",
        "Skikda","Sidi Bel Abbes","Annaba","Guelma","Constantine","Medea","Mostaganem","M'Sila","Mascara","Ouargla",
        "Oran","El Bayadh","Illizi","Bordj Bou Arreridj","Boumerdes","El Tarf","Tindouf","Tissemsilt","El Oued",
        "Khenchela","Souk Ahras","Tipaza","Mila","Ain Defla","Naama","Ain Temouchent","Ghardaefa","Relizane",
        "El M'ghair","El Menia","Ouled Djellal","Bordj Baji Mokhtar","Béni Abbès","Timimoun","Touggourt","Djanet",
        "In Salah","In Guezzam"
    ];
  const handleSearch = () => {
    // Perform search logic here
    console.log('Searching for:', searchText);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedWilaya, setSelectedWilaya] = useState(null);

  const handleButtonClickCat = (cat) => {
    setSelectedCategory(cat);
  };
  const handleButtonClickTh = (cat) => {
    setSelectedTheme(cat);
  };
  const handleButtonClickWi = (cat) => {
    setSelectedWilaya(cat);
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
                <button 
                    className="h-12 relative w-32 flex ml-4 bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none"
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
                                className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none shadow-md hover:shadow-lg"
                            >
                                Catégorie
                                <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                                {categorieOpen && <div className="absolute max-h-40 overflow-y-scroll overflow-x-hidden mt-8 left-0 w-[230px] bg-[#F5F3C1] rounded-b-2xl shadow-md hover:shadow-lg">
                                    <div className="w-11/12 m-auto border border-[#0A4D68]"></div>
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                handleButtonClickCat(cat);
                                            }}
                                            className={`h-12 relative w-[230px] bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none ${selectedCategory === cat ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>}
                            </button>
                            <button
                                onClick={(event) => {
                                    event.stopPropagation();
                                    setthemeOpen(!themeOpen);
                                }}
                                className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none"
                            >
                                Thème
                                <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                                {themeOpen && <div className="absolute max-h-40 mt-8 left-0 w-[230px] bg-[#F5F3C1] rounded-b-2xl shadow-md hover:shadow-lg">
                                    <div className="w-11/12 m-auto border border-[#0A4D68]"></div>
                                    {themes.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                handleButtonClickTh(cat);
                                            }}
                                            className={`h-12 relative w-[230px] bg-[#F5F3C1] text-[#0A4D68] opacity-70 hover:opacity-100 font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none ${selectedTheme === cat ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>}
                            </button>
                            <button 
                                onClick={(event) => {
                                    event.stopPropagation();
                                    setwilayaOpen(!wilayaOpen);
                                }}
                                className="h-12 relative w-[230px] flex bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none"
                            >
                                Wilaya
                                <img src={more} alt="Image" class="w-3 h-2 mt-3 ml-auto"/>
                                {wilayaOpen && <div className="absolute max-h-40 overflow-y-scroll overflow-x-hidden mt-8 left-0 w-[230px] bg-[#F5F3C1] rounded-b-2xl shadow-md hover:shadow-lg">
                                    <div className="w-11/12 m-auto border border-[#0A4D68]"></div>
                                    {wilayas.map((cat,index) => (
                                        <button
                                            key={cat}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                handleButtonClickWi(cat);
                                            }}
                                            className={`h-12 relative w-[230px] flex items-center bg-[#F5F3C1] text-[#0A4D68] opacity-70 hover:opacity-100 font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none ${selectedWilaya === cat ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                                        >
                                            {cat}
                                            <img src={images[index]} alt="Image" class="w-7 h-5 mt-3 ml-auto"/>
                                        </button>
                                    ))}
                                </div>}
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
                <button 
                    class="w-full h-10" 
                    onClick={()=>{setIsOpen(!isOpen);}}
                >
                   <img src={pic} alt="Image" class="w-10 ml-auto"/> 
                </button>
                {isOpen && (
                    <div className="absolute -right-4 mt-5 w-[400px] bg-[#05BFDB] rounded-b-2xl shadow-md hover:shadow-lg">
                        <div className="m-5 rounded-xl bg-[#F5F3C1]">
                            <Link to='/'>
                                <button className=" opacity-60 hover:opacity-100 w-full flex items-center justify-between bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none">
                                    Home
                                    <img src={home} alt="Image" class="w-7 h-7 mt-3"/>
                                </button>
                            </Link>
                            <div className="w-11/12 m-auto border border-[#0A4D68]"></div>
                            <Link to='/addplace'>
                                <button 
                                    className=" opacity-60 hover:opacity-100 w-full flex items-center justify-between bg-[#F5F3C1] text-[#0A4D68] font-fredoka font-normal text-xl px-4 py-2 rounded-lg focus:outline-none"
                                >
                                    Add a touristic place
                                    <img src={map} alt="Image" class="w-7 h-7 mt-3"/>
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default NavbarMap