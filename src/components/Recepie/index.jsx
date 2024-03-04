import PropTypes from 'prop-types'
import Ingredients from '../Ingredients'
import { useEffect, useState } from 'react'

function Recepie({meal}) {
    const [recepieDetails, setRecepieDetails] = useState([])

  useEffect(() =>{
    const tempIngredients = [];
    const tempMeasures = [];
    const tempRecepieDetails = [];
     

    for(let i = 1; i <= 20; i++){
        const ingredient = meal[`strIngredient${i}`]
        const measure = meal[`strMeasure${i}`]

        if(ingredient !== null && ingredient !== ''){
            tempIngredients.push(ingredient)
            tempMeasures.push(measure)
            tempRecepieDetails.push({
                ingredient: ingredient,
                measure: measure
            })

        }

        setRecepieDetails(tempRecepieDetails)
      }
  }, [meal])

  return (
    <div>
        <h1 className="meal-title">{meal.strMeal}</h1>
        <img className="meal-image" src={meal.strMealThumb} alt="" />
        <Ingredients  recepieDetails={recepieDetails}></Ingredients>
        <p className="instructions-text">{meal.strInstructions}</p>
    </div>
  )
}   

Recepie.propTypes = {
    meal: PropTypes.object,
}

export default Recepie