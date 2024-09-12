import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CalendarScreen from '../screens/Calendar.tsx';
import MyPageScreen from '../screens/MyPage.tsx';
import SettingsScreen from '../screens/Settings.tsx';
import TitleScreen from '../screens/Title.tsx';
import {Dimensions, Text} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home.tsx';

const Tab = createBottomTabNavigator();

type HeaderTitleProps = {
  title: string;
};

const windowWidth = Dimensions.get('window').width;
const iconSize = windowWidth * 0.095;
const marginSize = windowWidth * 0.02;

const HeaderTitle: React.FC<HeaderTitleProps> = ({title}) => (
  <Text style={{fontSize: RFPercentage(4), fontWeight: 'bold'}}>{title}</Text>
);

function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'pink',
          tabBarInactiveTintColor: 'gray',
        }}
        initialRouteName="Home">
        <Tab.Screen
          name="칭호"
          component={TitleScreen}
          options={() => ({
            headerTitle: () => <HeaderTitle title="칭호" />,
            headerTitleAlign: 'center',
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
            tabBarIcon: ({color, size}) => (
              <Icon name="calendar-month" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={() => ({
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="house" color={color} size={iconSize} />
            ),
          })}
        />
        <Tab.Screen
          name="내 정보"
          component={MyPageScreen}
          options={{
            headerTitle: () => <HeaderTitle title="내 정보" />,
            headerTitleAlign: 'center',
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
