import React from 'react'; // Add this line

import Navbar from "../Components/Navbar/Page"
import Donor from "../Components/Donor/Page"
import Footer from "../Components/Footer/Page"
import '../app/globals.css'

export default function DonorComponent() {
    return(
        <>
        <Navbar/>
        <Donor/>
        <Footer/>
            </>
    )
}
