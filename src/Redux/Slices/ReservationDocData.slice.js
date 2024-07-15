import { createSlice } from "@reduxjs/toolkit";


const ReservationDocDataSlice = createSlice({
    name: 'searchDataSlice',
    initialState: {
        doctorData: [],
        doctorTimeStart: '',
        doctorTimeEnd: '',
        doctorDay: '',
        doctorCost:''
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
        setDoctorCost: (state, action) => {
            state.doctorCost = action.payload;
        },
    }
})
export const { setDoctorData,setDoctorDay ,setDoctorTimeStart,setDoctorTimeEnd,setDoctorCost} = ReservationDocDataSlice.actions
export default ReservationDocDataSlice.reducer;