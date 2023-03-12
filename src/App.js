import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
import Footer from "./components/footer/Footer";

function App() {
  const user = false;
  const hasUser = user ? true : false;
  return (
    <>
      <Navbar hasUser={hasUser} />
      <Home />
      <Footer />
    </>
  );
}

export default App;
