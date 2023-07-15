
import { useEffect, useState } from 'react'
import './styles/App.scss'
import Nav from './components/Nav'
import Cards from './components/Cards'
// import axios from 'axios'
import Paginado from './helpers/Paginado'
import mock from "./helpers/mock/mock.json"
import { allGames, getGames } from './Store/features/gamesSlide'
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
  const [pages,] = useState(10);

  const firstPage = actualPagina * pages;
  const lastPage = firstPage - pages;

  const pagesGames = searchGames.length > 0 ? searchGames.slice(lastPage, firstPage) : games.slice(lastPage, firstPage);
  
  const paginado = (numberPages: number) => {
    setActualPagina(numberPages);
  };

  const handleReset = () => {
    dispatch(allGames(mock));
    setActualPagina(1)
  };
  
  const [showNoResults, setShowNoResults] = useState(false);

    useEffect(() => {
    if (searchGames.length === 0 && searchGames.length > 0) {
      setShowNoResults(true);
    } else {
      setShowNoResults(false);
    }
  }, [searchGames]);
  
  return (
    <div>
      <button onClick={handleReset}>reset</button>
      <Nav pagesGames={setActualPagina} />
      <div className='cardConteiner'>
        {
          !showNoResults ? (<Cards games={pagesGames} />) : (<p>no hay resultados</p> )
        } 
          {/* <Cards games={pagesGames} />  */}

      </div>
        <Paginado
          gamesForPage={pages}
          allGames={searchGames.length > 0? searchGames.length: games.length}
          paginado={paginado}
        />
    </div>
  );
}
export default App
