import React from 'react'
import { useNavigate } from 'react-router-dom'
const MealItem = ({data}) => {
    console.log(data)
    let navigate = useNavigate()
  return (
    <>
    {
        (!data) ? "Not Found" : data.map(item =>{
            return(
            <div className='col-md-3 my-4 cursor' key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}>
                <div className="card">
                    <img src={item.strMealThumb} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.strMeal}</h5> 
                    </div>
                </div>
            </div>
            )
        } )
    }
    </>

  )
}

export default MealItem
