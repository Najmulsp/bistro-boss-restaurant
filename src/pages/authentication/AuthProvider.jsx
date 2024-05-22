import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import {app} from './Firebase.config'
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

        // create user
        const createUser = (email, password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
        }
        // sign in
        const login = ( email, password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password);
        }
        // log out
        const logout = () =>{
            setLoading(true)
            return signOut(auth)
        }
        // update profile
        const updateUserProfile = (name, photo) =>{
            return   updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
        }
        // observer
    useEffect(()=>{
        const unSubscribe =    onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log('currentUser: ', currentUser)
            setLoading(false);
        })
        return unSubscribe;
    }, [])




    const authInfo ={
        user,
        loading,
        createUser,
        login,
        logout,
        updateUserProfile

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {   
    children: PropTypes.object,
   
   
}
export default AuthProvider;