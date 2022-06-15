import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";

export default function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
