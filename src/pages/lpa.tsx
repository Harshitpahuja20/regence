import React from 'react'; // Add this line

import Navbar from "../Components/Navbar/Page"
import LpaComponent from "../Components/LpaComponent/Page"
import Footer from "../Components/Footer/Page"
import '../app/globals.css'

export default function lpa() {
    return(
        <>
        <Navbar/>
        <LpaComponent/>
        <Footer/>
            </>
    )
}
