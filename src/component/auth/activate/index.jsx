import { api } from "../../../utils";
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Activate = () => {
    // hooks
    const nav = useNavigate();
    const { uid, token } = useParams();
    const { user } = useSelector(state => state.auth);

    // states
    const [load, setLoad] = useState(false);

    // effects
    useEffect(() => {
        if (!load && user) nav('/', { repllace: true });
        else activateAccount();
    }, []);

    // methods
    const activateAccount = async () => {
        setLoad(prev => true);
        await api.post('jobseeker/user/email/activate/', { uid, token })
            .then(data => {
                console.log(data);
                toast.success('account activated successfully', {
                    onClick: () => nav('/auth/login', { replace: true }),
                    fonClose: () => nav('/auth/login', { replace: true }),
                });
            })
            .catch(err => {
                setLoad(prev => false);
                toast.error('It seems something went wrong');
            });
        setLoad(prev => false);
    };
};

export default Activate;
