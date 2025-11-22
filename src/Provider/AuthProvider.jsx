import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContex";
import { auth } from "../Firebase/Firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user 
    const logOutuser = () => {
        return signOut(auth)
    }

    // logined user 
    useEffect(() => {
        // currentUser
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)

            setLoading(false)
        })

        // cleare data
        return () => unSubscribe()

    }), []


    // user profile upded
    const userProfieUpddate = (category) => {
        return updateProfile(auth.currentUser, category)
    }

    const authInfo = {
        createUser,
        loginUser,
        logOutuser,
        user,
        userProfieUpddate,
        loading,
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;