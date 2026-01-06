import { Routes, Route, Navigate } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";

export default function App() {
  return (
    <Routes>
      {/* HOME / SEARCH PAGE */}
      <Route path="/" element={<SearchPage />} />

      {/* PROPERTY DETAILS */}
      <Route path="/property/:id" element={<PropertyPage />} />

      {/* FALLBACK (SAFETY) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
