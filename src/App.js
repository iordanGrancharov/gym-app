import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import CreateWorkout from "./components/CreateWorkout/CreateWorkout";

import { Routes, Route } from "react-router-dom";
import ExerciseDetails from "./components/ExerciseDetails/ExerciseDetails";

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
        <Route path="/details/:exerciseId" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
