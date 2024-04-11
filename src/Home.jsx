import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './Home.module.css'

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
    <div className={style.homePage}>
        <h1>Register with us</h1>
        <button className={`btn btn-outline-secondary ${style.buttonStyle}`} onClick={() => {navigate('/signUp')}} >Sign-Up</button>
    </div>
    </>
  )
}
