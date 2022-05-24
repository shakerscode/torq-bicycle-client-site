import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import LoadingSpinner from '../SharedPages/LoadingSpinner';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
     }
 if (!user) {
        signOut(auth);
        toast.error('Please login first!')
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    return  children;

};

export default RequireAuth;