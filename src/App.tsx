import { Routes, Route } from "react-router-dom";
import { Navbar1 } from "./Componets/Navbar";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { Store } from "./Pages/Store";
import { Confirm } from "./Pages/Confirm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SCSS/style.scss";
import { ShoppingCartProvider } from "./Componets/Context/ShoppingCartContext";
import { Footer } from "./Componets/Footer";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
