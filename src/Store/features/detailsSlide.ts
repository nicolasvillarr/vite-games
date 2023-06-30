import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GamesDetails } from "../../types/types"
import { RootState } from "../store";

interface GamesDetailsState {
    GamesDetails: GamesDetails[];
}

const initialState: GamesDetailsState = { // estado inicial
    GamesDetails:[] // array vacio
};

export const GamesDetailsSlice = createSlice({
    name:"details",
    initialState,
    reducers:{
        addDetails:(state, action:PayloadAction<GamesDetails> )=> {
            state.GamesDetails.push({
                id: action.payload.id,
                title:action.payload.title,
                thumbnail:action.payload.thumbnail,
                status:action.payload.status,
                short_description:action.payload.short_description,
                description:action.payload.description,
                game_url:action.payload.game_url,
                genre:action.payload.genre,
                platform:action.payload.platform,
                publisher:action.payload.publisher,
                developer:action.payload.developer,
                release_date:action.payload.release_date,
                freetogame_profile_url:action.payload.freetogame_profile_url,
                minimum_system_requirements: {
                  os:action.payload.minimum_system_requirements.os,
                  processor:action.payload.minimum_system_requirements.processor,
                  memory:action.payload.minimum_system_requirements.memory,
                  graphics:action.payload.minimum_system_requirements.graphics,
                  storage:action.payload.minimum_system_requirements.storage
                  },
            })
        },
    },
})
export default GamesDetailsSlice.reducer
export const getDetails = (state: RootState) => state.GamesDetailsState
export const { addDetails } = GamesDetailsSlice.actions
