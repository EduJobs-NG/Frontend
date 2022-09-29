import { Outlet, Navigate} from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const JobseekerRoute = () =>{
    const {authTokens} = useContext(AuthContext)
    
    return (
        
            authTokens ? <Outlet /> : <Navigate to="/jobseeker/login" />  
    )
}

export default JobseekerRoute;