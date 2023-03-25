import { Routes, Route } from "react-router-dom";
import { ExerciseFormProvider } from "./contexts/ExerciseFormContext";

import Navbar from "./components/Navigation/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import CreateWorkout from "./components/CreateWorkout/CreateWorkout";
import ExerciseDetails from "./components/ExerciseDetails/ExerciseDetails";

function App() {
  const user = false;
  const hasUser = user ? true : false;

  return (
    <>
      <Navbar hasUser={hasUser} />
      <ExerciseFormProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateWorkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/details/add/:exerciseId"
            element={<ExerciseDetails mode="Add" />}
          />
          <Route
            path="/details/edit/:exerciseId/:index"
            element={<ExerciseDetails mode="Edit" />}
          />
        </Routes>
      </ExerciseFormProvider>
      <Footer />
    </>
  );
}

export default App;
