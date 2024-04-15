import React, { useEffect, useState } from 'react'
import style from './AdvanceSearch.module.css'
import DropDown from './SubComponents/DropDown';
import TextBox from './SubComponents/TextBox';
import { Link, useNavigate } from 'react-router-dom'

export default function AdvanceSearch() {
    const [ myUrlData, setMyUrlData ] = useState();
    const navigate = useNavigate();
    const diet = ["balanced", "high-fiber", "high-protein", "low-carb", "low-fat", "low-sodium"];

    const health = ["alcohol-cocktail", "alcohol-free", "celery-free", "crustacean-free", "dairy-free", "DASH", "egg-free", "fish-free", "fodmap-free", "gluten-free", "immuno-supportive", "keto-friendly", "kidney-friendly", "kosher", "low-fat-abs", "low-potassium", "low-sugar", "lupine-free", "Mediterranean", "mollusk-free", "mustard-free", "no-oil-added, paleo", "peanut-free", "pescatarian", "pork-free", "red-meat-free", "sesame-free", "shellfish-free", "soy-free", "sugar-conscious", "sulfite-free", "tree-nut-free", "vegan", "vegetarian", "wheat-free"];

    const cuisineType = ['American', 'Asian', 'British', 'Caribbean', 'Central Europe', 'Chinese', 'Eastern Europe', 'French', 'Indian', 'Italian', 'Japanese', 'Kosher', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'South American', 'South East Asian'];

    const mealType=['Breakfast', 'Dinner', 'Lunch', 'Snack', 'Teatime'];

    const dishType=['Biscuits and cookies', 'Bread', 'Cereals', 'Condiments and sauces', 'Desserts', 'Drinks', 'Main course', 'Pancake', 'Preps', 'Preserve', 'Salad', 'Sandwiches', 'Side dish', 'Soup', 'Starter', 'Sweets'];

    const [ textData, setTextData ] = useState({ diet:"", health:"", cuisineType:"", mealType:"", dishType:"" ,calories: "", time: "", glycemicIndex:"" });

    function handleChange(e) {
        setTextData((preVal) => ({
            ...preVal,
            [e.target.id]: e.target.value
        }))
    }

    function objectToUrlParams(obj) {
        const params = [];
        for (const key in obj) {
            params.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
        }
        return params.join('&');
    }
    
    useEffect(() => {
        let filteredObject = Object.fromEntries(Object.entries(textData).filter(([_, v]) => v != ""));
        const para = objectToUrlParams(filteredObject)
        console.log(para);
        if(para == ""){
            setMyUrlData("q=all")
        }
        else{
            setMyUrlData(objectToUrlParams(filteredObject))
        }
        
    },[textData])
    
    const handleAdvanceSubmit = (e) => {
        e.preventDefault()
        //console.log(`/searchAd/${myUrlData}`);
        navigate(`/searchAd/${myUrlData}`)
    }

  return (
    <form className={style.advanceSearch} onSubmit={handleAdvanceSubmit}>

        <div className="container text-center">
        <div className="row">
            <div className="col-6 col-sm-4">
            <DropDown arrDropData={diet} name={"Diet"} id="diet" textData={textData} setTextData={setTextData} handleChange={handleChange} />
            </div>
            <div className="col-6 col-sm-4">
            <DropDown arrDropData={health} name={"Health"} id="health" textData={textData} setTextData={setTextData} handleChange={handleChange}  />
            </div>
            <div className="col-6 col-sm-4">
            <DropDown arrDropData={cuisineType} name={"Cuisine Type"} id="cuisineType" textData={textData} setTextData={setTextData} handleChange={handleChange}  /> 
            </div>

            <div className="w-100 d-none d-md-block"></div>

            <div className="col-6 col-sm-4">
            <DropDown arrDropData={mealType} name={"Meal Type"} id="mealType" textData={textData} setTextData={setTextData} handleChange={handleChange}  />
            </div>
            <div className="col-6 col-sm-4">
            <DropDown arrDropData={dishType} name={"Dish Type"} id="dishType" textData={textData} setTextData={setTextData} handleChange={handleChange} />
            </div>
            
            <div className="w-100 d-none d-md-block"></div>

            <div className="col-6 col-sm-4">
                <TextBox name={"Calories"} boxId={"calories"} textData={textData} setTextData={setTextData} handleChange={handleChange} />
            </div>
            <div className="col-6 col-sm-4">
                <TextBox name={"Time"} boxId={"time"} textData={textData} setTextData={setTextData} handleChange={handleChange} />
            </div>
            <div className="col-6 col-sm-4">
                <TextBox name={"GlycemicIndex"} boxId={"glycemicIndex"} textData={textData} setTextData={setTextData} handleChange={handleChange} />
            </div>
        </div>
        <div className={style.advanceSearchButton} >
        <button className={`btn btn-outline-secondary`} type="Reset" value="Reset" >Reset</button>
        <button className={`btn btn-outline-primary`} 
                type="Submit" 
                value="Submit"         
        >Submit</button>
        </div> 
        </div>
    </form>
  )
}
