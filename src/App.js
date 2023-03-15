import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import CreateWorkout from "./components/CreateWorkout/CreateWorkout";

import { Routes, Route } from "react-router-dom";

function App() {
  const user = true;
  const hasUser = user ? true : false;
  return (
    <>
      <Navbar hasUser={hasUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateWorkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
