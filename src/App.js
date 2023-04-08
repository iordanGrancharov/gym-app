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
import ProtectedRouteGuest from "./components/ProtectedRoute/ProtectedRouteGuest";
import ProtectedRouteUsers from "./components/ProtectedRoute/PotecredRouteUsers";
import Logout from "./components/Logout/Logout";
import NotFound from "./components/Error/NotFound";
import Error from "./components/Error/Error";
import WorkoutsCatalog from "./components/WorkoutsCatalog/WorkoutsCatalog";
import WorkoutDetails from "./components/WorkoutDetails/WorkoutDetails";
import NutritionCatalog from "./components/NutritionCatalog/NutritionCatalog";
import NutritionDetails from "./components/NutritionDetails/NutritionDetails";
import Profile from "./components/Profile/Profile";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import About from "./components/About/About";

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
                    <ProtectedRouteGuest>
                      <CreateWorkout mode="Create" />
                    </ProtectedRouteGuest>
                  }
                />
                {/* check */}
                <Route
                  path="/workout/update"
                  element={
                    <ProtectedRouteGuest>
                      <CreateWorkout mode="Update" />
                    </ProtectedRouteGuest>
                  }
                />
                {/* PROTECTED ROUTES GUEST ONLY */}
                <Route
                  path="/login"
                  element={
                    <ProtectedRouteUsers>
                      <Login />
                    </ProtectedRouteUsers>
                  }
                />
                <Route
                  path="/register"
                  element={
                    <ProtectedRouteUsers>
                      <Register />
                    </ProtectedRouteUsers>
                  }
                />
                <Route
                  path="/logout"
                  element={
                    <ProtectedRouteGuest>
                      <Logout />
                    </ProtectedRouteGuest>
                  }
                />
                <Route
                  path="/details/add/:exerciseId"
                  element={
                    <ProtectedRouteGuest>
                      <ExerciseDetails mode="Add" />
                    </ProtectedRouteGuest>
                  }
                />
                <Route
                  path="/details/edit/:exerciseId/:index"
                  element={
                    <ProtectedRouteGuest>
                      <ExerciseDetails mode="Edit" />
                    </ProtectedRouteGuest>
                  }
                />
                <Route
                  path="/workouts/details/:workoutId"
                  element={<WorkoutDetails />}
                />
                <Route
                  path="/:workoutId/details/exercise/:exerciseId"
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
                    <ProtectedRouteGuest>
                      <Profile />
                    </ProtectedRouteGuest>
                  }
                />
                <Route
                  path="/profile/information/:userId"
                  element={
                    <ProtectedRouteGuest>
                      <UpdateProfile />
                    </ProtectedRouteGuest>
                  }
                />
                <Route path="/about" element={<About />} />
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
