import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './Home.module.css'
import { UserContext } from './main';


export default function Home() {
  const navigate = useNavigate();
  const [userL] = React.useContext(UserContext);
  
  return (
    <>
    <div className={style.homePage}>
        <h1>Register with us</h1>
        <div className='buttonDiv'>
          <button className={`btn btn-outline-secondary ${style.buttonStyle}`} onClick={() => {navigate('/signUp')}} >Sign-Up</button>
         {userL==null && <button className={`btn btn-outline-secondary ${style.buttonStyle}`} onClick={() => {navigate('/logIn')}} >Log In</button>}
        </div>  
    </div>
    </>
  )
}
