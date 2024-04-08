import React from 'react'

export default function Container({fooditem}) {
  return (
    <>
      <div>
          <div>
            <div >
              <img src={fooditem.recipe.image} alt="Food Image" />
              <h1>{fooditem.recipe.label}</h1>
            </div>
                
            <div>
              <p>{Math.round(fooditem.recipe.calories)} CALORIES </p>
              <p>{fooditem.recipe.ingredientLines.length} INGREDIENTS </p>
            </div>
          </div>
      </div>
    </>
  )
}



