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
import "leaflet/dist/leaflet.css";
import { useMap, useMapEvent } from "react-leaflet";
import Pic11 from "./images/Pic11.png";
import jwt_decode from "jwt-decode";
import { Icon } from "leaflet";
import { useContext } from "react";
import { infoUser } from "./Intro";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { createEvenement } from "./utils/axios/evenement";

export default function AddEvent() {
  //queryparams => id= pi_id
  let [evenement, setEvenement] = useState({
    nom: "",
    date_debut: "",
    date_fin: "",
    temp_debut: "",
    temp_fin: "",
    description: "",
  });

  const storedData = {};
  const [searchParams, setSearchParams] = useSearchParams();

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
            <Link to={"/addplace"}>
              <div className="border rounded-xl p-3  text-green-400 bg-blue-800">
                Ajouter une place tourisitique
              </div>
            </Link>{" "}
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
            <h1 className="text-3xl my-8">Ajouter un évènement </h1>
            <h3 className="text-red-500 mb-6 font-semibold">
              Tous ce qui est marqué * est obligatoire{" "}
            </h3>
            <div className="grid grid-cols-1 gap-y-6 ">
              <div>
                {" "}
                <label htmlFor="outlined-required">Nom de l'évènement </label>
                <div>
                  <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label=""
                    value={evenement.nom}
                    onChange={(e) => {
                      setEvenement((prv) => ({ ...prv, nom: e.target.value }));
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-x-10 mt-6">
                  <div>
                    <label htmlFor="demo-customized-select">
                      {" "}
                      Date début *{" "}
                    </label>
                    <TextField
                      required
                      id="outlined-number"
                      label=""
                      type="date"
                      fullWidth
                      placeholder="Open"
                      value={evenement.date_debut}
                      onChange={(e) => {
                        setEvenement((prv) => ({
                          ...prv,
                          date_debut: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="demo-customized-select"> Date fin * </label>
                    <TextField
                      required
                      id="outlined-number"
                      label=""
                      type="date"
                      fullWidth
                      placeholder="Open"
                      value={evenement.date_fin}
                      onChange={(e) => {
                        setEvenement((prv) => ({
                          ...prv,
                          date_fin: e.target.value,
                        }));
                      }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h1> Horaire (pour tous les jours d'evenement)*</h1>
                <div className="grid grid-cols-2 gap-x-10 ">
                  <div>
                    <h1 className="text-sm"> Ouvert</h1>
                    <TextField
                      required
                      id="outlined-number"
                      label=""
                      type="time"
                      fullWidth
                      placeholder="Open"
                      value={evenement.temp_debut}
                      onChange={(e) => {
                        setEvenement((prv) => ({
                          ...prv,
                          temp_debut: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <h1 className="text-sm"> Fermé</h1>
                    <TextField
                      required
                      id="outlined-number"
                      label=""
                      type="time"
                      fullWidth
                      placeholder="Closed"
                      value={evenement.temp_fin}
                      onChange={(e) => {
                        setEvenement((prv) => ({
                          ...prv,
                          temp_fin: e.target.value,
                        }));
                      }}
                    />
                  </div>
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
                  value={evenement.description}
                  onChange={(e) => {
                    setEvenement((prv) => ({
                      ...prv,
                      description: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <div
            className="border rounded-3xl px-8  my-8 py-3 text-white bg-blue-800 inline-block  text-center font-semibold text-xl hover:scale-110"
            onClick={async () => {
              try {
                const res = await createEvenement(
                  evenement.nom,
                  new Date(`${evenement.date_debut} ${evenement.temp_debut}`),
                  new Date(`${evenement.date_fin} ${evenement.temp_fin}`),
                  evenement.description,
                  searchParams.get("id")
                );
                console.log(res);
              } catch (e) {
                console.error(e);
              }
            }}
          >
            Add{" "}
          </div>
          <div className="border rounded-3xl px-8  my-8 py-3 text-white bg-orange-400 inline-block text-center font-semibold hover:scale-110">
            Cancel{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
