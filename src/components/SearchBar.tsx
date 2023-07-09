import React, { useState } from "react";
import { PropsPagesGames } from "../types/types";
import { useAppDispatch, useAppSelector } from "../Store/store";
import { searchGames, getGames, allGames } from "../Store/features/gamesSlide";

export default function SearchBar({pagesGames}:PropsPagesGames) {
    const dispatch = useAppDispatch()
    
    const [name, setName] = useState('')

    
    function handleSearch(e:React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        const filteredGames = pagesGames.filter(e => e.title.toUpperCase().includes(name.toUpperCase()));
        dispatch(allGames(filteredGames));
        setName(e.target.value)
        
    }
    
    function handleBtn(e:React.FormEvent<HTMLButtonElement> ) {
        e.preventDefault()
        if(!name){
            // alert('falto poner un nombre :p') 
        }else {
            const filteredGames = pagesGames.filter(e => e.title.toUpperCase().includes(name.toUpperCase()));
            // dispatch(allGames(filteredGames));
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