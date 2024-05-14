import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TitleScreen from '../screens/Title.tsx';
import CalendarScreen from '../screens/Calendar.tsx';
import MyPageScreen from '../screens/MyPage.tsx';
import SettingsScreen from '../screens/Settings.tsx';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Title"
          component={TitleScreen}
          options={{
            title: '칭호',
            tabBarIcon: ({color, size}) => (
              <Icon name="emoji-events" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            title: '캘린더',
            tabBarIcon: ({color, size}) => (
              <Icon name="calendar-month" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MyPage"
          component={MyPageScreen}
          options={{
            title: '내 정보',
            tabBarIcon: ({color, size}) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: '설정',
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
