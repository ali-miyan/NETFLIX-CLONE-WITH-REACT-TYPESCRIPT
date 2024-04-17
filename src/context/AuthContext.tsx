import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { db, auth } from "../services/firebase";
import {AuthContextType} from "../utils/netflixApi"
import { doc,setDoc } from "firebase/firestore";

interface AuthContextProviderProps {
  children: ReactNode;
} 

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }:AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(current) => {
        setUser(current)
    })

    return () => {
        unsubscribe()
    }
  },[])

  function signUp(email:string, password:string) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db,'users',email),{
      likedMovie : []
    })
  }
  function logIn(email:string, password:string) {
    signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    signOut(auth);
  }

  return (
    <AuthContext.Provider value={{user, signUp, logIn, logOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};