import React from 'react'
import RecipesList from './RecipesList';
import { RecipeData } from "../api";
import HoriNavbar from './HoriNavbar';
import { useState } from 'react';
import Spinner from './Spinner';

export default function Recipes() { 
    const [ data, setData ] = useState();
    const [ searchFil, setSearchFil ] = useState("q=all");
    const [ loading, setLoading ] = useState(false);
    const [ msg, setMsg ] = useState();


    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        onSearch();
      }
    };

    function handleSearch(e){
      setMsg(e.target.value);
    }
    
    function onSearch(){
      if(msg){
        setSearchFil(`q=${msg}`)
      }
      else{
        setSearchFil("q=all")
      }
    }

    React.useEffect(() => {
        async function resData(){
          setLoading(false)
          const res = await RecipeData(searchFil);
          setData(res.hits)
          setLoading(true)
        }
        resData();
    },[searchFil])

  return (
    <>
    <div className='recipesPage'>
      <HoriNavbar msg={msg} setMsg={setMsg} handleSearch={handleSearch} handleKeyPress={handleKeyPress} onSearch={onSearch} />
      { !loading ? <Spinner /> : <RecipesList recipesListData={data} /> }  
    </div>
    </>
  )
}
