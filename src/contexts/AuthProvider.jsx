import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import app from '../utils/firebase/firebase.config.js';



export const AuthContext = createContext(null);


const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);



    //create a new account
    const createaccount = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    //login account
    const userLogin = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //maneges user

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);
        });
        //stop observing while unmounting
        return () => {
            return unsubcribe();
        }
    }, []);

    const logOut = () => {
        return signOut(auth);
    }
    //sing in with google

    const loginWithGoogle = () => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    }
    //sing in with github
    const loginWithGithub = () => {
        setLoader(true);
        return signInWithPopup(auth, gitProvider)
    }
    // send email varification]
    const emailVarification = (user) => {
        sendEmailVerification(user)
            .then(result => {
                alert('samaul', result.user)
            })
            .catch(error => {
                console.log(error);
            })
    }

    //forgate password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const authInfo = {
        user,
        loader,
        createaccount,
        userLogin,
        logOut,
        loginWithGoogle,
        loginWithGithub,
        emailVarification,
        resetPassword


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;