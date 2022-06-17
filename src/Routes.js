import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import TypographyPage from "./pages/Typography";

export default function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/typography" element={<TypographyPage />} />
    </Routes>
  );
}
