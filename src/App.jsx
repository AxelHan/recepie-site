import { useEffect, useState } from 'react'
import Recepie from './components/Recepie'
import Search from './components/Search'

import './App.css'

function App() {
  const [baseUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  const [searchPhrase, setSearchPhrase] = useState("Arrabiata")
  const [meal, setMeal] = useState({})


  useEffect(() =>{
    fetch(`${baseUrl}${searchPhrase}`)
      .then((res) =>  res.json())
      .then((data) => {console.log(data.meals[0]), setMeal(data.meals[0])})
  }, [searchPhrase])


  return (
    <div>
          <div>
      <Search searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase}></Search>
    </div>
    <div>
      <Recepie meal={meal}></Recepie>
    </div>
    </div>
  )
}

export default App
