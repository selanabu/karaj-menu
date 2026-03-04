import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Menu from "./pages/Menu.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}