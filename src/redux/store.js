import { configureStore } from "@reduxjs/toolkit";
import counterProvider from "./slice"

export const store = configureStore({
    reducer:{
        counter: counterProvider
    }
})