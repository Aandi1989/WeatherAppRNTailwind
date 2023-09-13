import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SparklesIcon } from "react-native-heroicons/solid";
import { SparklesIcon as SparklesIconMini } from "react-native-heroicons/mini";
import * as Progress from 'react-native-progress';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text className="text-red-500 my-6">HomeScreen</Text>
      <SparklesIcon color="red" fill="black" size={42}/>
      <SparklesIconMini color="red" fill="black" size={32}/>
      <Progress.Circle size={30} indeterminate={true} />
      
    </SafeAreaView>
  )
}