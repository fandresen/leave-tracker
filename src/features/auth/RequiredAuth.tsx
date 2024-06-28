import { Rootstate } from '@/redux/store';
import {useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom"


const RequiredAuth = ()=>{

    const accessToken = useSelector<Rootstate>((state)=> state.authSlice.accesToken)

    return(
        accessToken!=''? <Outlet/>
        : <Navigate to="login"/>
    )
}
export default RequiredAuth