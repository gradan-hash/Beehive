import React, {useRef, useState, useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll' ;
import Logo from './honeypotlogo.png'
import './navbar.css';

function Navbar() {

     const navRef = useRef()

     const shownavbar = ()=>{

        navRef.current.classList.toggle('responsive_nav')
     }

     //we will toggle the responsive_nav once class is invoked.

     const [navbarcolor, setNavbarcolor] = useState('#ffc72b')

     useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);


      const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 0) {
          setNavbarcolor("#f1b409");
        } else {
          setNavbarcolor("#ffc72b");
        }
      };
     


  return (

    <>
    

        <header style={{ backgroundColor: navbarcolor }}>

          <div className="flip-box">
           <div class="flip-box-inner">
            
            <div class="flip-box-front">

                <img src ={Logo} className ='logo' alt ='HoneyPot'/>
            </div>

            <div class="flip-box-back">
                <p>Delivering the best quality hives.</p>
            </div>

           </div>
          </div>


            <div className="header">

           
              <nav ref ={navRef}>

                  <Link to='details-upload' spy={true} smooth={true} offset={-100} duration={500}><p classname ='p-details'>Upload details of a Beehive.</p></Link>


                  {/* <Link to='about' spy={true} smooth={true} offset={-130} duration={500}>Work Experience</Link>
                  <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>Contact</Link> */}
                


                  {/* //smaller screens will close the navbar with this */}
                  <button  className='nav-btn nav-close-btn' onClick={shownavbar}>
                      <FaTimes/>
                  </button>



                </nav>
              </div>



                {/* //smaller screens will open the navigation bar with this */}

                {/* will be the default one on smaller screens */}
            <button className='nav-btn' onClick={shownavbar}>
                <FaBars/>
            </button>



        </header>
    





    



    </>


  )
}

export default Navbar