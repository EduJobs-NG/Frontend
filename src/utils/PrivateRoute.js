import { Outlet, Navigate} from 'react-router-dom';

const PrivateRoute = () =>{
    console.log('Private route workd')
    let auth = {'token':true}
    return (
        
            auth.token ? <Outlet /> : <Navigate to="/login" />  
    )
}

export default PrivateRoute;