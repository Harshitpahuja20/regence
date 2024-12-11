import React from 'react'; 

import Navbar from "../Components/Navbar/Page"
import Question from '../Components/Questions/Page'
import Footer from "../Components/Footer/Page"
import '../app/globals.css'
import Will from "../Components/WillPage/Page"

export default function willcomponent() {
    return(
        <>
        <Navbar/>
        <Will/>
        <Footer/>
            </>
    )
}
