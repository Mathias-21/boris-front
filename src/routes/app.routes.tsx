import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Member } from "../pages/Member";
import { Members } from "../pages/Members";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="members" element={<Members />} />
        <Route path="members/:id" element={<Member />} />
      </Routes>
    </BrowserRouter>
  );
}
