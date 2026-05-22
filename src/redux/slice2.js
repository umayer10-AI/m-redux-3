import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    ss: ''
}

const slice = createSlice({
    name: "name",
    initialState,
    reducers: {
        setName: (v,action) => {
            console.log(v.ss)
        }
    }
})

export const { setName } = slice.actions
export default slice.reducer