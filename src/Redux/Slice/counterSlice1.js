import {createSlice} from "@reduxjs/toolkit"

const initialState={
    count1:10
}
 const countSlice1=createSlice({
    name:'counter1',
    initialState,
    reducers:{
        increment1:(state)=>{state.count1+=1},
        decrement1:(state)=>{state.count1-=1},
        reset1:(state)=>{state.count1=0}
    }
 })

 export const {increment1,decrement1,reset1}=countSlice1.actions;
 export default countSlice1.reducer;