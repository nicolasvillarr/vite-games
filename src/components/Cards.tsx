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
                        <h1 className="text-center title">Titulo {e.title}</h1>
                        <h3 className="text-center subTitle">Genero {e.genre}</h3>
                        <div className="flex justify-center">
                            <img className="" src={e.thumbnail} width={400} alt="" />
                        </div>
                        <div className="text-center">
                        <Link  to={`details/${e.id}`}>Game details</Link>
                        </div>
                        <h5 className="text-center">{e.short_description}</h5>
                        <h5 className="text-center">Platform {e.platform}</h5>
                        <h5 className="text-center">publisher {e.publisher}</h5>
                        <h5 className="text-center">developer {e.developer}</h5>
                        <h5 className="text-center">release date {e.release_date}</h5>
                        <a className="text-center" href={e.game_url} target="_blank">Download game here</a>
                        
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
