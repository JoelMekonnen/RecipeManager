import React from 'react'
import { Navigate, useLocation, useNavigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    let checkLoggedIn = localStorage.getItem('loggedIn')
    console.log(!checkLoggedIn)
    let loc = useLocation()
    
     const navigate = useNavigate

    if(checkLoggedIn === "false") {
        // navigate("/Login", {replace:true})
        // return <
        console.log(checkLoggedIn)
        return <Navigate to="/Login" state={{ from:loc }}  replace />
    } else {
        return <Outlet/>
    }
   
 

};

export default ProtectedRoute;
