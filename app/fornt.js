import React,{useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import App from './Login'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();
const Front = () => {
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Front">
    <Stack.Screen name="Front" component={Front} />
    <Stack.Screen name="App" component={App} />
  </Stack.Navigator>
</NavigationContainer>
  useEffect(() => {
    // Set a timeout to navigate to ScreenB after 3000 milliseconds (3 seconds)
    const timeoutId = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    // Clear the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timeoutId);
  }, [navigation]);

 
  return (
    <View style={styles.main}>
      <Text style={styles.dyeingApp}>Dyeing App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dyeingApp: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'white',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    animationName: 'glow',
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
  },
});

export default Front;
