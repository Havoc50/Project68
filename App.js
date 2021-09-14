import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import FbScreen from './screens/fb'
import InScreen from './screens/in'

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: FbScreen,
  Instagram: InScreen
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      
      routeName
    //  const routeName = navigation.routeName;
     const routeName = navigation.state.routeName;
    //  const routeName = navigation.state;
    //  const routeName = state.routeName.navigation;
       
    
      if(routeName === "FbStory"){
        return(
          <Image
         //source={require("assets/write.png")}
         // source={require("./write.png")}
         // source={require("./assets/write.png")}
         // source={require("write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "InStory"){
        return(
          <Image
          // source={require("./read.png")}
          // source={require("read.png")}
          // source={require("./assets")}
          // source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
  )

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
