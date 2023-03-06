import "./App.css";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  const user = true;
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
