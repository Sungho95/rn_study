import axios from 'axios';
import {API_URL} from '@env';
import DeviceInfo from "react-native-device-info";

const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const checkMember = async (deviceId: string) => {
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

export const register = async (
  deviceId: string,
  password: string,
  pushNotification: boolean,
  marketingNotification: boolean,
) => {
  const deviceInfo = DeviceInfo;
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
