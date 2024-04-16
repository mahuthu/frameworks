import Home from './Pages/Home';
import Digital from './Pages/Digital';
import React from 'react';
//import Login from "./Pages/Login";
//import Blog from "./Pages/Blog";
import Business from './Pages/Business';
import AboutUs from './Pages/AboutUs';
import Website from './Pages/Website1';
import Analytics from "./Pages/Analytics";
import Whatsapp from "./Pages/Whatsapp1";
import Chatbot from "./Pages/Chatbot1";
import Custom from "./Pages/Custom1";
import Model1 from "./Pages/Model1";
import Social from "./Pages/Social1";
import Training from "./Pages/Training1";
import Annotation from "./Pages/Annotation1";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/digital" element={<Digital/>} />
        <Route path="/business" element={<Business />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/website" element={<Website/>} />
        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/whatsapp" element={<Whatsapp/>} />
        <Route path="/chatbot" element={<Chatbot/>} />
        <Route path="/custom" element={<Custom/>} />
        <Route path="/model" element={<Model1/>} />
        <Route path="/social" element={<Social/>} />
        <Route path="/training" element={<Training/>} />
        <Route path="/annotation" element={<Annotation/>} />

        {/*<Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
};
export default App;

