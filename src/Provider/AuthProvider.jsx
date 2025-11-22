import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthContext } from "./AuthContex";
import { auth } from "../Firebase/Firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
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
        })

        // cleare data
        return () => unSubscribe()

    }), []

    const authInfo = {
        createUser,
        loginUser,
        logOutuser,
        user,
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;