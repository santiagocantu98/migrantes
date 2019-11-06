import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import { Image } from 'react-native';
import React, { Component } from 'react';
import {Button} from 'react-native'
import RenderFlag from './src/components/RenderFlag';
import DetailsScreen from './src/screens/DetailsScreen'
import { BlogProvider } from './src/context/BlogContext'
import AppHeader from './src/components/AppHeader';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions:  {
      title: 'XXXXXX',
      headerTitleStyle: { 
        color: '#e3e3e3',
      },
      headerRight:  <RenderFlag />,
      headerStyle: {
        backgroundColor:"#ccccccff",
      }
    },
    headerLayoutPreset: 'center',
    
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <BlogProvider>
          <App />
        </BlogProvider>
}