import { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '@/config'; 
import { useRouter } from 'next/router';

export const useAuth = () => {
  const [loading, setLoading] = useState(true); // Track the loading state
  const [token, setToken] = useState(null); // Token state
  const [isClient, setIsClient] = useState(false); // To check if it's running in the browser

  // Run this effect to set the client-side flag to true after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // If it's not client-side, exit

    const tokenFromLocalStorage = localStorage.getItem('username');
    const autoLogin = async () => {
      let token = tokenFromLocalStorage;

      // If no token, attempt to log in with stored credentials from .env
      if (!token) {
        try {
          const res = await axios.post(`${API_BASE_URL}/auth/login`, {
            username: process.env.NEXT_PUBLIC_USERNAME, // From .env
            password: process.env.NEXT_PUBLIC_PASSWORD, // From .env
          });

          if (res && res.data.access_token) {
            token = res.data.access_token;
            localStorage.setItem('username', token); // Store the token in localStorage
            localStorage.setItem('token', token); // Store token under a separate key as well
          } else {
            console.log('Login failed');
          }
        } catch (error) {
          console.error('Login request failed', error);
        }
      }

      // If we got the token, update the state and stop loading
      if (token) {
        setToken(token);
      }
      setLoading(false); // Stop loading after the token is fetched or login is unsuccessful
    };

    autoLogin();
  }, [isClient]); // Run when `isClient` is true (on the client-side)

  // Return the loading state and token
  return { loading, token };
};
