import HomeContent from "./Components/HomeContent";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import "./Components/Styles.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Remove BrowserRouter as Router import
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contacts/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeContent />} />
        </Routes>
        <Pricing/>
        <Contact/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
