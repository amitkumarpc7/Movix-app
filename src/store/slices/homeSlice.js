import { createSlice } from "@reduxjs/toolkit";

const homeSlice=createSlice({
    name:"home",
    initialState:{
        url:{},
        genre:{},
    },
    reducers:{
        getApiCOnfiguration:(state,action)=>{
            state.url=action.payload;
        },
        getGenres:(state,action)=>{
            state.genre=action.payload;
        },
    }
});

export default homeSlice.reducer;
export const{getApiCOnfiguration,getGenres}=homeSlice.actions;