import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { dataGames } from './types/types'
import Cards from './components/Cards'
import axios from 'axios'


function App() {
  
  const [games, setGames] = useState <dataGames[]>([])  // <Array <dataGames>>
  
  useEffect(()=> {
    axios.get("https://www.freetogame.com/api/games",)
    .then(r =>{
      const data = r.data
      setGames(data)
    })
    // fetch("https://www.freetogame.com/api/games")
    // .then((response) => response.json())
    // .then(data => {
    //   setGames(data)
    // })
  },[])
  return (
    <div>
      <Nav/>
    <div className='app'>
      <Cards games={games}/>
    </div>
    </div>
  )
}

export default App
