import DeviceInfo from 'react-native-device-info';
import {API_URL} from '@env';
import axios from 'axios';

const getDeviceSpecificData = async () => {
  console.log('API_URL = ', API_URL);
  if (!API_URL) {
    throw new Error('API_URL is not defined');
  }
  const uniqueId = DeviceInfo.getUniqueId();
  const response = await axios.get(API_URL, {
    params: {
      deviceId: uniqueId,
    },
  });
  console.log('response =', response);

  return response.data;
};

export default getDeviceSpecificData;
