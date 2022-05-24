import { async } from '@firebase/util';
import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useUserToken from '../../hooks/useUserToken';
import LoadingSpinner from '../SharedPages/LoadingSpinner';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useUserToken(user);
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const loginWithGoogle = async() =>{
            await signInWithGoogle()
    }

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            toast.success('Successfully logged in')
        }
    }, [token, from, navigate])

    if (error) {
        return toast.error(`${error.message}`)
      }
      if (loading) {
        return <LoadingSpinner></LoadingSpinner>;
      }

    return (
        <>
            <button onClick={loginWithGoogle}  className="btn text-white btn-secondary">Continue With Google</button>  
            <button  className="btn text-white btn-info ">Continue With Facebook</button> 
            <button  className="btn  text-white">Continue With Github</button>
        </>
    );
};

export default SocialLogin;