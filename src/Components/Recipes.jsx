import React from 'react'
import RecipesList from './RecipesList';
import { RecipeData, SingleRecipeData } from "../api";
import HoriNavbar from './HoriNavbar';
import { useState } from 'react';
import Spinner from './Spinner';
import style from './RecipesList.module.css'

export default function Recipes() { 
    const [ data, setData ] = useState();
    const [ searchFil, setSearchFil ] = useState("q=all");
    const [ loading, setLoading ] = useState(false);
    const [ msg, setMsg ] = useState();
    const [ nextLink, setNextLink ] = useState(null);

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
          setNextLink(res._links.next.href);
          setData(res.hits)
          setLoading(true)
        }
        resData();
    },[searchFil])

    async function resData(){
      setLoading(false)
      const res = await SingleRecipeData(nextLink);
      setData(res.hits)
      setLoading(true)
    }

    const loadNextData = () => {   
        resData();
    }

  return (
    <>
    <div className='recipesPage'>
      <HoriNavbar msg={msg} setMsg={setMsg} handleSearch={handleSearch} handleKeyPress={handleKeyPress} onSearch={onSearch} />
      { !loading ? <Spinner /> : <RecipesList recipesListData={data} nextLink={nextLink} /> }  
      <div className={style.NextBtn}>
        <button className="btn btn-light" onClick={loadNextData}>
           Load More
        </button>
      </div>
    </div>
    </>
  )
}
