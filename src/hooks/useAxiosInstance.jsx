import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
const axiosInstance = axios.create({
     baseURL: 'https://job-server-zeta.vercel.app',
     withCredentials: true
})
const useAxiosInstance = () => {
     const {signOutUser} = useAuth();
     const navigate = useNavigate();
     useEffect(() => {
          axiosInstance.interceptors.response.use( response => {
               return response;
          }, (error) => {
               console.log('error caught in interceptor', error);
               if(error.status === 401 || error.status === 403){
                    console.log('Need to log out')
                    signOutUser()
                    .then(() => {
                         console.log('Logged out user')
                         navigate('/signin')
                    })
                    .then(error => {
                         console.log(error);
                    })
               }
               return Promise.reject(error);
          })
     }, [])
     return axiosInstance;
};

useAxiosInstance.propTypes = {
     
};

export default useAxiosInstance;