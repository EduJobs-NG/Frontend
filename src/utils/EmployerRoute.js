import { Outlet, Navigate} from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const EmployerRoute = () =>{
    const {authTokens} = useContext(AuthContext)
    
    return (
        
            authTokens ? <Outlet /> : <Navigate to="/employer/login" />  
    )
}

export default EmployerRoute;