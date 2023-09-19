import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./view/Homepage";
// import { DashBoard } from "./view/CMS";
import Sobre from "./view/Sobre";
import Musicas from "./view/Musicas";
import Galeria from "./view/Galeria";
import { AnimatePresence } from "framer-motion";

function Router() {

  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/cms" element={<DashBoard />} /> */}
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/musicas" element={<Musicas />} />
          <Route path="*" element={<h1>path = Not Found</h1>} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default Router;
