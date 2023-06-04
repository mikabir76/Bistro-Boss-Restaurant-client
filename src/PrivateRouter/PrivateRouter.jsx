import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <p className='text-5xl font-semibold text-center'>Loading..........</p>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRouter;