import React from "react";
import TaxApp from "./TaxApp";
import FilerForm from "./Components/FilerForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaxApp />} />

        <Route path="/FilerForm" element={<FilerForm />} />
      </Routes>
    </Router>
  );
}

export default App;
