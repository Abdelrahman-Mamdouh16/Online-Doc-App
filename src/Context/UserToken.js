import { jwtDecode } from "jwt-decode";
import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
import { setIsLogin, setUserId, setUserToken } from "../Redux/Slices/userLoginData.slice";

export const UserToken = createContext(null)

export default function UserTokenProvider({ children }) {
    const baseUrl="https://node-js-server-onlinedoctor.vercel.app";
    const { userToken, userId } = useSelector((state) => state.userLoginData)
    const dispatch = useDispatch();

    const localStorages = () => {
        if (!localStorage.getItem('token')) {
            dispatch(setIsLogin(false))
            return <Navigate to={'/login'} />
        }
        if (localStorage.getItem('token')) {
            dispatch(setIsLogin(true))
            const {id} =jwtDecode(localStorage.getItem('token'))
            dispatch(setUserId(id))
            const token = localStorage.getItem('token')
            dispatch(setUserToken(token))
        }
    }
    useEffect(() => {
        
        localStorages()
        //eslint-disable-next-line
    }, [userId, userToken])


    return <UserToken.Provider value={baseUrl}>
        {children}
    </UserToken.Provider>
}
