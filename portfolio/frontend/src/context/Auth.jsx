import { createContext, useContext, useState } from "react"
import {axiosClient} from'../api/axios';
 import { useNavigate } from "react-router-dom";
 import { CELIA_DASHBOARD_ROUTE } from '../router/index.jsx'

export const Auth = createContext()
export default function AuthProvider({children}) {
    const navigate = useNavigate()
    const [user,setUser] = useState(null);
    const [errors,setErrors] = useState([]);
    const  csrf = () => axiosClient.get('/sanctum/csrf-cookie');
    const getUser = async ()=>{
        const {data} = await axiosClient.get('/api/user');
        setUser(data)
    }
    const login = async ({email,password}) =>{
        await csrf() ;
        try {
            await axiosClient.post('/login',{email,password})
            getUser();
             navigate(CELIA_DASHBOARD_ROUTE)

        } catch (e) {

            if(e.response.status === 422) {
                setErrors(e.response.data.errors);
            }

        }

    }
    return (
        <>

            <Auth.Provider value={{user,errors,getUser,login}}>
                {children}
            </Auth.Provider>
        </>
    )
}

export const useAuth = () => useContext(Auth)
