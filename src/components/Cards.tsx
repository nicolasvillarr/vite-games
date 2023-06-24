import { dataGames } from "../types/types"
import "../styles/Cards.scss"
import { Link } from "react-router-dom"
interface Props {
    games: Array<dataGames>
}
export default function Cards ({games}:Props) {
    
  return (
    <div className="cont">
        {
            games.map(e => {
                return(
                    <div className="cardConteiner">
                        <h1>Titulo {e.title}</h1>
                        <h3>Genero {e.genre}</h3>
                            <div>
                                <Link to={`details/${e.id}`}>x</Link>
                            </div>
                    </div>
                    )
            })
        }
        <h3>Genero</h3>
        <h3>Plataforma</h3>
    </div>
  )
}
