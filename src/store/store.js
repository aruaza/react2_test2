import {configureStore} from "@reduxjs/toolkit";
import getSlice from "../features/postSlice/getSlice";
const store = configureStore({
    reducer:{
        posts: getSlice
    }
})

export default store