import { Routes, Route } from "react-router-dom";
import { ExerciseFormProvider } from "./contexts/ExerciseFormContext";
import { AuthProvider } from "./contexts/AuthContext";
import { WorkoutProvider } from "./contexts/WorkoutContext";

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
import Error from "./components/Error/Error";
import WorkoutsCatalog from "./components/WorkoutsCatalog/WorkoutsCatalog";
import WorkoutDetails from "./components/WorkoutDetails/WorkoutDetails";
import NutritionCatalog from "./components/NutritionCatalog/NutritionCatalog";
import NutritionDetails from "./components/NutritionDetails/NutritionDetails";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      <AuthProvider>
        <ExerciseFormProvider>
          <WorkoutProvider>
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route
                  path="/workout/create"
                  element={
                    <ProtectedRoute>
                      <CreateWorkout mode="Create" />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/workout/update"
                  element={
                    <ProtectedRoute>
                      <CreateWorkout mode="Update" />
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
                  path="/workouts/details/:workoutId"
                  element={<WorkoutDetails />}
                />
                <Route
                  path="/details/exercise/:exerciseId"
                  element={<ExerciseDetails mode="Preview" />}
                />
                <Route path="/workouts" element={<WorkoutsCatalog />} />
                <Route path="/nutrition" element={<NutritionCatalog />} />
                <Route
                  path="/nutrition/details/:nutritionId"
                  element={<NutritionDetails />}
                />
                <Route
                  path="/profile/:userId"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </WorkoutProvider>
        </ExerciseFormProvider>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
