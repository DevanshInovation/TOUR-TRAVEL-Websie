import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Service from "./Components/Service";
import BestPrice from "./Components/BestPrice";
import Recommendation from "./Components/Recommendation";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import InquiryForm from "./Components/InquiryForm";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/bestprice" element={<BestPrice />} />
        <Route path="/places" element={<Recommendation />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/inquire" element={<InquiryForm/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
