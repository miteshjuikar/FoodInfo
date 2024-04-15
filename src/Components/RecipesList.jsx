import React from 'react'
import style from './RecipesList.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Container from './Container';


export default function RecipesList({recipesListData}) {

  const navigate = useNavigate();


  function handleRecipeSerach(id) {
    // if(i>=0 && i<=20){
    //   return(<Container fooditem={recipesListData[i]} />)
    // }
   navigate(`/recipeDetail?name=${id}`)
  }
 
  return (
    <div className={style.foodContainer}>

        {recipesListData.map((fooditem, i) => (
            <div className={style.imageSection} key={i}>
            <div className={style.imageSecSection}>
              <Link to={`/recipeDetail?name=${fooditem._links.self.href}`} className={style.imgLabel} >
                <img src={fooditem.recipe.image} alt="Food Image" />
                <h1>{fooditem.recipe.label}</h1>
              </Link>
              
              <div className={style.para}>
                <p className={style.p1}>{Math.round(fooditem.recipe.calories)} CALORIES </p>
                <p className={style.p2}>{fooditem.recipe.ingredientLines.length} INGREDIENTS </p>
              </div>
            </div>
          </div>
        ))}

      <div className={style.NextBtn}>
        <button className="btn btn-light">
           Load More
        </button>
      </div>
    </div>
  )
}
