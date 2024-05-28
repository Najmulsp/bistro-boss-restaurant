import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PropTypes from "prop-types";
import useAdmin from "../../hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    if(loading || isAdminLoading){
        return <div className="w-full flex justify-center py-6"><span className="loading loading-spinner loading-lg text-yellow-600"></span></div>
    }
    if(user && isAdmin){
        return children 
    }
    return <Navigate to="/" state={{from: location.pathname}} replace></Navigate>
};

AdminRoute.propTypes = {
    children: PropTypes.object,
  };

export default AdminRoute;