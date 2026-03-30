import { configureStore } from "@reduxjs/toolkit";
import {profileReducer} from './features/profileSlice'
import {cartReducer} from './features/cartSlice'
import { useSelector, type TypedUseSelectorHook } from "react-redux";
import { productApi } from "./api/productsApi";

// instead of createStore
const store = configureStore({
    // root reducer
    reducer: {
        "profile": profileReducer,
        "cart": cartReducer,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
    // devTools: false << default is true >>
});

// refer infer topic of TypeScript
export type RootState = ReturnType<typeof store.getState>

// more typesafe selector for typescript
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export default store;