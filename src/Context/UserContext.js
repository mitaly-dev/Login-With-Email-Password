import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider} from "firebase/auth"
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext()

const UserContext = ({children}) => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    
    const createUsers=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const verificationEmail=()=>{
        return sendEmailVerification(auth.currentUser)
    }

    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const forgetPassHandle=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const googleHandle=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const  githubHandle=()=>{
        return signInWithPopup(auth,githubProvider)
    }


    const info = {user,createUsers,verificationEmail,loginUser,logOut,forgetPassHandle,googleHandle,githubHandle}
    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;