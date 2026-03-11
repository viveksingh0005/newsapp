import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";

import Home from "./pages/Home";
import Cricket from "./pages/Cricket";
import Trading from "./pages/Trading";
import Entertainment from "./pages/Entertainment";
import Tech from "./pages/Tech";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/entertainment" element={<Entertainment />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;