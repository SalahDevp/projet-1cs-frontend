import bgImage from "./images/bg.jpg";
import logo from "./images/logo01.png";
import "./App.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import Intro from "./Intro";
import Map from "./Map";
import Landing from "./Landing";
import SideBar from "./SideBar";
// import NewEvent from "./NewEvent";
// import AddEvent from "./AddEvent";
import AddTouristicPlace from "./AddTouristicPlace";
// import EditTouristicPlace from "./EditTouristicPlace";
import { useEffect, useState } from "react";
import Test from "./test";
// import EventsAndActivities from "./EventsAndActivities";
// import LocalAdministrator from "./LocalAdministarators";
// import AddLocalAdministrator from "./AddLocalAdministrator";

// import {ImFacebook } from

function App() {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    console.log("in app.js");
    console.log(info);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/intro" element={<Intro />}></Route>
      {/* <Route path="/addeve" element={<AddEvent />}></Route> */}
      <Route path="/map" element={<Map />}></Route>
      <Route path="/addplace" element={<AddTouristicPlace />}></Route>
      {/* <Route path="/editplace" element={<EditTouristicPlace />}></Route> */}
      {/* <Route path="/events" element={<EventsAndActivities />}></Route> */}
      {/* <Route path="/adduser" element={<LocalAdministrator />}></Route> */}
      {/* <Route path="/admins" element={<AddLocalAdministrator />}></Route> */}

      <Route path="/test" element={<Test />}></Route>
    </Routes>
  );
}

export default App;
