import { useState } from 'react'
import PropTypes from 'prop-types'

function Search ({setSearchPhrase, searchPhrase}) {
  const [inputPhrase, setInputPhrase] = useState(searchPhrase) 

  const handleInputChange = (event) => {
    setInputPhrase(event.target.value)
  }

  const readInputValue = () =>{
    setSearchPhrase(inputPhrase)
  }

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputPhrase}
        onChange={handleInputChange}
        placeholder="Type something..."
        className="input-field"
      />
      <div className="button-container">
      <button onClick={readInputValue} className="read-button">Read Input Value</button>
      </div>

    </div>
  )
}

Search.propTypes = {
  setSearchPhrase: PropTypes.func,
  searchPhrase: PropTypes.string
}

export default Search
