import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./home"
import AboutUs from './aboutUs';
import Activity from './activity';
import Header from '../components/header';
import Footer from '../components/footer';
import Portfolio from './Portfolio';
import Hook from '../components/Hook';
import ContactUs from './ContactUs';

const Index = () => {
  return (
    <Router>
        <header>
            <Header/>
        </header>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/aboutUs' element={<AboutUs/>}/>
            <Route path='/activity' element={<Activity/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/hook' element={<Hook/>}/>
            <Route path='/contactUs' element={<ContactUs/>}/>
        </Routes>
        <footer>
            <Footer/>
        </footer>
    </Router>
  )
}

export default Index
