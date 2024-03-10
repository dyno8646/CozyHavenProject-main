import React from 'react'
import Home from './Home'
import Navbar from './Navbar'
import Testimonial from './Testimonial'
import Filters from './Filters/Filters'
import Footer from '../HomePage/Footer'
import HotelsPage from '../Hotels/HotelsPage'
import About from '../HomePage/About'
import Destination from '../HomePage/Destination'

function UserDash() {
    return (
        <>  <Navbar />
            <Home />
            <Filters/>
            <About/>
            <Destination/>
            {/* <HotelsPage/> */}
            <Footer/>

        </>
    )
}

export default UserDash