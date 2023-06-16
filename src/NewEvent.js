import React from "react";
import { TextField  ,Select , MenuItem ,InputLabel , BootstrapInput} from "@mui/material";
import SideBar from './SideBar';
import { useState } from "react";
import AjouterImage from "./AjouterImage";
export default function NewEvent(){


    const [images, setImages] = useState([]);   


    return (
        <div>
            <SideBar />
        <div className="ml-72">  
            
                <h1 className="text-3xl my-8">Nouvel Evenement </h1>
                <h3 className="text-red-500 mb-6 font-semibold">Tous ce qui est marqué * est obligatoire </h3>
                 <div className="grid grid-cols-1 gap-y-6 w-1/2"> 
                            <div>
                    
                                    <TextField
                        required  fullWidth
                        id="outlined-required"
                        label="Nom de L'evenement"
                        
                        />

                    
                    </div>
                    <div> 
                        <h1> Date et heure</h1>
                        <div  className="grid grid-cols-2 gap-x-10 ">
                        <TextField required
                            id="outlined-number"
                            label=""
                            type="date"
                            fullWidth
                            />
                            <TextField  required
                            id="outlined-number"
                            label=""
                            type="time"
                            fullWidth
                            /> </div>
                    </div>
                    <div>
                        <h1>Statut *</h1>
                                        {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
                            <Select required   fullWidth
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            label="chooe"  
                        
                        // input={<BootstrapInput />}
                            >
                            {/* <MenuItem disabled value="">
                <em>Placeholder</em>
                </MenuItem> */}
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                    </div>
                    <div>
                        <h1>Carte(lieu) *</h1>
                                        {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
                            <Select required   fullWidth
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            label="chooe"  
                        
                        // input={<BootstrapInput />}
                            >
                            {/* <MenuItem disabled value="">
                <em>Placeholder</em>
                </MenuItem> */}
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                    </div>
                    <div>
                                <TextField  required fullWidth
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                    
                        />
                    </div>
                 </div>
                 <h1 className="mt-6 "> Importer Images (Au moins vou devez importez une image</h1>
                <div className="mt-8 border rounded-3xl p-4">
                   
                <AjouterImage images={images} setImages={setImages}/>
                </div>
        </div>
    </div>
    );
};