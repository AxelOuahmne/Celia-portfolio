import { createContext, useContext, useState } from "react"
import UserApi from "../Services/UserApi"


export const UserStateContaxt = createContext({
    user: {},
    setUser: () => { },
    logout: () => { },
    authenticated:false,
    login:(email,password)=>{},
    setAuthenticated:()=>{},
})
export default function UserContext({children}) {
    const [user, setUser] = useState({})
    const [authenticated,_setAuthenticated] = useState('true' === window.localStorage.getItem('AUTHENTICATED'))
    const logout = () => {
        setUser({})
        setAuthenticated(false)
        window.localStorage.removeItem('USER_ID');
    window.localStorage.removeItem('USER_ROLES');
    }
    const setAuthenticated = (isAuthenticated)=>{
        _setAuthenticated(isAuthenticated)
        window.localStorage.setItem('AUTENTICATED',isAuthenticated)
    }
    const login = async (email, password) => {
        // await UserApi.getCsrfToken(),

        return  UserApi.login(email, password);
    }
    return (
        <>

            <UserStateContaxt.Provider value={{
                user,
                setUser,
                logout,
                login,
                setAuthenticated,
                authenticated
            }}>
                {children}
            </UserStateContaxt.Provider>
        </>
    )
}

export const useUserContext = () => useContext(UserStateContaxt)
