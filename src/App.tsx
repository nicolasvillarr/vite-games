import { useEffect, useState } from 'react'
import './styles/App.scss'
import Nav from './components/Nav'
import { dataGames } from './types/types'
import Cards from './components/Cards'
// import axios from 'axios'
import Paginado from './helpers/Paginado'
import mock from "./helpers/mock/mock.json"
import { allGames, getGames, searchGames } from './Store/features/gamesSlide'
import { useAppDispatch, useAppSelector } from './Store/store'

function App() {
  const dispatch = useAppDispatch()
  const apiData = mock
  // const [games, setGames] = useState <dataGames[]>([])  // <Array <dataGames>>

  useEffect(()=> {
    // axios.get("https://www.freetogame.com/api/games",)
    // .then(r =>{
      //   const data = r.data
      //   setGames(data)
      // })
      // setGames(apiData)
      dispatch(allGames(apiData));
    },[])

  const games = useAppSelector(getGames)
  console.log("🚀 ~ file: App.tsx:28 ~ App ~ games:", games)

  // console.log("🚀 ~ file: App.tsx:28 ~ App ~ games:", gamess)
  
  const [actualPagina, setActualPagina] = useState(1)
  const [pages] = useState(10)

  const fistPage = actualPagina * pages
  const lastPage = fistPage - pages

  const pagesGames = games.slice(lastPage, fistPage)

  // const filterGames = games.map(e=>e.title).toLocaleString().toUpperCase()
  // console.log("🚀 ~ file: App.tsx:32 ~ App ~ filterGames:", filterGames)
  const paginado = (numberPages: number) => {
    setActualPagina(numberPages)
  }

  return (
    <div>
      <Nav pagesGames={games}/>
      
      <div className='cardConteiner'>
      <Cards games={pagesGames}/>
      </div>
      <Paginado
                gamesForPage={pages}
                allGames  ={games.length}
                paginado = {paginado}/>
    </div>
  )
}

export default App
