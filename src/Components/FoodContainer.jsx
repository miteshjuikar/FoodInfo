import React from 'react'
import style from './FoodContainer.module.css'
import { Link } from 'react-router-dom'

export default function FoodContainer({foodCardData}) {
  return (
    <div className={style.foodContainer}>
      
        {foodCardData.map((fooditem, i) => (
            <div className={style.imageSection} key={i}>
            <div className={style.imageSecSection}>
              <Link to={`/recipes/${fooditem.recipe.label}`} className={style.imgLabel}   >
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
