import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/AuthContext';

const SocialLogin = props => {
     const {signInWithGoogle} = useContext(AuthContext);

     const handleGoogle = () =>{
          signInWithGoogle()
          .then((result) => {
               console.log(result)
          })
          .catch( (error) => {
               console.log('Error', error.message)
          })
     }
     return (
          <div>
               <div className="divider">OR</div>
               <button onClick={handleGoogle}>Google</button>
          </div>
     );
};

SocialLogin.propTypes = {
     
};

export default SocialLogin;