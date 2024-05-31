import BottomTabNavigator from './src/navigation/BottomTabNavigator.tsx';
import {useUserInit} from './src/hooks/UseUserInit.ts';

const App = () => {
  useUserInit();
  return <BottomTabNavigator />;
};

export default App;
