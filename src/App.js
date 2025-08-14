// import React from 'react'
// import { BrowserRouter } from 'react-router-dom';
// import ResponsiveNavbar from './Navbar/Navbar';

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <ResponsiveNavbar/>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveNavbar from "./Navbar/Navbar";
import Home from "./HeroSection/HeroSection";
import AboutUs from "./AboutUs/About";
import ContactForm from "./Contact/Contact";
import Footer from "./Footer/Footer";

// function Home() { return <h1>Home Page</h1>; }
// function About() { return <h1>About Page</h1>; }
function Services() { return <h1>Services Page</h1>; }
function Portfolio() { return <h1>Portfolio Page</h1>; }
function Contact() { return <h1>Contact Page</h1>; }
function Login() { return <h1>Login Page</h1>; }

export default function App() {
  return (
    <Router>
      <ResponsiveNavbar 
        styles={{}} // pass your styles object
        toggleMobileMenu={() => {}}
        getHamburgerLineStyle={() => {}}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>

    </Router>
  );
}

