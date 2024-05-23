import { useContext } from "react";
import { AuthContext } from "../pages/authentication/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth
};

export default useAuth;