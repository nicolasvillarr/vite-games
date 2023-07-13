import { Props } from "../types/types"
import "../styles/Cards.scss"
import { Link } from "react-router-dom"
import { useAppSelector } from "../Store/store"
import { getGames } from "../Store/features/gamesSlide"

export default function Cards ({games}:Props) {

    const search = useAppSelector(getGames).GamesNames
    // console.log("🚀 ~ file: Cards.tsx:10 ~ Cards ~ search:", search.length)
    
      return (
    <div className="cont">
        { games.length !== 0 ? 
            games.map(e => {
                return(
                    <div className="cardConteiner">
                        <div className="Card ">
                        <h1 className="text-center title">{e.title}</h1>
                        <h3 className=" subTitle">Genero {e.genre}</h3>
                        <div className="flex justify-center">
                            <img className=" fixImage shadow-red-800" src={e.thumbnail} width={400} alt="" />
                        </div>
                        <div className="text-center">
                        <Link  to={`details/${e.id}`}>More details</Link>
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
                    )}): <div> 🥺</div>
                //     :
                //     <div>{search.map((e => {
                //         return(
                //     <div className="cardConteiner">
                //         <div className="Card ">
                //         <h1 className="text-center title">{e.title}</h1>
                //         <h3 className=" subTitle">Genero {e.genre}</h3>
                //         <div className="flex justify-center">
                //             <img className=" fixImage shadow-red-800" src={e.thumbnail} width={400} alt="" />
                //         </div>
                //         <div className="text-center">
                //         <Link  to={`details/${e.id}`}>More details</Link>
                //         </div>
                //         <h5 className="text-center">{e.short_description}</h5>
                //         <h5 className="text-center">Platform {e.platform}</h5>
                //         <h5 className="text-center">publisher {e.publisher}</h5>
                //         <h5 className="text-center">developer {e.developer}</h5>
                //         <h5 className="text-center">release date {e.release_date}</h5>
                //         <a className="text-center" href={e.game_url} target="_blank">Download game here</a>
                //         <div>add to fav⭐</div>
                //         </div>
                //     </div>
                //     )}))}
                // </div>
} 
        {/* <h3>Genero</h3>
        <h3>Plataforma</h3> */}
    </div>
  )
}
