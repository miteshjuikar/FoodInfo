import React from 'react'
import FoodContainer from './FoodContainer';
import { RecipeData } from "../api";
import HoriNavbar from './HoriNavbar';
import { useState } from 'react';

export default function Recipes() {
    const [ data, setData ] = useState();
    const [ searchFil, setSearchFil ] = useState("all");
    
    const [ msg, setMsg ] = useState();
    function handleSearch(e){
      setMsg(e.target.value);
    }
    function onSearch(){
      if(msg){
        setSearchFil(msg)
      }
      else{
        setSearchFil("all")
      }
    }

    React.useEffect(() => {
        async function resData(){
            const res = await RecipeData(searchFil);
            setData(res.hits);
        }
        resData();
    },[searchFil])

  return (
    <>
    <div className='recipesPage'>
      <HoriNavbar msg={msg} setMsg={setMsg} handleSearch={handleSearch} onSearch={onSearch} />
      { data && <FoodContainer foodCardData={data} /> }
    </div>
    </>
  )
}
