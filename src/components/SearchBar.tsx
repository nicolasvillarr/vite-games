import React, { useState } from "react";
import { PropsPagesGames } from "../types/types";
import { useAppDispatch, useAppSelector } from "../Store/store";
import { searchGames, getGames, allGames } from "../Store/features/gamesSlide";
import mock from "../helpers/mock/mock.json";

export default function SearchBar({ pagesGames }: PropsPagesGames) {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const games = useAppSelector(getGames).allGames;


function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.value;
    setName(e.target.value);
    if (e.target.value === "") {
      dispatch(allGames(mock));
    } else {
      const filteredGames = games.filter((game) => game.title.toUpperCase().includes(e.target.value.toUpperCase()));
      dispatch(searchGames(filteredGames));
    }
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
