import React from 'react'
import style from './Container.module.css'
import { Link } from 'react-router-dom'

export default function Container({fooditem}) {
  const [flag, setFlag] = React.useState(false);
  const recipeData = fooditem.recipe
  console.log(recipeData);


  const digestList = recipeData.digest.map((data) => {
    return (
      <li key={data.tag}>
        {data.label}: {data.total}
      </li>
    );
  });
  const ingredientsList = recipeData.ingredientLines.map((data, i) => {
    return <li key={i}>{data}</li>;
  });
  const healthLabels = recipeData.healthLabels.map((data, i) => {
    return <p key={i}>{data}</p>;
  });
  const ingredients = recipeData.ingredients.map((data, i) => {
    return(
      <div className="recipeIngredients" key={i}>
        <h3>{data.text}</h3>
        <img src={data.image} />
      </div>
    )
  })

return (
<>
  <div className={style.recipeDetailMainDiv}>

  <div className="container">
  <div className="row">
    <div className={`col-10 ${style.col}`}>
      <div className={style.recipeimgLab} >
      <img className={style.recipeImg} src={recipeData.image} alt="Food Image" />
      <div>
        <h1>{recipeData.label}</h1>
        <p>See full recipe on:<Link to={recipeData.url}>Bon Appetit</Link>
        </p>
        <button className={`btn btn-outline-secondary ${style.buttonStyle}`}>Save </button>
      </div>
      </div>
    </div>

    

    <div className="col-5">
      <div>
        <h4><span>{recipeData.ingredientLines.length}</span> ingredients</h4>
        <hr/>
        <ul>{ingredientsList}</ul>
      </div>
    </div>

    <div className="col-5">
        <div >
        <h4>Nutrition</h4>
        <hr/>



<table className={`table ${style.tableStyle}`}>
  <tbody>
    <tr>
      <td>{recipeData.calories}</td>
      <td>{recipeData.co2EmissionsClass}</td>
      <td>{Math.round(recipeData.totalCO2Emissions)}</td>
    </tr>
    <tr>
      <th>calories</th>
      <th>co<sup>2</sup>className</th>
      <th>co<sup>2</sup>total</th>
    </tr>
  </tbody>
</table>

      </div>
    </div>

    <hr/>



  </div>
  </div>
</div>
</>
)
}



