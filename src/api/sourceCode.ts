import { NewSourceCode } from '../interface/interface';
import axios from './axios';

export const getAllSourceCodes = async () => {
  const data = await axios.get('/source-code/all');
  return data.data;
};

export const getSourceCodeById = async (id: number | string) => {
  const response = await axios.get('/source-code/get-source-code-by-id', {
    data: { id },
  });
  return response.data;
};

export const updateSourceCode = async (
  id: number | string,
  sourceCode: NewSourceCode,
) => {
  const response = await axios.put('/source-code/update-source-code', {
    id: id,
    ...sourceCode,
  });
  return response.data;
};

export const deleteSourceCode = async (id: number | string) => {
  const response = await axios.delete('/source-code/delete-source-code', {
    data: { id },
  });
  return response.data;
};

export const createNewSourceCode = async (sourceCode: NewSourceCode) => {
  const response = await axios.post(
    '/source-code/create-source-code',
    sourceCode,
  );
  return response.data;
};
