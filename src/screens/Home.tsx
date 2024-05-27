import React, { useEffect, useState } from "react";
import {Animated, Dimensions, Image, Text} from 'react-native';
import View = Animated.View;
import {checkMember} from '../services/MemberService.ts';
import DeviceInfo, { getUniqueId } from "react-native-device-info";

const windowWidth = Dimensions.get('window').width;
const iconSize = windowWidth * 0.095;
const marginSize = windowWidth * 0.15;
const smoallMarginSize = windowWidth * 0.02;
const baseSize = windowWidth * 0.05;
const smallSize = windowWidth * 0.02;
const bigSize = windowWidth * 0.07;

function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <TodaySteps />
      <Character />
      <TitleAndNickname />
    </View>
  );
}

function TodaySteps() {
  const [todaySteps, setTodaySteps] = React.useState(12345);
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: marginSize,
        }}>
        <Text style={{fontSize: baseSize}}>오늘의 걸음 수</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: smallSize,
        }}>
        <Text style={{fontSize: bigSize}}>
          <Text style={{color: 'pink'}}>{todaySteps}</Text> 걸음
        </Text>
      </View>
    </View>
  );
}

function Character() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../assets/rn.png')} />
      </View>
    </View>
  );
}

function TitleAndNickname() {
  const [adjectiveTitle, setAdjectiveTitle] = React.useState('마음먹은');
  const [noneTitle, setNoneTitle] = React.useState('산책러');
  const [nickname, setNickname] = React.useState('홍길동');
  return (
    <View style={{marginBottom: marginSize}}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: baseSize}}>
          <Text>{adjectiveTitle}</Text>
          <Text> {noneTitle}</Text>
        </Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: bigSize}}>{nickname}</Text>
      </View>
    </View>
  );
}

export default HomeScreen;
