import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import { Image } from 'react-native';
import React, { Component } from 'react';
import DetailsScreen from './src/screens/DetailsScreen'
import { BlogProvider } from './src/context/BlogContext'
import { MenuProvider } from 'react-native-popup-menu';
import BackButton from './src/components/BackButton'


const navigator = createStackNavigator(
  {
    Home: {
    screen: props => <HomeScreen {...props} />,
      navigationOptions: ({ navigation}) => ({
        headerTransparent: true,
      }),
      
      
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: ({ navigation}) => ({
        headerBackImage: <BackButton navigation={navigation}/>,
        headerTransparent: true,
      })
    }
    
  },
  {
    initialRouteName: 'Home', 
  }
);

const App = createAppContainer(navigator);

export default () => {
  return ( 
      <MenuProvider skipInstanceCheck>
        <BlogProvider>
          <App />
        </BlogProvider>
      </MenuProvider>
  )
}

