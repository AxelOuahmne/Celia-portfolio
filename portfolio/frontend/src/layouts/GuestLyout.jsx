import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../context/AuthContext"

function GuestLyout() {
   const {user} = useAuthContext();
  return  !user? <Outlet/> : <Navigate to={'/'} />
}

export default GuestLyout
