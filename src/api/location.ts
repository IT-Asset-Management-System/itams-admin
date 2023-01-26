import axios from './axios';

export const getAllLocations = async () => {
  const data = await axios.get('/location/all');
  return data.data;
};
