import { NewAsset } from '../interface/interface';
import axios from './axios';

export const getAllAssets = async () => {
  const response = await axios.get('/asset/all-assets');
  return response.data;
};

export const getAssetById = async (id: number | string) => {
  const response = await axios.get('/asset/get-asset-by-id', { data: { id } });
  return response.data;
};

export const updateAsset = async (id: number | string, asset: NewAsset) => {
  const response = await axios.put('/asset/update-asset', {
    id: id,
    ...asset,
  });
  return response.data;
};

export const deleteAsset = async (id: number | string) => {
  const response = await axios.delete('/asset/delete-asset', { data: { id } });
  return response.data;
};

export const getRequestAsset = async () => {
  const response = await axios.get('/asset/asset-requested');
  return response.data;
};

export const newRequestAsset = async (categoryId: number) => {
  const response = await axios.post('/asset/new-request', { categoryId });
  return response.data;
};

export const createNewAsset = async (asset: NewAsset) => {
  const response = await axios.post('/asset/create-asset', asset);
  return response.data;
};
