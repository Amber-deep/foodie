import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
import { useEffect, useState } from "react";

const Meal = () => {
    const [url, seturl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const[item, setItem] = useState()
    const[show, setShow] = useState(false)
    const[search, setSearch]= useState("")
    useEffect(() =>{
        fetch(url).then(res=>res.json()).then(data =>{
            console.log(data);
            setItem(data.meals);
            setShow(true);
        })
    },[url])

    const setIndex=(alpha) =>{
        seturl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe= (evt)=>{
        if(evt.key === "Enter"){
            seturl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }

  return (
    <div className="main">
      <div className="heading my-5">
        <h1 >Search your food recipe</h1>
        <h4>“A recipe has no soul. You, as the cook, must bring soul to the recipe.”</h4>
      </div>
      <div className="searchBox">
        <input type="search" className="searchbox" onChange={e => setSearch(e.target.value)} onKeyPress={searchRecipe}/>
      </div>

      
        <div className='container'>
            <div className='row'>
                    
                    {
                        show ? <MealItem data={item} /> : "Not found"
                    }
            </div>
        </div>
        <div className="indexContainer">
            <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)} />
        </div>
    </div>
  )
}

export default Meal
