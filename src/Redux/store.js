import {configureStore} from '@reduxjs/toolkit'
import countSlice from './Slice/counterSlice'
export const store=configureStore({
    reducer:{
        counter:countSlice
    }
})