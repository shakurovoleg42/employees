// import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
import Users from "./Users";
import AdminPanel from "./AdminPanel";


function DashoardLayout() {
 return (
  <div className="App">
   <Navbar/>
   <AdminPanel/>
   <Users/>
  </div>
 );
}

export default DashoardLayout;
