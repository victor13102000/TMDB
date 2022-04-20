import { configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger"

import searchReducer from "./search";
import favoritesReducer from "./favorite";


const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer:{
        search: searchReducer,
        favorites:favoritesReducer
        
    }
})

export default store