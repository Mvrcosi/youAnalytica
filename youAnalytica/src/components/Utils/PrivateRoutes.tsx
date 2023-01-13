import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
    const auth:any = useSelector(state => state);
  return (
    auth.user ? <Outlet/> : <Navigate to='/' />
  )
}

export default PrivateRoutes