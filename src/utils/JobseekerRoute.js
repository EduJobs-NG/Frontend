// import { useContext } from "react";
// import AuthContext from "../context/AuthContext";
// import { Outlet, Navigate } from "react-router-dom";

// const JobseekerRoute = () => {
//   const { authTokens } = useContext(AuthContext);

//   return authTokens ? <Outlet /> : <Navigate to="/jobseeker/login" />;
// };

// export default JobseekerRoute;

import { useAuth } from '../context/auth.context';
import { Outlet, Navigate } from 'react-router-dom';

export default function JobseekerRoute() {
  const { user, loading } = useAuth();

  return !(loading && user) ? <Navigate to='/jobseeker/login' /> : <Outlet />;
}