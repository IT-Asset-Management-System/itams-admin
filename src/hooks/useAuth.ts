import { useState } from 'react';
import { auth } from '../api/auth';
import { getAvatar } from '../api/admin';
import { blobToImageUrl } from '../helpers/blobToImageUrl';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authContext, setAuthContext] = useState(null);
  const [avatar, setAvatar] = useState('');

  const getAuth = async () => {
    setIsLoading(true);
    try {
      const data = await auth();
      setAuthContext(data);
      setIsAuthenticated(true);

      const dataImage = await getAvatar();
      const url = blobToImageUrl(dataImage);
      setAvatar(url);

      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    authContext,
    isAuthenticated,
    avatar,
    getAuth,
  };
};
