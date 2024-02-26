import { configureStore } from '@reduxjs/toolkit'
import userLoginDataSlice from './Slices/userLoginData.slice.js'
import developerModeSlice from './Slices/developerMode.slice.js'

export const store = configureStore({
    reducer: {
        userLoginData: userLoginDataSlice,
        developerMode:developerModeSlice,
    }
})