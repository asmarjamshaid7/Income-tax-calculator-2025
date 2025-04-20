import React from "react";
import TaxApp from "./TaxApp";
import FilerForm from "./Components/FilerForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import emailjs from "@emailjs/browser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaxApp />} />

        <Route path="/FilerForm" element={<FilerForm />} />
      </Routes>
    </Router>
  );
  emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
}

export default App;
