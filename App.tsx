import React, {useEffect, useState} from 'react';
import BottomTabNavigator from './src/navigation/BottomTabNavigator.tsx';
import DeviceInfo from 'react-native-device-info';
import {login, memberCheck, regist} from './src/services/MemberService.ts';
import {pushNotificationAlert} from './src/alerts/PushNotificationAlert.ts';
import {marketingNotificationAlert} from './src/alerts/MarketingNotificationAlert.ts';

const App = () => {
  const [uniqueId, setUniqueId] = useState<string>('');

  console.log('uniqueId = ', uniqueId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const uniqueIdResult = await DeviceInfo.getUniqueId();
        setUniqueId(uniqueIdResult);
        const response = await memberCheck(uniqueId);
        console.log('response = ', response?.data.data);
        if (response?.data.data) {
          await login(uniqueId, uniqueId);
        } else {
          const pushNotification = await pushNotificationAlert();
          const marketingNotification = await marketingNotificationAlert();
          await regist(
            uniqueId,
            uniqueId,
            pushNotification,
            marketingNotification,
          );
          await login(uniqueId, uniqueId);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData().then(() => {
      console.log('Data fetched');
    });
  }, [uniqueId]);
  return <BottomTabNavigator />;
};

export default App;
