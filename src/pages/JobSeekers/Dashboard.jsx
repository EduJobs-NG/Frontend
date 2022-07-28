import React, {useContext} from 'react';
import AuthContext from '../../context/AuthContext';
import { Navbar } from './Navbar';

export const Dashboard = () => {
  const {user} = useContext(AuthContext)
  return (
    <>
    <Navbar />
  <section>
    {user && <p>{user.first_name}</p> }

  </section>
  </>

  )
}
