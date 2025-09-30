import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{},
    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:(state,action)=>{
            return null;
        },
    }
});

export const{addUser,removeUser}=userSlice.actions;
export default userSlice.reducer;

// userSlice.reducer is the combined reducer function that Redux needs for the store.

//action:Object that describes what happened

//reducers: Object of reducer functions in slice

//reducer: Final reducer function for the store