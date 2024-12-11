import React from 'react'; // Add this line

import Navbar from "../Components/Navbar/Page"
import LoginComponent from "../Components/LoginComponent/Page"
import Footer from "../Components/Footer/Page"
import '../app/globals.css'

export default function Login() {
    return(
        <>
        <Navbar/>
        <LoginComponent/>
        <Footer/>
            </>
    )
}
