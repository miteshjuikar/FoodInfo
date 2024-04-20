import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './Home.module.css'
import { UserContext } from './main';


export default function Home() {
  const navigate = useNavigate();
  const [userL] = React.useContext(UserContext);

  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var verticalNavbarClass = 'vertical-navbar';
    var horizontalNavbarClass = 'horizontal-navbar';
    if (window.scrollY > 500) { // Change 50 to the scroll position where you want to switch
      console.log("first");
      // navbar.classList.remove(verticalNavbarClass);
      // navbar.classList.add(horizontalNavbarClass);
    } else {
      console.log("second");
      // navbar.classList.remove(horizontalNavbarClass);
      // navbar.classList.add(verticalNavbarClass);
    }
  });

  
  return (
    <>
    <div className={style.homePage}>
        <h1>Register with us</h1>
        <div className='buttonDiv'>
          <button className={`btn btn-outline-secondary ${style.buttonStyle}`} onClick={() => {navigate('/signUp')}} >Sign-Up</button>
         {!userL && <button className={`btn btn-outline-secondary ${style.buttonStyle}`} onClick={() => {navigate('/logIn')}} >Log In</button>}
        </div>  
    </div>
    <div><h1>About</h1></div>
    <div><h1>About</h1></div>
    <div><h1>About</h1></div>
    <div><h1>About</h1></div>
    <div><h1>About</h1></div>
    <div><h1>About</h1></div>
    <div><h1>About</h1></div>
    <div><h1>About</h1></div>
    <div><h1>About</h1></div>
    <div><h1>About</h1></div>
    <div><h1>About</h1></div>
    </>
  )
}
