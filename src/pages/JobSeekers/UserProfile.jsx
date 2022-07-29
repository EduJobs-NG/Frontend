import React, {useContext} from 'react';
import AuthContext from '../../context/AuthContext';


export const UserProfile = () => {
  const {authTokens} = useContext(AuthContext) 
  return (
    <div>UserProfile
      
    </div>
  )
}
