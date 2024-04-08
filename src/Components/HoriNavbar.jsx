import React from 'react'
import style from './HoriNavbar.module.css'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";


export default function HoriNavbar( { msg, setMsg, handleSearch,onSearch } ) {  
  return (
    <>
    <div className={style.horiNav}>
        <h2>Recipes</h2>
        <div>
          <input 
              className={style.searchText}
              onChange={handleSearch}
              placeholder='Search Here'
              value={msg}
          />
          <IoSearch className={style.searchIcon} onClick={onSearch} />
        </div> 
    </div>
    </>
  )
}
