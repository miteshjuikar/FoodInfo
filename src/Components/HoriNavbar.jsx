import React from 'react'
import style from './HoriNavbar.module.css'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";


export default function HoriNavbar( { msg, setMsg, handleSearch,onSearch } ) { 

  return (
    <>
    <div className={style.horiNav}>
      <div className={`form-control ${style.serchName}`} >
        <h4>Recipes</h4>
      </div>
        <div className={style.horiButton}>
          <Link to='/logIn'>
              <button className="btn btn-outline-secondary" type="button" id="button-addon2">LogIn</button>
          </Link>
          <div>
          <div className="input-group mb-3">
              <input type="text" 
                  className="form-control" 
                  placeholder="Search Recipe" 
                  aria-label="Search Recipe"      
                  aria-describedby="button-addon2" 
                  onChange={handleSearch}
                  value={msg}/>
              <button className="btn btn-outline-secondary"
                      type="button" 
                      id="button-addon2" 
                      onClick={onSearch}
              >
                <IoSearch className={style.searchIcon} onClick={onSearch} />
              </button>
          </div>
          </div>
        </div> 
    </div>
    </>
  )
}
