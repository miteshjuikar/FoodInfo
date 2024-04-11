import React from 'react'
import style from './RecipesList.module.css'
import { useNavigate } from 'react-router-dom'

export default function RecipesList({recipesListData}) {

  const navigate = useNavigate();

  function handleRecipeSerach(id) {
    navigate(`/recipes/${id}`)
  }

  return (
    <div className={style.foodContainer}>
      
        {recipesListData.map((fooditem, i) => (
            <div className={style.imageSection} key={i}>
            <div className={style.imageSecSection}>
              <div className={style.imgLabel} onClick={()=> handleRecipeSerach(fooditem.recipe.label)}>
                <img src={fooditem.recipe.image} alt="Food Image" />
                <h1>{fooditem.recipe.label}</h1>
              </div>
              
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
