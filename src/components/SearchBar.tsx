import React, { useEffect, useState } from "react";
import { PropsPagesGames } from "../types/types";
import { useAppDispatch, useAppSelector } from "../Store/store";
import { searchGames, getGames, allGames } from "../Store/features/gamesSlide";
import mock from "../helpers/mock/mock.json";

export default function SearchBar({ pagesGames }:any) {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const games = useAppSelector(getGames).allGames;

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    
    setName(e.target.value);
    if (e.target.value === "") {
      dispatch(allGames(mock));
    } else {
      const filteredGames = games.filter((game) => game.title.toUpperCase().includes(e.target.value.toUpperCase()));
      if(filteredGames.length === 0){
        setName("");
        alert("no coincide")
      }
      dispatch(searchGames(filteredGames));
    }
    pagesGames(1)
  }
  
  return (
    <div>
      <input
        placeholder="Buscar"
        type="text"
        value={name}
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
}
