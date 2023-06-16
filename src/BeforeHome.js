import bgImage from './images/bg.jpg';
import logo from './images/logo01.png'
import './App.css';
import { FaFacebook ,  FaTwitter , FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Home from './home';
// import {ImFacebook } from 

function BeforeHome() {
  return (
    // bg-[url('./images/bg.jpg')]
   <div  className="  h-screen w-screen bg-cover bg-center bg-[url('./images/bg.jpg')]" >
      {/* <img src={bgImage} className=' w-screen object-cover h-full  ' /> */}
        <div className='h-20 w-screen bg-black fixed top-0 opacity-40  brightness-200   shadow-md shadow-black '>
          <div className=''>
          <Link to="/home" >  <img src={logo} className='h-20 m-auto'></img> </Link>
          </div>   
        </div>

        <ul className=' inline-block h-full   w-1/3 md:1/2  flex flex-col justify-around m-auto  place-items-center text-3xl py-20 ' style={{fontFamily:"Cursive"}}>
          <li className='hover:text-cyan-900'> Dé<spn className="hover:underline underline-offset-8">couvr<span className='underline underline-offset-8'>ir l'</span>Alger</spn>ie </li>
          <li className='hover:text-orange-700'> Vi<spn className="hover:underline underline-offset-8">vre  <span className='underline underline-offset-8'>à l'A</span>lger</spn>ie </li>
          <li className='hover:text-orange-700'> Lo<spn className="hover:underline underline-offset-8">uer u<span className='underline underline-offset-8'>ne appa</span>rteme</spn>nt </li>
          <li className='hover:text-orange-700'> Ac<spn className="hover:underline underline-offset-8">heter  <span className='underline underline-offset-8'>une app</span>arteme</spn>nt </li>
          <li> <div className='flex'> 
                  <FaFacebook  className='h-12 w-12 m-4 hover:text-blue-700'/>
                  <FaTwitter  className='h-12 w-12 m-4 hover:text-blue-700' />
                 <FaInstagram  className='h-12 w-12 m-4 hover:text-blue-700' />
            
            </div></li>
        </ul>
      
   </div>
  );
}

export default BeforeHome;
