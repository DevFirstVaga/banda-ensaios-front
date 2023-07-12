import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./view/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cms" element={<h1>path = CMS</h1>} />
        <Route path="*" element={<h1>path = Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;