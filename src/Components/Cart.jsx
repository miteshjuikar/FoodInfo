import React, { useState } from 'react'

import { getDocs, setDoc } from 'firebase/firestore';
import {doc, collection, onSnapshot } from "firebase/firestore";
import { db } from './firebase';
import { UserContext } from '../main';


export default function Cart() {
  const [ recipesListData, setRecipesListData ] = useState();

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
              setRecipesListData(data)
            }
          })
        });
      } catch (error) {
        alert(error);
      }
    };
     
    getContacts();
  }, []);

  console.log(recipesListData);

  return (
    <>
     {/* {recipesListData.map((fooditem, i) => (
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
      ))} */}
    
    </>
  )
}
