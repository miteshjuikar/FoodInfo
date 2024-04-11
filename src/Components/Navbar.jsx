import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom';

import { TiHomeOutline } from "react-icons/ti";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

export default function Navbar() {
  return (
    <>
    <nav className={style.navbar1}>
        <ul>
            <li className={style.list}>
                <Link to='/'> 
                    <TiHomeOutline className={style.icon} />
                    <span className={style.nav_item} >Home</span>
                </Link>
            </li>
            <li>
                <Link to='/recipes'> 
                    <IoFastFoodOutline className={style.icon} />
                    <span className={style.nav_item} >Recipe List</span>
                </Link>
            </li>
            <li>
                <Link to='/searchAd'> 
                    <IoSearch className={style.icon} />
                    <span className={style.nav_item} >Advance Search</span>
                </Link>
            </li>
            <li>
                <Link to='/cart'> 
                    <MdOutlineShoppingCart  className={style.icon} />
                    <span className={style.nav_item} >Cart</span>
                </Link>
            </li>
            <li>
                <Link to='/about'> 
                    <MdOutlinePeopleAlt  className={style.icon} />
                    <span className={style.nav_item} >About</span>
                </Link>
            </li>
            <li>
                <Link to='/' className={style.logout} > 
                    <IoIosLogOut className={style.icon} />
                    <span className={style.nav_item} >Log Out</span>
                </Link>
                
            </li>
         
        </ul>
       </nav>
    </>
  )
}
