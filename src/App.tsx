import { Routes, Route } from "react-router-dom";
import { Navbar1 } from "./Componets/Navbar";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { Store } from "./Pages/Store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SCSS/style.scss";
import { ShoppingCartProvider } from "./Componets/Context/ShoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
