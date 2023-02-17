import { AssetModelQuery, NewAssetModel } from '../interface/interface';
import axios from './axios';

export const getAllAssetModels = async (assetModelQuery?: AssetModelQuery) => {
  const data = await axios.get('/asset-model/all', { params: assetModelQuery });
  return data.data;
};

export const getAssetModelById = async (id: number | string) => {
  const response = await axios.get(`/asset-model/get-asset-model-by-id/${id}`);
  return response.data;
};

export const updateAssetModel = async (
  id: number | string,
  assetModel: NewAssetModel,
) => {
  const response = await axios.put('/asset-model/update-asset-model', {
    id: id,
    ...assetModel,
  });
  return response.data;
};

export const deleteAssetModel = async (id: number | string) => {
  const response = await axios.delete('/asset-model/delete-asset-model', {
    data: { id },
  });
  return response.data;
};

export const createNewAssetModel = async (assetModel: NewAssetModel) => {
  const response = await axios.post(
    '/asset-model/create-asset-model',
    assetModel,
  );
  return response.data;
};
