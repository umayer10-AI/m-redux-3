import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value: 0,
        users:[]
    },
    reducers: {
        increment: (v) => {
            v.value += 1
        },
        plus: (v,action) => {
            v.value += action.payload
        },
        addUser: (v,action) => {
            console.log(action)
        }
    }
})

export const { increment,plus } = counterSlice.actions
export default counterSlice.reducer