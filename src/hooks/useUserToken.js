import { useEffect, useState } from 'react';

const useUserToken = ( user) => {
    const [token, setToken] = useState('')

    useEffect(()=>{
        const email = user?.user?.email;
        const currentUser = {
            email: email
        }
        if(email){
             fetch(`https://safe-waters-55642.herokuapp.com/user/${email}`,{
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                console.log(token);
                localStorage.setItem('accessToken', data.token)
                setToken(data.token)
            })
        }
    },[user])

    return [token]

};

export default useUserToken;