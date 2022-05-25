import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useUser from '../../hooks/useUser';
import LoadingSpinner from '../SharedPages/LoadingSpinner';

const RequireUser = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [webUser, webUserLoading] = useUser(user)
    let location = useLocation();

    if (webUserLoading || loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (!webUser || !user) {
        toast.error('Unauthorized access')
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;

};

export default RequireUser;