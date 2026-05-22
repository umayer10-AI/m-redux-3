import { createSlice, nanoid } from "@reduxjs/toolkit";

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
            const data = {
                id: nanoid(),
                name: action.payload
            }
            v.users.push(data)
        }
    }
})

export const { increment,plus,addUser } = counterSlice.actions
export default counterSlice.reducer