import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsLogin } from '../../Redux/Slices/userLoginData.slice'

export default function Protect({ children }) {
    const dispatch = useDispatch()
    if (!localStorage.getItem('token')) {
        dispatch(setIsLogin(false))
        return <Navigate to={'/login'}></Navigate>
    } else {
        return children
    }
}
