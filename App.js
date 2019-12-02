import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import React from 'react';
import DetailsScreen from './src/screens/DetailsScreen'
import { BlogProvider } from './src/context/BlogContext'
import { MenuProvider } from 'react-native-popup-menu';
import BackButton from './src/components/BackButton'

// renders app
const navigator = createStackNavigator(
  {
    //HomeScreen
    Home: {
    screen: props => <HomeScreen {...props} />,
      navigationOptions: ({ navigation}) => ({
        headerTransparent: true,
      }),
      
      
    },
    // Topic screen
    Details: {
      screen: DetailsScreen,
      navigationOptions: ({ navigation}) => ({
        headerBackImage: <BackButton navigation={navigation}/>,
        headerTransparent: {
          headerTransparent: true,
          position: 'absolute',
          zindex: 100, 
          top:0, 
          left: 0, 
          right:0
        }
        //headerTransparent: true,
        
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

