import React, { useEffect, useState } from "react";
import logo from './images/Techmo.png'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

// import { swal } from "sweetalert";
import {
  Autocomplete,
  TextField,
  Stack,
  Select,
  Box,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import {
  FaArrowDown,
  FaArrowUp,
  FaSearch,
  FaTrash,
  FaEye,
  FaWrench,
} from "react-icons/fa";
// import { Link } from "react-router-dom";
// import CreateUser from "./CreateUser";
// import ModifierUser from "./ModifierUser";
// import UserInformations from "./UserInformations";

function AddLocalAdministrator() {
   let users = [
    { 
firstname : "youcef" , 
lastname : "refisse" ,
 email :"ky_refisse@esi.dz" ,
 id : 1 , 
} , 
{firstname : "youcef" , 
lastname : "refisse" ,
 email :"ky_refisse@esi.dz" ,
 id : 2 , 
},
{firstname : "youcef" , 
lastname : "refisse" ,
 email :"ky_refisse@esi.dz" ,
 id : 3, 
},
{firstname : "youcef" , 
lastname : "refisse" ,
 email :"ky_refisse@esi.dz" ,
 id : 4 , 
},
{firstname : "youcef" , 
lastname : "refisse" ,
 email :"ky_refisse@esi.dz" ,
 id : 5 , 
}

   ] ; 

   let efface = [] ; 
   let j =0 ; 
   for ( j = 0 ; j < users.length ; j++ ) {
        efface.push(false) ; 
   }
  console.log("les user de mang", users);

  function supprimer(id) {
    

    

   

    setUsersList2(
      UsersList.filter((elem) => {
        if (elem.id != id) return elem;
      })
    );
    UsersList = (usersList2);
  }

  const [nom, setNom] = useState("");
  const [idUserASupprimer, setIdUserASupprimer] = useState("");
  const [confirmer, setConfirmer] = useState(false);
  const [typeUser, setTypeUser] = useState(2);
  const [typeUser02, setTypeUser02] = useState(0);

  const [selection, setSelection] = useState(0);

  let i = 1;

  

  //let [UsersList , setUsersList] = useState([]);
  let UsersList = [];

  for (let i = 0; i < users.length; i++) {
    UsersList.push(
     <tr>
        <td className="p-1">
          {<span className="bg-gray-300 p-1 rounded-md">{i + 1}</span>}
        </td>
        <td className="p-1">{users[i].firstname}</td>
        <td className="p-1">{users[i].lastname}</td>
        <td className="p-1">{users[i].email}</td>
        
        <td className="p-1">
          {
            <div className="space-x-2">
              
              
              <span className="p-2 rounded-md hover:bg-red-500">
                <button
                  onClick={(e) => {
                    // setConfirmer(true);
                    setIdUserASupprimer(users[i].id);
                    setUsersList2(
                      UsersList.filter((elem) => {
                        if (elem.id != e.target.id) return elem;
                      })
                    
                    )
                    UsersList = usersList2 ; 
                  }}
                  id={users[i].id}
                >
                  {<div className=" rounded-md px-2 py-1 flex items-center bg-red-500 text-white"> <FaTrash className=" fill-white"/> <span className="ml-1 font-bold">supp</span> </div> }
                </button>
              </span>
            </div>
          }
        </td>
      </tr>
    );
  } ; 
  const [usersList2, setUsersList2] = useState(UsersList);
  // console.log(UsersList);
  const  storedData =  JSON.parse(sessionStorage.getItem('myData'));
  return (
    <div className="App bg-yellow-200">
      <div className="flex justify-between p-4">
                <img src={logo} className="w-20 h-20 hover:hue-rotate-180 "></img>
                <ul className="flex text-xl font-semibold text-slate-500  w-1/2 justify-around items-center ">
                    <li className="hover:underline underline-offset-8 hover:text-blue-950"> <a href="#" className="focus:underline"> Home</a> </li>
                    <li className=" hover:text-blue-950 hover:scale-110 "> <div className="border rounded-xl p-3  text-green-400 bg-blue-800">Add a touristic place</div> </li>

                </ul>
                <div className=" flex "> <img src={storedData.picture} className="w-20 h-20 hover:hue-rotate-180  rounded-full "></img>
                 <p className="text-center self-center ml-2 text-md">{storedData.name}</p>
                </div>
            </div>
      <div className="App  " style={{ height: "100vh" }}>
        <div className="flex" style={{ height: "100vh" }}>
        
          <div
            style={{ height: "100vh" }}
            className="scrollbar w-full overflow-auto "
          >
           

            <div className="p-6">
             
                <div>
                 
                  <div className="space-y-10">
                    <div className="flex justify-between">
                      <div className="grid grid-cols-2 gap-x-10 sm:w-full lg:w-1/2">
                       
                        
                      </div>
                      <div className="self-center space-x-4">
                        
                        <button className="text-white font-bold bg-blue-700 p-2 self-center hover:bg-blue-800 hover:scale-105 rounded-md">
                          <Link to={"/adduser"}>+ Add User</Link>
                        </button>
                      </div>
                    </div>
                    {usersList2.length > 0 && (
                      <table className="w-full   text-center divide-y">
                        <thead className="mb-1 ">
                          <th>User</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>E-mail</th>
                          
                          <th>Actions</th>
                        </thead>
                        <tbody className="">{usersList2}</tbody>
                      </table>
                    )}
                  </div>
                  <button className="text-white bg-blue-700 p-2 font-bold self-center hover:bg-blue-800 hover:scale-105 rounded-md right-8 mt-12 absolute right-0 mr-6">
                    <Link to={"/landing"}>Retour </Link>{" "}
                  </button>
                </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddLocalAdministrator;