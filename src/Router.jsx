import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./view/Homepage";
import { DashBoard } from "./view/CMS";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cms" element={<DashBoard />} />
        <Route path="*" element={<h1>path = Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
