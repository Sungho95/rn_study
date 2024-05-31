import {Alert} from 'react-native';

export const marketingNotificationAlert = (): Promise<boolean> => {
  return new Promise(resolve => {
    Alert.alert('광고성 정보 수신 동의', '어쩌고 저쩌고 어쩌고 저쩌고', [
      {text: '미동의', onPress: () => resolve(false), style: 'cancel'},
      {text: '동의', onPress: () => resolve(true), style: 'default'},
    ]);
  });
};
