import axios from 'axios';
import {API_URL} from '@env';
import DeviceInfo from 'react-native-device-info';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const deviceInfo = DeviceInfo;

export const memberCheck = async (deviceId: string) => {
  try {
    return await instance.get('/api/v1/member/check', {
      params: {
        deviceId: deviceId,
      },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const regist = async (
  deviceId: string,
  password: string,
  pushNotification: boolean,
  marketingNotification: boolean,
) => {
  console.log(deviceInfo);
  try {
    return await instance.post('/api/v1/member', {
      deviceId: deviceId,
      password: password,
      os: deviceInfo.getBrand(),
      osVersion: deviceInfo.getVersion(),
      deviceModel: deviceInfo.getModel(),
      pushNotification: pushNotification,
      marketingNotification: marketingNotification,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const login = async (deviceId: string, password: string) => {
  return await instance.post('api/v1/member/login', {
    deviceId: deviceId,
    password: password,
  });
};
