import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  BootstrapInput,
} from "@mui/material";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";
import AjouterImage from "./AjouterImage";
import logo from "./images/Techmo.png";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useMap, useMapEvent } from "react-leaflet";
import Pic11 from "./images/Pic11.png";
import jwt_decode from "jwt-decode";

import { useContext } from "react";
import { infoUser } from "./Intro";
import wilayas from "./utils/wilayas.json";
import communes from "./communes";
import { FormGroup, Checkbox, FormControlLabel } from "@mui/material";
import { createPI, getPIById, updatePI } from "./utils/axios/pointInteret";
import { useSearchParams } from "react-router-dom";

export default function AddTouristicPlace() {
  //NOTE: when editing query params => editMode=true&id=lieu_id

  const [lieu, setLieu] = useState({
    categorie: {
      nom: "",
    },
    theme: [
      {
        nom: "",
      },
    ],
    transport: [],
    nom: "",
    description: "",
    wilaya: "",
    adresse: "",
    latitude: 0.0,
    longitude: 0.0,
    heur_ouverture: "",
    heur_fermeture: "",
  });

  const customIcon = new Icon({
    //iconUrl:"https://www.flaticon.com/free-icon/location_1483336?term=marker&page=1&position=9&origin=search&related_id=1483336"  ,
    iconUrl: require("./images/location.png"),
    iconSize: [25, 25],
  });
  const [markerPosition, setMarkerPosition] = useState(null);
  function handleMapClick(e) {
    const { lat, lng } = e.latlng;
    setMarkerPosition([lat, lng]);
    // setData({...data , [data.coords] : [lat ,lng ]}) ;
    setLieu((prv) => ({ ...prv, latitude: lat, longitude: lng }));

    console.log(`Coordonnées: Latitude ${lat}, Longitude ${lng}`);
  }

  function MapClickEvents() {
    useMapEvents({
      click: handleMapClick,
    });
    return null;
  }

  // var decoded = jwt_decode(credentialResponse.credential);
  const storedData = {};
  const [isEditMode, setIsEditMode] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [images, setImages] = useState([]);
  const [center, setCenter] = useState([15, 30]);
  const [position, setPosition] = useState([36.7, 3.18]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    // Update the transportations array based on checkbox state
    if (checked) {
      setLieu((prevLieu) => ({
        ...prevLieu,
        transport: [...prevLieu.transport, { nom: value }],
      }));
    } else {
      setLieu((prevLieu) => ({
        ...prevLieu,
        transport: prevLieu.transport.filter((transp) => transp.nom !== value),
      }));
    }
  };

  useEffect(() => {
    const editModeParam = searchParams.get("editMode");
    const lieuID = searchParams.get("id");
    // Set the value of isEditMode based on the query parameter
    if (editModeParam === "true") {
      setIsEditMode(true);
      getPIById(lieuID).then((lieu) => setLieu(lieu));
    } else {
      setIsEditMode(false);
    }
  }, [searchParams]);

  return (
    <div className="h-screen overflow-y-scroll bg-fixed bg-cover bg-center bg-[url('./images/Pic11.png')] text-xl">
      <div className="flex justify-between p-4">
        <img src={logo} className="w-20 h-20 hover:hue-rotate-180 "></img>
        <ul className="flex text-xl font-semibold text-slate-500  w-1/2 justify-around items-center ">
          <li className="hover:underline underline-offset-8 hover:text-blue-950">
            {" "}
            <a href="#" className="focus:underline">
              {" "}
              Home
            </a>{" "}
          </li>
          <li className=" hover:text-blue-950 hover:scale-110 ">
            {" "}
            <div className="border rounded-xl p-3  text-green-400 bg-blue-800">
              Ajouter une place tourisitique
            </div>{" "}
          </li>
        </ul>
        <div className=" flex ">
          {" "}
          <img
            src={storedData.picture}
            className="w-20 h-20 hover:hue-rotate-180  rounded-full "
          ></img>
          <p className="text-center self-center ml-2 text-md">
            {storedData.name}
          </p>
        </div>
      </div>
      <div className="m-6 bg-blue-600 bg-opacity-40 p-4 rounded-2xl ">
        <div className="m-6 bg-white bg-opacity-60 p-4 rounded-2xl ">
          <div className=" my-10">
            <h1 className="text-3xl my-8">Ajouter une place tourisitique </h1>
            <h3 className="text-red-500 mb-6 font-semibold">
              Tous ce qui est marqué * est obligatoire{" "}
            </h3>
            <div className="grid grid-cols-1 gap-y-6 ">
              <div>
                {" "}
                <label htmlFor="outlined-required">Nom * </label>
                <div className="mb-4">
                  <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label=""
                    value={lieu.nom}
                    onChange={(e) => {
                      // setData({...data , [data.placeName]  : e.target.value} ) ;
                      // console.log("nom de place :" + e.target.value) ;
                      setLieu((prv) => ({ ...prv, nom: e.target.value }));
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-x-10 my-4">
                  <div>
                    <label htmlFor="demo-customized-select">
                      {" "}
                      Catégorie *{" "}
                    </label>
                    <Select
                      required
                      fullWidth
                      labelId="demo-customized-select-label"
                      id="demo-customized-select"
                      value={lieu.categorie.nom}
                      onChange={(e) => {
                        // setData({...data , [data.category]  : e.target.value} ) ;
                        // console.log("nom de place :" + e.target.value) ;
                        setLieu((prv) => ({
                          ...prv,
                          categorie: { nom: e.target.value },
                        }));
                      }}
                    >
                      <MenuItem value="musé">musé</MenuItem>
                      <MenuItem value="plage">plage</MenuItem>
                      <MenuItem value="forét">forét</MenuItem>
                      <MenuItem value="ville">ville</MenuItem>
                      <MenuItem value="montagne">montagne</MenuItem>
                      <MenuItem value="campagne">campagne</MenuItem>
                      <MenuItem value="lac">lac</MenuItem>
                      <MenuItem value="rivière">rivière</MenuItem>
                      <MenuItem value="désert">désert</MenuItem>
                      <MenuItem value="grotte">grotte</MenuItem>
                      <MenuItem value="falaise">falaise</MenuItem>
                      <MenuItem value="chute d'eau">chute d'eau</MenuItem>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="demo-customized-select"> Theme* </label>
                    <Select
                      required
                      fullWidth
                      labelId="demo-customized-select-label"
                      id="demo-customized-select"
                      value={lieu.theme[0].nom}
                      onChange={(e) => {
                        // setData({...data , [data.theme]  : e.target.value} ) ;
                        // console.log("nom de place :" + e.target.value) ;
                        setLieu((prv) => ({
                          ...prv,
                          theme: [{ nom: e.target.value }],
                        }));
                      }}
                    >
                      <MenuItem value={"ten"}>Ten</MenuItem>
                      <MenuItem value={"twenty"}>Twenty</MenuItem>
                      <MenuItem value={"Thirty"}>Thirty</MenuItem>
                    </Select>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-x-10 ">
                    <div>
                      <label htmlFor="demo-customized-select"> Wilaya* </label>
                      <Select
                        required
                        fullWidth
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={lieu.wilaya}
                        onChange={(e) => {
                          // setData({...data , [data.wilaya]  : e.target.value} ) ;
                          // console.log("nom de place :" + e.target.value) ;
                          setLieu((prv) => ({
                            ...prv,
                            wilaya: e.target.value,
                          }));
                        }}
                      >
                        {wilayas.map((elem) => {
                          return <MenuItem value={elem}>{elem}</MenuItem>;
                        })}
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="demo-customized-select"> Adresse* </label>
                      <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label=""
                        value={lieu.adresse}
                        // value={data.placeName }
                        onChange={(e) => {
                          // setData({...data , [data.placeName]  : e.target.value} ) ;
                          // console.log("nom de place :" + e.target.value) ;
                          setLieu((prv) => ({
                            ...prv,
                            adresse: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1> Horaire*</h1>
                <div className="grid grid-cols-2 gap-x-10 ">
                  <div>
                    <h1 className="text-sm"> Ouverture*</h1>
                    <TextField
                      required
                      id="outlined-number"
                      label=""
                      type="time"
                      fullWidth
                      value={lieu.heur_ouverture}
                      placeholder="Open"
                      onChange={(e) => {
                        // setData({...data , [data.open]  : e.target.value} ) ;
                        // console.log("nom de place :" + e.target.value) ;
                        setLieu((prv) => ({
                          ...prv,
                          heur_ouverture: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <h1 className="text-sm"> Fermeture*</h1>
                    <TextField
                      required
                      id="outlined-number"
                      label=""
                      ampm={false}
                      type="time"
                      fullWidth
                      placeholder="Closed"
                      value={lieu.heur_fermeture}
                      onChange={(e) => {
                        // setData({...data , [data.close]  : e.target.value} ) ;
                        // console.log("nom de place :" + e.target.value) ;
                        setLieu((prv) => ({
                          ...prv,
                          heur_fermeture: e.target.value,
                        }));
                      }}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="demo-customized-select ">
                    {" "}
                    Moyens de transport *{" "}
                  </label>
                  <FormGroup className="">
                    <div className="flex justify-between">
                      <div className="flex flex-col w-1/2">
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="Voiture"
                              checked={lieu.transport.some(
                                (transportation) =>
                                  transportation.nom === "Voiture"
                              )}
                              onChange={handleCheckboxChange}
                            />
                          }
                          label="Voiture"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="Train"
                              checked={lieu.transport.some(
                                (transportation) =>
                                  transportation.nom === "Train"
                              )}
                              onChange={handleCheckboxChange}
                            />
                          }
                          label="Train"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="Bus"
                              checked={lieu.transport.some(
                                (transportation) => transportation.nom === "Bus"
                              )}
                              onChange={handleCheckboxChange}
                            />
                          }
                          label="Bus"
                        />
                      </div>
                      <div className="flex flex-col w-1/2 pl-6">
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="Metro"
                              checked={lieu.transport.some(
                                (transportation) =>
                                  transportation.nom === "Metro"
                              )}
                              onChange={handleCheckboxChange}
                            />
                          }
                          label="Metro"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="Trame"
                              checked={lieu.transport.some(
                                (transportation) =>
                                  transportation.nom === "Trame"
                              )}
                              onChange={handleCheckboxChange}
                            />
                          }
                          label="Trame"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="Téléphérique"
                              checked={lieu.transport.some(
                                (transportation) =>
                                  transportation.nom === "Téléphérique"
                              )}
                              onChange={handleCheckboxChange}
                            />
                          }
                          label="Téléphérique"
                        />
                      </div>
                    </div>
                  </FormGroup>
                </div>
              </div>

              <div>
                <label htmlFor="outlined-multiline-static">Description* </label>
                <TextField
                  required
                  fullWidth
                  id="outlined-multiline-static"
                  label=""
                  multiline
                  rows={4}
                  value={lieu.description}
                  onChange={(e) => {
                    // setData({...data , [data.history]  : e.target.value} ) ;
                    // console.log("nom de place :" + e.target.value) ;
                    setLieu((prv) => ({
                      ...prv,
                      description: e.target.value,
                    }));
                  }}
                />
              </div>

              <div className="w-full h-150">
                <h1 className="mb-3">Carte(lieu) *</h1>
                <MapContainer center={position} zoom={5}>
                  {/* <MyComponent /> */}
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    className="z-40 "
                    attribution="<div>Mu namejhdekjfhkejh</div>"
                  />
                  {/* <Marker position={markerPosition} /> */}
                  {markerPosition && (
                    <Marker position={markerPosition} icon={customIcon} />
                  )}
                  <MapClickEvents />
                </MapContainer>
              </div>
            </div>
            <h1 className="mt-14 ">
              {" "}
              Importer des Images (Au moins vous devez importer une image)
            </h1>
            <div className="mt-8 border rounded-3xl p-4 border-black">
              <AjouterImage images={images} setImages={setImages} />
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <div
            className="border rounded-3xl px-8  my-8 py-3 text-white bg-blue-800 inline-block  text-center font-semibold text-xl hover:scale-110"
            onClick={async () => {
              try {
                console.log(images);
                const res = await (!isEditMode
                  ? createPI(lieu, images)
                  : updatePI(searchParams.get("id"), lieu, images));
                console.log(res);
              } catch (e) {
                console.error(e);
              }
            }}
          >
            Add{" "}
          </div>
          <div
            className="border rounded-3xl px-8  my-8 py-3 text-white bg-orange-400 inline-block text-center font-semibold hover:scale-110"
            onClick={() => console.log(lieu)}
          >
            Cancel{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
