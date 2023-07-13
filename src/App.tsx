
import { useEffect, useState } from 'react'
import './styles/App.scss'
import Nav from './components/Nav'
import Cards from './components/Cards'
// import axios from 'axios'
import Paginado from './helpers/Paginado'
import mock from "./helpers/mock/mock.json"
import { allGames, getGames, searchGames } from './Store/features/gamesSlide'
import { useAppDispatch, useAppSelector } from './Store/store'

function App() {
  const dispatch = useAppDispatch();

  useEffect(()=> {
    // axios.get("https://www.freetogame.com/api/games",)
    // .then(r =>{
      //   const data = r.data
      //   setGames(data)
      // })
      // setGames(apiData)
      dispatch(allGames(mock));
    },[])

  const games = useAppSelector(getGames).allGames;
  const searchGames = useAppSelector(getGames).GamesNames;



  const [actualPagina, setActualPagina] = useState(1);
  const [pages] = useState(10);

  const firstPage = actualPagina * pages;
  const lastPage = firstPage - pages;

  const pagesGames = searchGames.length > 0 ? searchGames.slice(lastPage, firstPage) : games.slice(lastPage, firstPage);

  const paginado = (numberPages: number) => {
    setActualPagina(numberPages);
  };

  const handleReset = () => {
    dispatch(allGames(mock));
  };

  const [noResults, setNoResults] = useState(false);
  console.log("🚀 ~ file: App.tsx:47 ~ App ~ noResults:", noResults)

  
  useEffect(() => {
    const searchResults = searchGames.length === 0
    setNoResults(searchResults === false);
  }, [noResults]);
  
  return (
    <div>
      <Nav pagesGames={searchGames} />
      <Paginado
        gamesForPage={pages}
        allGames={ games.length}
        paginado={paginado}
      />
      <button onClick={handleReset}>x</button>
      <div className='cardConteiner'>
        {
          noResults ? <p>no hay resultados</p> : (<>  <Cards games={pagesGames} /> </>)
          } 
          {/* <Cards games={pagesGames} />  */}

      </div>
    </div>
  );
}
export default App
