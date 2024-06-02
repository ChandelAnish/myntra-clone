import { createSlice } from "@reduxjs/toolkit";

const loadingStatusSlice= createSlice({
    name: 'loadingStatus',
    initialState:{
        loading:false
    },
    reducers:{
        startloading:(state)=>{
            state.loading=true;//Either return a new value *or* modify the draft.
        },
        stoploading:(state)=>{
            state.loading=false;
        }
    }
})

export const loadingStatusSliceAction = loadingStatusSlice.actions;
export default loadingStatusSlice;