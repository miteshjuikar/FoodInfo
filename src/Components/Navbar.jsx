import React from 'react'
import style from './Navbar.module.css'
import { NavLink, useNavigate } from 'react-router-dom';

import { TiHomeOutline } from "react-icons/ti";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from '../main';


export default function Navbar() {

    const navigate = useNavigate();
    const [ userL ] = React.useContext(UserContext);


    const activeStyle = {
        fontWeight: "bold",
        backgroundColor: "rgb(245, 245, 248)"
      }
    function handleLogout(){
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.

        }).catch((error) => {
            alert(error)
        });

    }
  return (
    <>
    <nav className={style.navbar1}>
        <ul>
            <li className={style.list}>
                <NavLink to='/' style={({isActive}) => isActive ? activeStyle : null } > 
                    <TiHomeOutline className={style.icon} />
                    <span className={style.nav_item} >Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/recipes' style={({isActive}) => isActive ? activeStyle : null } > 
                    <IoFastFoodOutline className={style.icon} />
                    <span className={style.nav_item} >Recipe List</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/searchAd' style={({isActive}) => isActive ? activeStyle : null } > 
                    <IoSearch className={style.icon} />
                    <span className={style.nav_item} >Advance Search</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/cart' style={({isActive}) => isActive ? activeStyle : null } > 
                    <MdOutlineShoppingCart  className={style.icon} />
                    <span className={style.nav_item} >Cart</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/about' style={({isActive}) => isActive ? activeStyle : null } > 
                    <MdOutlinePeopleAlt  className={style.icon} />
                    <span className={style.nav_item} >About</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/logIn"
                    onClick={!userL ? ()=> navigate('/logIn') : {handleLogout} } className={style.logout} 
                > 
                    <IoIosLogOut className={style.icon} />
                    <span className={style.nav_item} >{!userL ? "logIn" : "logOut" }</span>
                </NavLink>
                
            </li>
         
        </ul>
       </nav>
    </>
  )
}
