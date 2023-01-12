import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
    const auth:any = useSelector(state => state.user);
  return (
    auth.user ? <Outlet/> : <Navigate to='/' />
  )
}

export default PrivateRoutes