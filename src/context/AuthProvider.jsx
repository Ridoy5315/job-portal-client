import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.init';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
     }

     const signInUser = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password)
     }

     const signInWithGoogle = () => {
          setLoading(true);
          return signInWithPopup(auth, googleProvider);
     }

     const signOutUser = () => {
          setLoading(true);
          return signOut(auth);
     }

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, currentUser => {
               setUser(currentUser);
               console.log('state:', currentUser);
               if(currentUser?.email){
                    const user = {email: currentUser.email};
                    axios.post('https://job-server-zeta.vercel.app/jwt', user, {withCredentials: true})
                    .then(res => {
                         console.log('login token', res.data)
                         setLoading(false);
                    })
               }
               else{
                    axios.post('https://job-server-zeta.vercel.app/logout', {}, {withCredentials: true})
                    .then(res => {
                         console.log('logout', res.data)
                         setLoading(false);
                    })
               }
               
          })

          return() => {
               unsubscribe();
          }
     }, [])

     const AuthInfo = {
          user,
          loading,
          createUser,
          signInUser,
          signInWithGoogle,
          signOutUser
     }
     return (
          <AuthContext.Provider value={AuthInfo}>
               {children}
          </AuthContext.Provider>
     );
};

AuthProvider.propTypes = {
     
};

export default AuthProvider;