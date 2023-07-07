import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataGames } from "../../types/types"
import { RootState } from "../store";

interface GamesState {
    GamesNames: dataGames[];
}

const initialState: GamesState = { // estado inicial
    GamesNames:[] // array vacio
};

export const GamesSlice = createSlice({
    name:"games",
    initialState,
    reducers:{
        games:(state, action:PayloadAction<dataGames> )=> {
            state.GamesNames.filter(e => e.title.toUpperCase().includes(action.payload.title.toUpperCase()))
            console.log("🚀 ~ file: gamesSlide.ts:19 ~ GamesNames:", state.GamesNames)
            // state.GamesNames({
            //     id: action.payload.id,
            //     title:action.payload.title,
            //     thumbnail:action.payload.thumbnail,
            //     short_description:action.payload.short_description,
            //     game_url:action.payload.game_url,
            //     genre:action.payload.genre,
            //     platform:action.payload.platform,
            //     publisher:action.payload.publisher,
            //     developer:action.payload.developer,
            //     release_date:action.payload.release_date,
            //     freetogame_profile_url:action.payload.freetogame_profile_url,

            // })
        },
    },
})
export default GamesSlice.reducer
export const getGames = (state: RootState) => state.GamesNamesSlide
export const { games } = GamesSlice.actions
