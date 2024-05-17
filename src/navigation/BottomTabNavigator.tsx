import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CalendarScreen from '../screens/Calendar.tsx';
import MyPageScreen from '../screens/MyPage.tsx';
import SettingsScreen from '../screens/Settings.tsx';
import TitleScreen from '../screens/Title.tsx';
import {Text} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

type HeaderTitleProps = {
  title: string;
};

const windowWidth = Dimensions.get('window').width;
const iconSize = windowWidth * 0.065;
const marginSize = windowWidth * 0.02;

const HeaderTitle: React.FC<HeaderTitleProps> = ({title}) => (
  <Text style={{fontSize: RFPercentage(4), fontWeight: 'bold'}}>{title}</Text>
);

const LeftTitle = () => {
  const navigation = useNavigation();
  return (
    <Icon
      name="arrow-back"
      size={iconSize}
      style={{marginLeft: marginSize}}
      onPress={() => navigation.navigate('Home')}
    />
  );
};

function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="칭호"
          component={TitleScreen}
          options={() => ({
            headerTitle: () => <HeaderTitle title="칭호" />,
            headerTitleAlign: 'center',
            headerLeft: () => <LeftTitle />,
            tabBarIcon: ({color, size}) => (
              <Icon name="emoji-events" color={color} size={size} />
            ),
          })}
        />
        <Tab.Screen
          name="캘린더"
          component={CalendarScreen}
          options={{
            headerTitle: () => <HeaderTitle title="캘린더" />,
            headerTitleAlign: 'center',
            headerLeft: () => <LeftTitle />,
            tabBarIcon: ({color, size}) => (
              <Icon name="calendar-month" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="내 정보"
          component={MyPageScreen}
          options={{
            headerTitle: () => <HeaderTitle title="내 정보" />,
            headerTitleAlign: 'center',
            headerLeft: () => <LeftTitle />,
            tabBarIcon: ({color, size}) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="설정"
          component={SettingsScreen}
          options={{
            headerTitle: () => <HeaderTitle title="설정" />,
            headerTitleAlign: 'center',
            headerLeft: () => <LeftTitle />,
            tabBarIcon: ({color, size}) => (
              <Icon name="settings" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigator;
