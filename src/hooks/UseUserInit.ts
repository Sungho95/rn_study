import {useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';
import {pushNotificationAlert} from '../alerts/PushNotificationAlert.ts';
import {marketingNotificationAlert} from '../alerts/MarketingNotificationAlert.ts';
import {login, memberCheck, regist} from '../services/MemberService.ts';

export const useUserInit = () => {
  const [uniqueId, setUniqueId] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const uniqueIdResult = await DeviceInfo.getUniqueId();
        setUniqueId(uniqueIdResult);
        const response = await memberCheck(uniqueIdResult);
        if (response?.data.data) {
          await login(uniqueIdResult, uniqueIdResult);
        } else {
          const pushNotification = await pushNotificationAlert();
          const marketingNotification = await marketingNotificationAlert();
          await regist(
            uniqueIdResult,
            uniqueIdResult,
            pushNotification,
            marketingNotification,
          );
          await login(uniqueIdResult, uniqueIdResult);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return uniqueId;
};
