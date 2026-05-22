import { configureStore } from "@reduxjs/toolkit";
import counterProvider from "./slice"
import myName from "./slice2"

export const store = configureStore({
    reducer:{
        counter: counterProvider,
        nameSet: myName
    }
})