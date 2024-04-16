import React, { useState } from 'react'
import style from './RecipesList.module.css'
import { getDocs, setDoc } from 'firebase/firestore';
import {doc, collection, onSnapshot } from "firebase/firestore";
import { db } from './firebase';
import { UserContext } from '../main';
import { Link } from 'react-router-dom';
import { RecipeData } from '../api';


export default function Cart() {
  const [ recipesListData, setRecipesListData ] = useState();
  const [ savedURL, setSavedURL ] = useState();
  const [ userL ] = React.useContext(UserContext);
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
              setSavedURL(data)
            }
          })
        });
      } catch (error) {
        alert(error);
      }
    };
     
    getContacts();
  }, []);

  React.useEffect(() => {
    async function resData(){
      if(savedURL){
        const responses = await Promise.all(savedURL.logInData.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => response.text()));
        setRecipesListData(data)
        
        // const res = await fetch(savedURL.logInData);
      }
    }
    resData();
  },[savedURL])

  function parseStringObjects(stringObjects) {
    try {
      return stringObjects.map(stringObj => JSON.parse(stringObj));
    } catch (error) {
      console.error('Error parsing string objects:', error);
      return [];
    }
  }
  
  let recipeData;
if(recipesListData){
  recipeData = parseStringObjects(recipesListData);
  }
 
  
  return (
    <>
     { recipeData && recipeData.map((fooditem, i) => (
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
    
    </>
  )
}
