import routes from "./route";
import { Suspense } from "react";
import Protected from './protect';
import * as $ from 'react-router-dom';
import Loader from '../component/loader';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

const Routes = () => {
    return <Suspense fallback={<Loader />}>
        <$.BrowserRouter>
            <$.Routes>
                {
                    routes.map((obj, key) => (<$.Route 
                        path={obj.path} key={key}
                        element={obj.protected ? <Protected children={<obj.element />} /> : <obj.element />}
                    />))
                }
            </$.Routes>
            <ToastContainer position="top-right" style={{ flexDirection: 'column' }} />
        </$.BrowserRouter>
    </Suspense>;
};

export default Routes;
