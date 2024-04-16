import React, { useEffect } from 'react'
import RecipesList from './RecipesList';
import { RecipeData } from "../api";
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import Spinner from './Spinner';

export default function AdvanceSearchId() { 
    const [ data, setData ] = useState();
    const [ searchFil, setSearchFil ] = useState();
    const [ loading, setLoading ] = useState(false);
    const location = useParams();

    useEffect(() => {
      setSearchFil(location.id)
    },[location])

    React.useEffect(() => {
        async function resData(){
          setLoading(false)
          const res = await RecipeData(searchFil);
          setData(res.hits);
          setLoading(true)
        }
        resData();
    },[searchFil])

  return (
    <>
    <div className='recipesPage'>
      {/* <HoriNavbar msg={msg} setMsg={setMsg} handleSearch={handleSearch} onSearch={onSearch} /> */}
      <div className={`form-control`} >
        <h4>Advance Search</h4>
      </div>
      { !loading ? <Spinner /> : <RecipesList recipesListData={data} /> }  
    </div>
    </>
  )
}
