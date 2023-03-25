import { Routes, Route } from "react-router-dom";
import { ExerciseFormProvider } from "./contexts/ExerciseFormContext";

import Navbar from "./components/Navigation/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import CreateWorkout from "./components/CreateWorkout/CreateWorkout";
import ExerciseDetails from "./components/ExerciseDetails/ExerciseDetails";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const user = false;
  const hasUser = user ? true : false;

  return (
    <>
      <Navbar hasUser={hasUser} />
      <ExerciseFormProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreateWorkout />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/details/add/:exerciseId"
            element={
              <ProtectedRoute>
                <ExerciseDetails mode="Add" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/details/edit/:exerciseId/:index"
            element={
              <ProtectedRoute>
                <ExerciseDetails mode="Edit" />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ExerciseFormProvider>
      <Footer />
    </>
  );
}

export default App;
