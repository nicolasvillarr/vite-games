import React, { useState } from "react";
import { PropsPagesGames,dataGames } from "../types/types";
import { useAppDispatch } from "../Store/store";
import { getGames } from "../Store/features/gamesSlide";

export default function SearchBar({pagesGames}:PropsPagesGames) {
    const dispatch = useAppDispatch()
    
    const [name, setName] = useState('')
    const filterGames = pagesGames.filter(e => e.title.toUpperCase().includes(name.toUpperCase()));
    const data = filterGames.filter(e=>e)
    console.log("🚀 ~ file: SearchBar.tsx:12 ~ SearchBar ~ data:", data)
    // getGames(filterGames)
    // console.log("🚀 ~ file: SearchBar.tsx:18 ~ Search   Bar ~ filterGames:", filterGames)
    // dispatch(getGames({
    //     id:data.id
    // }))

    
    function handleSearch(e:React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        setName(e.target.value)
        
    }
    
    function handleBtn(e:React.FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        if(!name){
            alert('falto poner un nombre :p') 
        }else {
            // dispatch(getGames(filterGames))
                }
        setName('')
    }


    return (
        <div  >
        <input 
        placeholder="Buscar" 
        type="text" 
        value={name}
        onChange={(e)=> handleSearch(e)}
         /> 
         <button type="submit"  onClick={(e)=> handleBtn(e)}>🔎</button> 
        </div>
    ) 
}