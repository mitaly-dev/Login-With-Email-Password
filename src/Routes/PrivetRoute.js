import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    if(loading){
        return<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    if(user && user?.uid){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;