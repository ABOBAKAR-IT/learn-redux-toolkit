import {configureStore} from '@reduxjs/toolkit'
import countSlice from './Slice/counterSlice'
import counterSlice1 from './Slice/counterSlice1'
import counterSlice2 from './Slice/counterSlice2'
export const store=configureStore({
    reducer:{
        counter:countSlice,
        counter1:counterSlice1,
        counter2:counterSlice2
    }
})