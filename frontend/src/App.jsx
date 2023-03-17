import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Categoria from "./views/categoria";
import Producto from "./views/producto";
import About from "./views/about";

import Home from "./views/home";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound/NotFound";

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria" element={<Categoria />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
