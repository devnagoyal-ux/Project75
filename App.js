import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginScreen from './screens/LoginScreen';
import readStoryScreen from './screens/readStoryScreen';
import writeStoryScreen from './screens/writeStoryScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  readStoryScreen: {screen: readStoryScreen},
  writeStoryScreen: {screen: writeStoryScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "readStoryScreen"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "writeStoryScreen"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);

const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen: LoginScreen},
  TabNavigator:{screen: TabNavigator}
  })

const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});