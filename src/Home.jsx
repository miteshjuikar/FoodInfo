import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './Home.module.css'
import { UserContext } from './main';
import About from './Components/About';


export default function Home() {
  const navigate = useNavigate();
  const [userL] = React.useContext(UserContext);

  const handleSectionClick = () => {
    // Smooth scroll to the clicked section
    document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
    <div className={style.homePage}>
        <h1 >Register with us</h1>
        <div className='buttonDiv'>
          <button className={`btn btn-outline-secondary ${style.buttonStyle}`} onClick={() => {navigate('/signUp')}} >Sign-Up</button>
         {!userL && <button className={`btn btn-outline-secondary ${style.buttonStyle}`} onClick={() => {navigate('/logIn')}} >Log In</button>}
        </div> 
        <button className={`btn btn-outline-secondary ${style.aboutButton}`} onClick={handleSectionClick} >About Us</button>
    </div>

    <div id="about" className={style.aboutDiv} >
      <About />
    </div>
    </>
  )
}
