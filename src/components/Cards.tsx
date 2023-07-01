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
                        <div className="Card">
                        <h1 className="text-center">Titulo {e.title}</h1>
                        <h3 className="text-center">Genero {e.genre}</h3>
                        <img src={e.thumbnail} width={400} alt="" />
                            <div>
                                <Link to={`details/${e.id}`}>x</Link>
                            </div>
                        <h5>{e.short_description}</h5>
                            <div>add to fav⭐</div>
                        </div>
                    </div>
                    )
            })
        }
        {/* <h3>Genero</h3>
        <h3>Plataforma</h3> */}
    </div>
  )
}
