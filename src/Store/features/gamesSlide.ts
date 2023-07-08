import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataGames } from "../../types/types"
import { RootState } from "../store";

interface GamesState {
    GamesNames: dataGames[];
    allGames:dataGames[];
}

const initialState: GamesState = { // estado inicial
    GamesNames:[],
    allGames:[]
};

export const GamesSlice = createSlice({
    name:"games",
    initialState,
    reducers:{
        searchGames:(state, action:PayloadAction<dataGames[]> )=> {
            state.GamesNames = action.payload
            // state.allGames = action.payload
            console.log("🚀 ~ file: gamesSlide.ts:19 ~ state.GamesNames:", state.GamesNames)
        },
        allGames:(state, action:PayloadAction<dataGames[]>)=>{
            state.allGames = action.payload
            console.log("🚀 ~ file: gamesSlide.ts:26 ~ state.allGames:", state.allGames)

        }
    },
})
export default GamesSlice.reducer
export const getGames = (state: RootState) => state.NamesSlide.allGames
export const { searchGames, allGames } = GamesSlice.actions
