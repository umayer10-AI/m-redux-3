import { createSlice, current, nanoid } from "@reduxjs/toolkit";

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
            console.log(current(v.users))
        },
        removeUser: (v,action) => {
            const data = v.users.filter(v => v.id !== action.payload)
            v.users = data
        }
    }
})

export const { increment,plus,addUser,removeUser } = counterSlice.actions
export default counterSlice.reducer