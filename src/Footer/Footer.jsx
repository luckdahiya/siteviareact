import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div id="footer">
        <h1>Visual Disclaimer</h1>
        <p>At sizzle we thrive...</p>
        </div>
        <div id="all">

        <div id="icons">
        <p>Follow us </p>
       
        <div id="if">
        <FaInstagram /> <br />
        <FaFacebook />
        </div>
        </div>
        <div id="down">
     <p id='contact'>  <br /> Contact Information
                
            Address: 395 Truco Heights, NS B6L 1x7 <br />

                Phone:(902)895-5466 <br />

                Email: Contact@sizzleandspice.ca  <br />
            </p>
                        
    <p id='opening'>        
             Opening Hours <br />
            Monday:11:00 AM-11:00 PM <br />
            Tuesday:11:00 AM-11:00 PM <br />
            Wednesday:11:00 AM-11:00 PM <br />
            Thursday:11:00 AM-11:00 PM <br />
            Friday:11:00 AM-11:00 PM <br />
            Saturday:11:00 AM-11:00 PM <br />
            Sunday:11:00 AM-11:00 PM <br />
    </p>
    </div>
    </div>
    </>
)
}

export default Footer