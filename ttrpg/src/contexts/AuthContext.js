import React, {useContext, useState, useEffect} from 'react'
import {Auth} from '../firebaseConfig'

const AuthContext = React.createContext()

export function useAuth() {

  return useContext(AuthContext)
}

export function AuthProvider({children}) { 

    const [currentUser, setCurrentUser]=useState()
    const [loading, setLoading]=useState(true)

  
    function signup(email,password) {

        return Auth.createUserWithEmailAndPassword(email,password)
    }

    function signin(email,password) {
        return Auth.signInWithEmailAndPassword(email, password)
    }
    
    function signout() {

        return Auth.signOut()
    }

    useEffect(()=> { 
        const unsubscribe= Auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe 
    }, [])

    const value = {
        currentUser,
        signin,
        signup,
        signout
    }
    


    return ( 
        <div>
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    )
}