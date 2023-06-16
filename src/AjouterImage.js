import React , { useState } from 'react'
import camIcon from "./images/Pic1.png";
import plusIcon from "./images/Pic1.png";
import { Button } from '@mui/material'; 
import backgroundImage from "./images/bg.jpg";
import {BsBoxArrowUp } from "react-icons/bs"


function AjouterImage({images,setImages}) {
    const [selectedImage, setSelectedImage] = useState(null);
  
    return (
      <div className="grid grid-cols-4 lg:col-span-5 flex flex-row gap-4 flex-nowrap overflow-auto pb-2 scrollbar-custum">
        <div className="order-last flex-none h-[350px]  w-[250px] rounded-xl  border-blue-gray-500 flex items-center justify-center">
            
        <label htmlFor='imageUpload'>
            <div className='relative text-blue-700 text-lg bg-slate-200 border  p-4 w-[300px] h-[250px] flex items-center justify-center flex flex-col pl-7 ml-10'>
                {/* <img alt="cam-Icon" src={camIcon}  className=""/> */}
                <h1>Upload Image </h1>
                <BsBoxArrowUp />
                {/* <img className='absolute top-[29px] left-[25px]' alt="plus-Icon" src={plusIcon} /> */}
            </div>
          </label>
          <input
            type="file"
            id='imageUpload'
            className='hidden'
            onChange={(event) => {
              setSelectedImage(event.target.files[0]);
              console.log(event.target.files[0]) ; 
            }}
          />
        </div> 
        {selectedImage && (
                <div className="relative overflow-hidden order-[9998] flex-none h-[350px] w-[250px] rounded-md border  border-gray-500">
                    <img className='w-full h-full object-cover object-center' alt="not fount" src={URL.createObjectURL(selectedImage)} />
                    <div className='absolute bottom-0 left-0 right-0 pb-2 flex justify-around'
                    >
                        <Button
                            type='button'  color="success"  variant="outlined" size="large"
                            className="text-white bg-green-300/80 border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2"
                            onClick={()=>{ 
                                setSelectedImage(null);  
                                const array = images;
                                array.push(selectedImage);
                                setImages(array);
                            }
                        }>ajouter</Button>
                        <Button color="error"
                            type='button' variant="outlined" size="large"
                            className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"'
                            //className="text-white bg-red-300 border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2"
                            onClick={()=> setSelectedImage(null)}
                        >remove</Button>
                      
                    </div>
                    
                </div>
            )}
        
        {   
            images.map((imag,index) =>
                <div key={index} className="flex-none h-[350px] w-[250px] rounded-xl border border-blue-gray-500 overflow-hidden">
                    <img 
                        className='w-full h-full object-cover object-center'
                        src={URL.createObjectURL(imag)} alt="img" 
                    />
                </div> 
            )
        }
      </div>
    );
}

export default AjouterImage;