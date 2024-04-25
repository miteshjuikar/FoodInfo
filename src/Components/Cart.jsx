import React, { useState } from 'react'
import style from './Cart.module.css'
import { getFirestore, collection, query, where, getDocs, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from './firebase';
import { UserContext } from '../main';
import { Link } from 'react-router-dom';
import { RecipeData } from '../api';


export default function Cart() {
  const [ recipesListData, setRecipesListData ] = useState();
  const [ savedURL, setSavedURL ] = useState();
  const [ userL ] = React.useContext(UserContext);

  const userCartData = collection(db, "cart")

  // const userL = "JyZixJGMSZVde28nCBzgHMoEvqT2"

  React.useEffect(() => {
    const getContacts = async () => {
      const usernameQuery = query(userCartData, where('id', '==', userL));
      getDocs(usernameQuery)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is the data of each document
          setSavedURL(doc.data());
        });
      })
      .catch((error) => {
        alert('Error getting documents: ', error);
      });
    };
    getContacts();
  }, [userL]);

  // Fetching data from multiple URLs which was saved in saveURL

  React.useEffect(() => {
    async function resData(){
      if(savedURL){
        const responses = await Promise.all(savedURL.logInData.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => response.text()));
        setRecipesListData(data)
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
// Fetched data, array is in string formate convert it to object by calling "parseStringObjects" function
let recipeData;
if(recipesListData){
  recipeData = parseStringObjects(recipesListData);
}


// Call function to delete array element
const removeSavedRecipe = (indexToRemove) => {
  deleteElementFromArray(userL, "logInData", indexToRemove);
};

// Delete element from array

function deleteElementFromArray(documentId, arrayFieldName, indexToDelete) {
  const firestore = getFirestore();
  const docRef = doc(getFirestore(), "cart", documentId);

    getDoc(docRef)
          .then((docSnapshot) => {
              if (docSnapshot.exists()) {
                  let cartData = docSnapshot.data();

                  if (Array.isArray(cartData[arrayFieldName])) {
                    const newArray = [...cartData[arrayFieldName]];
                    newArray.splice(indexToDelete, 1);
                    setSavedURL({ [arrayFieldName]: newArray });
                    return updateDoc(docRef, { [arrayFieldName]: newArray });
                  } else {
                    console.log('The specified field is not an array.');
                  }
              } else {
                  console.error("Document does not exist");
              }
        })
        .then(() => {
            console.log("Array updated successfully");
        })
        .catch((error) => {
            alert("Error updating array:", error);
        });
}









// //Removing URL from saveURL by passing index number of cart recipe
// const removeSavedRecipe = (indexToRemove) => {
//   setSavedURL(prevData => ({
//     ...prevData,
//     logInData: prevData.logInData.filter((_, index) => index !== indexToRemove)
//   }));
// };
  

// // update array
// function updatedInArray(){
//   if(userL){
//   const documentId = userL
//   const docRef = doc(getFirestore(), "cart", documentId);
//   getDoc(docRef)
//       .then((docSnapshot) => {
//           if (docSnapshot.exists()) {
//               let data = docSnapshot.data();

//   // Step 2: Update the Array
//   // For example, let's add a new element to the array
//               // data.logInData.push("new element"); 

//               // Step 3: Write the Updated Array to Firestore
//               return updateDoc(docRef, savedURL);             // saveURL is the updated array
//           } else {
//               console.error("Document does not exist");
//           }
//       })
//       .then(() => {
//           console.log("Array updated successfully");
//       })
//       .catch((error) => {
//           console.error("Error updating array:", error);
//       });
//     }
//   }


  
  return (
    <div className={style.cartBgColor}>
    <div className={style.pageContent}>
      <div className={style.allContent}>
      {recipeData && recipeData.map((fooditem, i) => ( 
        <div className={style.imageSection} key={i}>
          <img src={fooditem.recipe.images.SMALL.url} alt="Food Image" />
          <div className={style.Content}>   
          <div className={style.upperLink}>    
            <Link to={`/recipeDetail?name=${fooditem._links.self.href}`} >
            <h1>{fooditem.recipe.label}</h1>
            <div className={style.para}>
              <p className={style.p1}>{Math.round(fooditem.recipe.calories)} CALORIES </p>
              <p className={style.p2}>{fooditem.recipe.ingredientLines.length} INGREDIENTS </p>
            </div>
          </Link>
          </div>  
          <div className={style.recipeLink}>
            <div className={style.lowerLink}>
              <Link to={fooditem.recipe.url}>See full recipe on</Link>
            </div>
            <button className={`btn btn-outline-secondary`} onClick={() => removeSavedRecipe(i)}>UnSave </button>
          </div>
        </div>
        </div>
      ))}
      </div>       
     
      <div className={style.newDiv}>
        {/* <button className={`btn btn-outline-secondary`} onClick={updatedInArray}>update to firebase </button> */}
      </div>

    </div>
    </div>
  )
}
