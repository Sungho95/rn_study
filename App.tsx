import React, {useEffect, useState} from 'react';
import BottomTabNavigator from './src/navigation/BottomTabNavigator.tsx';
import DeviceInfo from 'react-native-device-info';
import {login, memberCheck, regist} from './src/services/MemberService.ts';
import {Alert} from 'react-native';

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
          Alert.alert('안녕안녕', '메세지메세지메세지?', [
            {
              text: '아니',
              onPress: () => console.log('Permission denied'),
              style: 'cancel',
            },
            {
              text: '그래',
              onPress: async () => {
                await regist(uniqueId, uniqueId, true, true);
                await login(uniqueId, uniqueId);
              },
            },
          ]);
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
