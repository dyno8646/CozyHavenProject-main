import React from 'react'
import Home from './Home';
import About from './About';
import Discover from './Discover';
import Destination from './Destination';
import Team from './Team';
import Footer from './Footer';
import Navbar from './Navbar';

function HomePage() {
    return (
        <>
            <Navbar/>
            <Home />
            <About />
            <Discover />
            <Destination/>
            <Team />
            <Footer />
        </>
    )
}

export default HomePage