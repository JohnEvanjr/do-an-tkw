import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/home/Home";
import About from "./page/about/About";
import Scroll from "./component/sroll/Scroll";
import Footer from "./component/footer/Footer";
import Topbar from "./component/topbar/Topbar";
import Login from "./page/login/Login";
import Register from "./page/Register/Register";
import Health from "./page/health/Health";
import Workout from "./page/workout/Workout";
import Blog from "./page/blog/Blog";
import Shop from "./page/shop/shop";
import User from "./page/user/User";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn && <Topbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Home /> : <Navigate to="/login" />
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {isLoggedIn && (
          <>
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/health" element={<Health />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
      <Scroll />
      {isLoggedIn && <Footer />}
    </Router>
  );
}

export default App;
