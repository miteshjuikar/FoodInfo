import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { RecipeData } from "../api";
import Container from './Container';

export default function RecipeDetails() {
    const param = useParams();
    const [ arrData, setArrData ] = useState();

    function fetchRecipeData(id){
        React.useEffect(() => {
            async function resData(){
                const res = await RecipeData("all");
                const data = res.hits
                for(let i=0; i<data.length; i++){
                    if(id == data[i].recipe.label){
                      setArrData(data[i])
                    }
                }
            }
            resData();
        },[])
    }
    fetchRecipeData(param.id);

  return (
    <>
    <Link to='..' relative='path'>
       <button>Back</button>
    </Link>
      {arrData && <Container fooditem={arrData}/>}
    </>
  )
}
