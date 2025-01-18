import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/Home/HomeScreen'
import RepositoryDetailsScreen from '../Screens/Details/DetailsScreen';
import FavouriteScreen from '../Screens/Favourite/FavouriteScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={RepositoryDetailsScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;