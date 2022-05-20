/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text, TouchableOpacity,
} from "react-native";
import AppCenterCrash from "appcenter-crashes";

const App: () => Node = () => {

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={AppCenterCrash.generateTestCrash}>
        <Text style={styles.text}>
          Produce Crash
        </Text>
      </TouchableOpacity>
      <Text>This is feature 1</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 button: {
   paddingVertical: 10,
   backgroundColor:'green',
   justifyContent: "center",
 },
  text:{
   color: 'white',
    textAlign: 'center'
  }
});

export default App;
