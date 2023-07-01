import { useEffect, useState } from 'react'
import './styles/App.scss'
import Nav from './components/Nav'
import { dataGames } from './types/types'
import Cards from './components/Cards'
import axios from 'axios'
import Paginado from './helpers/Paginado'


function App() {
  
  const [games, setGames] = useState <dataGames[]>([])  // <Array <dataGames>>
  
  useEffect(()=> {
    axios.get("https://www.freetogame.com/api/games",)
    .then(r =>{
      const data = r.data
      setGames(data)
    })
  },[])
  
  const [actualPagina, setActualPagina] = useState(1)
  const [pages] = useState(10)

  const fistPage = actualPagina * pages
  const lastPage = fistPage - pages

  const pagesGames = games.slice(lastPage, fistPage)
  
  const paginado = (numberPages: number) => {
    setActualPagina(numberPages)
  }

  return (
    <div>
      <Nav/>
      <div className='cardConteiner'>
      <Cards games={pagesGames}/>
      </div>
      <Paginado
                countyForPage={pages}
                allCountry={games.length}
                paginado = {paginado}/>
    </div>
  )
}

export default App
