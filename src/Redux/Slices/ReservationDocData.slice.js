import { createSlice } from "@reduxjs/toolkit";


const ReservationDocDataSlice = createSlice({
    name: 'searchDataSlice',
    initialState: {
        doctorData: [],
        doctorTimeStart: '',
        doctorTimeEnd: '',
        doctorDay: '',
    }
    ,
    reducers: {
        setDoctorData: (state, action) => {
            state.doctorData = action.payload;
        },
        setDoctorTimeStart: (state, action) => {
            state.doctorTimeStart = action.payload;
        },
        setDoctorTimeEnd: (state, action) => {
            state.doctorTimeEnd = action.payload;
        },
        setDoctorDay: (state, action) => {
            state.doctorDay = action.payload;
        },
    }
})
export const { setDoctorData,setDoctorDay ,setDoctorTimeStart,setDoctorTimeEnd} = ReservationDocDataSlice.actions
export default ReservationDocDataSlice.reducer;