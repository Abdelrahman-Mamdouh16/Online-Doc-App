import { configureStore } from '@reduxjs/toolkit'
import userLoginDataSlice from './Slices/userLoginData.slice.js'
import developerModeSlice from './Slices/developerMode.slice.js'
import ReservationDocDataSlice from './Slices/ReservationDocData.slice.js'

export const store = configureStore({
    reducer: {
        userLoginData: userLoginDataSlice,
        developerMode:developerModeSlice,
        ReservationDocData: ReservationDocDataSlice,
    }
})