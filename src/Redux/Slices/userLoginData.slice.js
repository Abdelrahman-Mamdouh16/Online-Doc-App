import { createSlice } from "@reduxjs/toolkit";

const userLoginDataSlice = createSlice({
    name: 'userLoginDataSlice',
    initialState: {
        isLogin: null,
        userId: null,
        userToken: null,
        loading: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setIsLogin: (state, action) => {
            state.isLogin = action.payload
        },
        setUserToken: (state, action) => {
            state.userToken = action.payload
        },
        setUserId: (state, action) => {
            state.userId = action.payload
        },
    }

})
export const { setUserToken, setLoading, setIsLogin, setUserId } = userLoginDataSlice.actions;
export default userLoginDataSlice.reducer;