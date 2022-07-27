import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';

export const Dashboard = () => {
  const {name} = useContext(AuthContext)
  return (
    <div>Dashboard
      
    </div>
  )
}
