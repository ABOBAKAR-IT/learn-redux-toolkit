import {createSlice} from "@reduxjs/toolkit"

const initialState={
    count2:0
}
 const countSlice2=createSlice({
    name:'counter2',
    initialState,
    reducers:{
        increment2:(state)=>{state.count2+=1},
        decrement2:(state)=>{state.count2-=1},
        reset2:(state)=>{state.count2=0}
    }
 })

 export const {increment2,decrement2,reset2}=countSlice2.actions;
 export default countSlice2.reducer;