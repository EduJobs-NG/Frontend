//@ts-check
import api from '../../utils/api';
import React, { useState, useEffect } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { useAuth } from '../../context/auth.context';

export const CvPayment = () => {
  const { user } = useAuth();

  const [key, setKey] = useState('');
  const [price, setPrice] = useState(0);
  const [_, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getPrice = async () => {
    const response = await api.get(`/cv-creation/price/`).catch((err) => {
      setError(true);
      setIsLoading(false);
    });

    if (response && response.data) {
      setKey(response.data.results[0].public_Key);
      setPrice(response.data.results[0].price);
    }
  };

  useEffect(() => { getPrice(); }, []);

  const config = {
    reference: user.user.email + user.user.first_name,
    email: user.user.email,
    amount: price, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: key,
  };

  const initializePayment = usePaystackPayment(config);

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed');
  };

  return (
    <button
      className='bg-[#3c3c3c] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      disabled={isLoading}
      onClick={() => {
        initializePayment(onSuccess, onClose);
      }}
    >
      Pay Now
    </button>
  );
};
