import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthProvider";


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    console.log(user)
    const location = useLocation();
    
    if(loading){
        return <div className="w-full flex justify-center py-6"><span className="loading loading-spinner loading-lg text-yellow-600"></span></div>
    }
    if(user){
        return children 
    }

        
    return <Navigate state={location.pathname} to="/login" replace={true}></Navigate>
};
PrivetRoute.propTypes = {
    children: PropTypes.object,
  };
export default PrivetRoute;