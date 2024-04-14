import Topbar from "./component/topbar/Topbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./page/home/Home";
import About from "./page/about/About";
import Scroll from "./component/sroll/Scroll";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Scroll />
      <Footer />
    </Router>
  );
}

export default App;
