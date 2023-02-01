import { AcceptRequest, AssetQuery, NewAsset } from '../interface/interface';
import axios from './axios';

export const getAllAssets = async (assetQuery?: AssetQuery) => {
  const response = await axios.get('/asset/all-assets', { params: assetQuery });
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

export const createNewAsset = async (asset: NewAsset) => {
  const response = await axios.post('/asset/create-asset', asset);
  return response.data;
};

export const getAllRequestAssets = async () => {
  const response = await axios.get('/asset/all-request-assets');
  return response.data;
};

export const acceptRequest = async (acceptRequest: AcceptRequest) => {
  const response = await axios.post('/asset/accept-request', acceptRequest);
  return response.data;
};

export const rejectRequest = async (id: number | string) => {
  const response = await axios.post('/asset/reject-request', { id });
  return response.data;
};

export const getAssetsByModel = async (assetModelId: number | string) => {
  const response = await axios.get('/asset/asset-by-model', {
    params: { assetModelId: assetModelId },
  });
  return response.data;
};
