import React, { useState } from 'react'
import { useParams, Link, useLocation, useSearchParams } from 'react-router-dom'
import { SingleRecipeData } from "../api";
import Container from './Container'; 
import Spinner from './Spinner';
export default function RecipeDetails() {
  const [data, setData] = useSearchParams();
  const singleDataURL = `${data.get("name")}&app_id=5356d460&app_key=000e634ee221f3cc3fe235e57022402b`
  const [ arrData, setArrData ] = useState();
console.log(singleDataURL);
React.useEffect(() => {
  async function resData(){
    const res = await fetch(singleDataURL);
    const dataURL = await res.json();
    setArrData(dataURL)
  }
  resData();
},[])

  return (
    <>
    <Link to='..'>
       <button>Back</button>
    </Link>
    {arrData ? <Container fooditem={arrData}/> : <Spinner />}
    
    </>
  )
}
