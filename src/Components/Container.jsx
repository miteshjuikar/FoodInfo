import React, { useContext, useEffect, useState } from 'react'
import style from './Container.module.css'
import { Link } from 'react-router-dom'
import { UserContext, UserLogInData } from '../main';
import { v4 as uuidv4 } from 'uuid';

import { getFirestore,onSnapshot, collection, query, where, getDocs, doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { db } from './firebase';

export default function Container({fooditem}) {
  const [flag, setFlag] = React.useState(false);
  const [ logInData, setLogInData] = React.useContext(UserLogInData);
  const [ recipesListData, setRecipesListData ] = React.useState();

const [userL, setUserL] = useContext(UserContext);

  const recipeData = fooditem.recipe

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

  // Fetching previous data

  const userCartData = collection(db, "cart")

  React.useEffect(() => {
    const getContacts = async () => {
      try {
        onSnapshot(userCartData, (snapshot) => {
          const userData = snapshot.docs.map((doc) => {
            return {
              id: userL,
              ...doc.data(),
            };
          });
          userData.map((data) => {
            if(data.id == userL){
              setRecipesListData(data)
              setLogInData(data.logInData)
            }
          })
        });
      } catch (error) {
        alert(error);
      }
    };
    getContacts();
  }, []);


  //code to add data to user card

  useEffect(() => {
    const addData = async() =>{
      if(logInData.length>0){
        const newData = {
          id: userL,
          ...{logInData}
        }
        try{
          const userData = doc(userCartData, newData.id);
          await setDoc( userData, newData );
        }
        catch(err){
          alert(err);
        }
      }
    }
    addData();
  },[logInData])

// Checking data in orevious to disable save button
useEffect(() => {
  if (logInData.includes(fooditem._links.self.href)){
    setFlag(true)
  }
  else{
    setFlag(false)
  }
},[logInData])



// Handle save functionality
const newData = fooditem._links.self.href
  const handleSave = () => {
    
    if(userL){    
      if (logInData.includes(newData)){
      alert("Recipe already saveed");
      }
      else{
        const newDataArray = [...logInData, newData];
        setLogInData(newDataArray);
      }
    }
    else{
      alert("To save recipe, Please Log In first")
    }
  } 

// Call function to delete array element
const removeSavedRecipe = () => {
  deleteElementFromArray(userL, "logInData", newData);
};

// Delete element from array
function deleteElementFromArray(documentId, arrayFieldName, valueToDelete) {
  const firestore = getFirestore();
  const docRef = doc(getFirestore(), "cart", documentId);

  getDoc(docRef)
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        let cartData = docSnapshot.data();

        if (Array.isArray(cartData[arrayFieldName])) {
          const newArray = cartData[arrayFieldName].filter(item => item !== valueToDelete);
          setLogInData(newArray);
          return updateDoc(docRef, { [arrayFieldName]: newArray });
        } else {
          alert.error('The specified field is not an array.');
        }
      } else {
        console.error("Document does not exist");
      }
    })
    .catch((error) => {
      console.error("Error updating array:", error);
    });
}

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
        <button className={`btn btn-outline-secondary ${style.buttonStyle}`} onClick={!flag ? handleSave : removeSavedRecipe}>{!flag ? "Save" : "Remove"} </button>
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



