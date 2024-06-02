import { createSlice } from "@reduxjs/toolkit"

const itemsSlice = createSlice({
    name: "items",
    initialState:[],
    reducers: {
        //reducers in Redux must be pure functions, and they cannot handle side effects like asynchronous operations directly.
        addInitialItems: (store,action) => {
            return action.payload;
        },
    }
})


export const itemsActions = itemsSlice.actions;
export default itemsSlice;