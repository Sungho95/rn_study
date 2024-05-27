import React, {useEffect, useState} from 'react';
import BottomTabNavigator from './src/navigation/BottomTabNavigator.tsx';
import DeviceInfo from 'react-native-device-info';
import { checkMember, register } from "./src/services/MemberService.ts";

const App = () => {
  const [uniqueId, setUniqueId] = useState<string>('');

  console.log('uniqueId = ', uniqueId);
  useEffect(() => {
    const fetchData = async () => {
      const uniqueIdResult = await DeviceInfo.getUniqueId();
      setUniqueId(uniqueIdResult);
      const response = await checkMember(uniqueId);
      console.log('response = ', response?.data.data);
      if (response?.data.data) {
      } else {
        await register(uniqueId, uniqueId, true, true);
      }
    };
    fetchData().then(() => {
      console.log('Data fetched');
    });
  }, [uniqueId]);
  return <BottomTabNavigator />;
};

export default App;
