import axios from './axios';

export const getAllManufacturers = async () => {
  const data = await axios.get('/manufacturer/all');
  return data.data;
};
