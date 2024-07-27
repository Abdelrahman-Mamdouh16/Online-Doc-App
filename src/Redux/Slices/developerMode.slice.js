import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const developerMode = createSlice({
    name: 'developerMode',
    initialState: {
        developer: 'Test running The site is under development'
    },
    reducers: {
        developerModeFun: (state) => {
            toast.custom(<dir className='bg-white text-center mb-1 p-2 rounded d-flex align-items-center fw-bold'><i className="fa-solid fa-exclamation me-2 py-2 px-3 rounded-5 bg-warning text-white"></i>{state.developer}</dir>)
        }
    }

})
export const { developerModeFun } =developerMode.actions
export default developerMode.reducer