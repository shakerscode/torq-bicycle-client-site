import { useEffect, useState } from "react";

const useUser = user => {
    const [webUser, setWebUser] = useState(false);
    const [webUserLoading, setWebUserLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if(email){
            fetch(`https://torq-server.onrender.com/web-user/${email}`,{
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=> res.json())
            .then(data =>{
                setWebUser(data.notAdmin)
                setWebUserLoading(false)
            })
        }

    }, [user, webUserLoading])
    return [webUser, webUserLoading]
};

export default useUser;