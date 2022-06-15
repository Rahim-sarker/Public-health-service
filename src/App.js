import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hospitals from "./components/Home/Hospitals/Hospitals";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register/Register";
import Appoinment from "./components/Appointment/Appoinment";
import HospitalDetail from "./components/Appointment/HospitalDetail/HospitalDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/appoin/:hosId" element={<HospitalDetail />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/appointment" element={<Appoinment />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
