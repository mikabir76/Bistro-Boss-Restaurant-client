import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
const signIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}
const logOut =()=>{
    return signOut(auth)
}
useEffect(()=>{
    const unsubscriber = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=> unsubscriber()
},[])
const profileUpdate = (name, photoURL)=>{
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL
    })
}
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        profileUpdate

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;