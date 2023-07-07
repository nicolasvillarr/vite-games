import { configureStore } from "@reduxjs/toolkit";
import { GamesDetailsSlice } from "./features/detailsSlide";
import { GamesSlice } from "./features/gamesSlide";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer:{
        GamesDetailsState: GamesDetailsSlice.reducer,
        GamesNamesSlide: GamesSlice.reducer
        }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export type RootState = ReturnType<typeof store.getState>

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;