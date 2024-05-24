import axios from 'axios';
import {API_URL} from '@env';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

export const checkMember = async (deviceId: number) => {
  try {
    const response = await instance.get('/api/v1/member/check', {
      params: {
        deviceId: deviceId,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
