import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/about" element={<About/>}  />
        <Route path="/contact" element={<Contact/>}  />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
