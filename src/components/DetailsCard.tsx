import axios from "axios"
import { useEffect } from "react"
import { addDetails, getDetails } from "../Store/features/detailsSlide"
import { useAppDispatch, useAppSelector } from "../Store/store"
import { useLocation } from "react-router-dom"

export default function DetailsCard() {
const id = useLocation().pathname.replace("/details/", "") 

const dispatch = useAppDispatch()

  useEffect(()=> {
try {
      axios.get("https://www.freetogame.com/api/game?id=" + id)
    .then(r =>{
      const data = r.data
console.log(data.minimum_system_requirements)
      dispatch(addDetails({
        id:data.id, 
        title:data.title,
        thumbnail:data.thumbnail,
        status:data.status,
        short_description:data.short_description,
        description:data.description,
        game_url:data.game_url,
        genre:data.genre,
        platform:data.platform,
        publisher:data.publisher,
        developer:data.developer,
        release_date:data.release_date,
        freetogame_profile_url:data.freetogame_profile_url,
        minimum_system_requirements: {
          os:data.minimum_system_requirements.os,
          processor:data.minimum_system_requirements.processor,
          memory:data.minimum_system_requirements.memory,
          graphics:data.minimum_system_requirements.graphics,
          storage:data.minimum_system_requirements.storage
          },
      }))
    })
} catch (error) {
  console.log(error)
}
  },[]);
  const info = useAppSelector(getDetails).GamesDetails.filter(e=>e.id === parseInt(id)).find(e=>e)
  // console.log("🚀 ~ file: DetailsCard.tsx:24 ~ DetailsCard ~ info:", info)
  return (
    <>
    <div className="text-center bg-center">
    <h1>{info?.title}</h1>
<img src={info?.thumbnail} width={500} height={300} alt="" />
<h3>{info?.description}</h3>
<a href={info?.freetogame_profile_url}>{info?.freetogame_profile_url}</a>
<h3>{info?.genre}</h3>
<h3>{info?.developer}</h3>
<h3>{info?.platform}</h3>
<h3>{info?.publisher}</h3>
<h3>{info?.release_date}</h3>
  <div>
    <h1>Requisitos minimos</h1>
    <h3>{info?.minimum_system_requirements.os}</h3>
  </div>
<h3>{info?.status}</h3>
<h3>{info?.freetogame_profile_url}</h3>
<h3>{info?.game_url}</h3>
    <h5>{info?.id}</h5>
    </div>
    </>
  )
}
