/* eslint-disable react-hooks/exhaustive-deps */
import Card from './Faq';
import { Error } from '../Error';
import api from '../../utils/AxiosInstance';
import { useEffect, useState } from 'react';
import { Circles } from "react-loader-spinner";

export const Faq = () => {
  // states
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  // effects
  useEffect(() => { if (!data.length) getFaq(); }, []);

  // methods
  const getFaq = async () => {
    setLoad(() => true);
    await api.get('/faqs/')
      .then(res => {
        setError(() => false);
        setData(() => res.data?.results || []);
      })
      .catch(err => { setError(() => err); });
    setLoad(() => false);
  };

  return <section className='w-screen flex flex-col items-center justify-center min-h-[20em] bg-gray-200'>
    {
      load ?
        <div className="w-full flex items-center justify-center">
          <Circles type="ThreeDots" width={100} color="blue" />
        </div>
        : error ? <Error /> : data.map(item => <Card key={item.id} {...item} />)
    }
  </section>;
};
