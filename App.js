// imports
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";
import { createStackNavigator } from '@react-navigation/stack';


// importing the screen
import HomeScr from "./screens/home.js";
import ResScr from "./screens/result.js";


// creating a stack of screens;
const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScr} 
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "red"
            },
          })}
        />
        <Stack.Screen
          name="Download"
          component={ResScr}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "red"
            },
          })}          
        />
        </Stack.Navigator>
      </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default App;
