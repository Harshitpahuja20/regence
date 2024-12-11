import React from 'react'; // Add this line

import Navbar from "../Components/Navbar/Page"
import Legal from "../Components/Legalservices/Page"
import Footer from "../Components/Footer/Page"
import '../app/globals.css'

export default function legalComponent() {
    return(
        <>
        <Navbar/>
        <Legal/>
        <Footer/>
            </>
    )
}
