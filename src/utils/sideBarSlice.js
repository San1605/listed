import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice=createSlice({
    name:"sidebar",
    initialState:{
        isopen:true
    },
    reducers:{
        toggleMenu:(state,action)=>{
        state.isopen=!state.isopen
        },
        closeMenu:(state,action)=>{
            state.isopen=false
            }

    }
})
export const{toggleMenu,closeMenu}=sideBarSlice.actions
export default sideBarSlice.reducer