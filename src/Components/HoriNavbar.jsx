import React from 'react'
import style from './HoriNavbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { UserContext } from '../main';

export default function HoriNavbar( { msg, setMsg, handleSearch,handleKeyPress,onSearch } ) { 
  const [userL] = React.useContext(UserContext);
  const navigate = useNavigate();


  return (
    <>
    <div className={style.horiNav}>
      <div className={`form-control ${style.serchName}`} >
        <h4>Recipes</h4>
      </div>
        <div className={style.horiButton}>
          {!userL ? 
              <button className={`btn btn-outline-secondary ${style.logInButton}`} 
                      type="button"
                      id="button-addon2"
                      onClick={()=> navigate('/logIn')}
              >
                LogIn</button>
           : null}
          <div>
          <div className={`input-group mb-3 ${style.searchBoxMain}`}>
              <input type="text" 
                  className={`form-control  ${style.searchBox}`} 
                  placeholder="Search Recipe" 
                  aria-label="Search Recipe"      
                  aria-describedby="button-addon2" 
                  onChange={handleSearch}
                  onKeyPress={handleKeyPress}
                  value={msg}/>
              <button className="btn btn-outline-secondary"
                      type="search" 
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
