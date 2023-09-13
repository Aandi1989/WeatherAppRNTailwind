import { View, Text, StatusBar, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <View сlassName="flex-1 relative">
      <StatusBar style="light" />
      <Image blurRadius={70} source={require('../assets/images/bg.png')} 
        className="h-full w-full"
        />
    </View>
  )
}