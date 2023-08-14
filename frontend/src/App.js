import { Routes, Route, useNavigate} from "react-router-dom";
import store from "./app/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Users from "./components/Users";
import AdminPanel from "./components/AdminPanel";
import DashboardLayout from "./components/DashboardLayout";
import { Provider } from "react-redux";

function App() {

 return (
  <Provider store={store}>
   <div className="App">
    {/* <DashboardLayout /> */}
    <Routes>
     <Route path="/" element={<SignUp />} /> 
     {/* <Route path="/admin-panel" element={<AdminPanel />} /> */}
     <Route path="/sign-in" element={<SignIn />} />
     <Route path="/dashboard-layout" element={<DashboardLayout />} /> 
     <Route path="/users" element={<Users />} />
    </Routes>
    {/* <ToastContainer /> */}
   </div>
  </Provider>
 );
}

export default App;
