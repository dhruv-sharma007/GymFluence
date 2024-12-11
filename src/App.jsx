import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Features from "./pages/features";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";
import DietPlan from "./pages/diet";
import WorkoutPlan from "./pages/workout";
import BlogPage from "./pages/blog";
import GetStarted from "./pages/getstart";
import Login from "./pages/login";
import { Toaster } from "react-hot-toast";
import NotFound from "./Components/Notfound.jsx";

const App = () => {
  return (
    <div>
      <div><Toaster/></div>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/features" element={<Features />} />
        <Route path="/home/diet" element={<DietPlan/>} />
        <Route path="/home/workout" element={<WorkoutPlan/>} />
        <Route path="/home/blog" element={<BlogPage/>} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <div id="contact-us">
        <Footer />
      </div>
    </div>
  );
};

export default App;
