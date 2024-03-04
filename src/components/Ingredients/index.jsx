
import PropTypes from 'prop-types'

function Ingredients({recepieDetails}) {
  return (
    <ul className="recepie-list">
        {recepieDetails.map((detail, index) =>
        <li key={index} className="recepie-item">
            <p className="recepie-text">{`${detail.measure} : ${detail.ingredient}`}</p>
        </li>
        )}
    </ul>
  )
}

Ingredients.propTypes = {
    Ingredients: PropTypes.array,
    measures: PropTypes.array,
    recepieDetails: PropTypes.array
}

export default Ingredients
