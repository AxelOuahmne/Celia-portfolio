import {useContext,useState, createContext, useEffect } from "react";
import {axiosClient} from'../api/axios';
import { useNavigate } from "react-router-dom"


const AuthContext = createContext();

export const  AuthProvider = ({children})=>{
    const navigate = useNavigate()
    const [user,setUser] = useState(null);
    const [errors,setErrors] = useState([]);
    const  csrf = () => axiosClient.get('/sanctum/csrf-cookie');
    const getUser = async ()=>{
        const {data} = await axiosClient.get('/api/user');
        setUser(data)
    }

    const login = async ({...data}) =>{
        await csrf() ;
        setErrors([])
        try {
            await axiosClient.post('/login',data)
            await getUser();
            navigate('/')

        } catch (e) {

            if(e.response.status === 422) {
                setErrors(e.response.data.errors);
            }

        }

    }
    const register = async ({...data}) =>{
        await csrf() ;
        setErrors([])
        try {
            await axiosClient.post('/register',data)
            await  getUser();
           navigate('/')

        } catch (e) {

            if(e.response.status === 422) {
                setErrors(e.response.data.errors);
            }

        }

    }
    useEffect(()=>{
        if(!user) {
            getUser();
        }
    },[])
    const logout = ()=>{
        axiosClient.post('/logout').then(()=>{
            setUser(null)
            navigate('/login')
        })
    }

    return <AuthContext.Provider value={{user,errors,getUser,login,register,logout,csrf}}>
        {children}
    </AuthContext.Provider>
}

export default function useAuthContext() {
    return useContext(AuthContext);
}


