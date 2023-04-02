import { Routes, Route } from "react-router-dom";
import { ExerciseFormProvider } from "./contexts/ExerciseFormContext";
import { AuthProvider } from "./contexts/AuthContext";

import Navbar from "./components/Navigation/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import CreateWorkout from "./components/CreateWorkout/CreateWorkout";
import ExerciseDetails from "./components/ExerciseDetails/ExerciseDetails";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Logout from "./components/Logout/Logout";
import NotFound from "./components/Error/NotFound";

function App() {
  return (
    <>
      <AuthProvider>
        <ExerciseFormProvider>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
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
              <Route path="/logout" element={<Logout />} />
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
              <Route
                path="/error"
                element={
                  <ProtectedRoute>
                    <Error />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ExerciseFormProvider>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
