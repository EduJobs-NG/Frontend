/* eslint-disable react-hooks/exhaustive-deps */
import { api, token } from '../utils';
import { useState, useEffect } from 'react';

const Api = (type = 'employer',forceRefresh = false) => {
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(null);
    const [error, setError] = useState(null);

    // effects
    useEffect(() => {
        if (!data || forceRefresh) {
            (async () => {
                setLoad(_ => true);
                await api.get(type === 'employer' ? '/employer/users/me/':'/jobseeker/user-profile-update/', { token: token.key })
                    .then(res => { setData(_ => res.data); console.log(res); })
                    .catch(err => { setError(_ => err); console.error(err); });
                setLoad(_ => false);
            })();
        };
    }, []);

    return [data, error, load];
};

export default Api;
