import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Testimonials from './pages/testimonials/Testimonials';
import TestimonialsIndex from './pages/testimonials/TestimonialsIndex';
import TestimonialsEdit from './pages/testimonials/TestimonialsEdit';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoreIndex from './components/Store/StoreIndex';
import AboutMe from './components/About/AboutMe'
import Admin from './components/admin/Admin'
import Intake from './pages/Intake'
import Logout from './components/admin/logout/Logout';
import Account from './components/admin/account/Account';

import Newsletter from './pages/Newsletter';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Router>
        <Routes>
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/testimonialsindex" element={<TestimonialsIndex />} />
          <Route path="/testimonialsindex/update:id" element={<TestimonialsEdit />} />
          <Route path="/store" element={<StoreIndex />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/newsletter" element={<Newsletter />}/>
          <Route path="/admin" element={<Admin />}/> 
          <Route path="/intake" element={<Intake />} />
          <Route path='/admin/account' element={<Account />}/> 
          <Route path='/' element={<Home />} /> 
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App

