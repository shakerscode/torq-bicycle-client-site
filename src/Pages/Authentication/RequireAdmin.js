import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import LoadingSpinner from '../SharedPages/LoadingSpinner';
import useAdmin from '../../hooks/useAdmin';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    let location = useLocation();

    if(loading || adminLoading){
        return <LoadingSpinner></LoadingSpinner>
     }
 if (!user ||!admin) {
        signOut(auth);
        toast.error('Please login first!')
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    return  children;

};

export default RequireAdmin;