/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NativeModules } from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {initPayment,RnVfPsdk} from "react-native-rn-vf-psdk";
import MyFancyLibrary from "react-native-my-fancy-library";

//import CalendarModuleFoo from 'react-native-my-library';

// const { CalendarModuleFoo } = ReactNative.NativeModules;

// const  { sampleMethod } = ReactNative.NativeModules;


const App = () => {
  return (
    <SafeAreaView>
   <Button title="press" onPress={async()=>{
     try {

      
       
      await MyFancyLibrary.sampleMethod('testName', 123,(msg)=>console.log(msg))
     } catch (error) {
       

      console.log(error)
     }
     }}>
    </Button>
    {/* <Button title="Hello" onPress={
      () => CalendarModuleFoo.checking()
    }>
    </Button> */}
    </SafeAreaView>
    

  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;