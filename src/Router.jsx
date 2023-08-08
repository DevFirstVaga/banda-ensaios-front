import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./view/Homepage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/cms" element={<h1>path = CMS</h1>} />
        <Route path="*" element={<h1>path = Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;