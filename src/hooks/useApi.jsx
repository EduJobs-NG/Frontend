/* eslint-disable react-hooks/exhaustive-deps */
import { api } from '../utils';
import { useState, useEffect } from 'react';

const Api = (url = '', obj = {}, method = 'get', forceRefresh = false) => {
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(null);
    const [error, setError] = useState(null);

    // effects
    useEffect(() => {
        console.log("api call", url);
        const call = api[method];
        if (!data || forceRefresh) {
            (async () => {
                setLoad(_ => true);
                await call(url, obj)
                    .then(res => { setData(_ => res.data); console.log(res.data); })
                    .catch(err => { setError(_ => err); console.error(err); });
                setLoad(_ => false);
            })();
        };
    }, []);

    return [data, error, load];
};

export default Api;
