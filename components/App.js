import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createSwitchNavigator, createDrawerNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import Register from './Register.js';
import ContinueWithPassword from './ContinueWithPassword.js';
import CreateAccount from './CreateAccount.js';
import Home from './Home.js';
import Service from './Service.js';
import ServicePreview from './ServicePreview.js';
import ViewAccount from './ViewAccount.js';
import BecomeASeller from './BecomeASeller.js';
import AuthLoadingScreen from './AuthLoadingScreen.js';


class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>

          <Image
            source={require('../image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />

        </TouchableOpacity>
      </View>
    );
  }
}



const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing

  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  ViewAccount: {
    screen: ViewAccount,
    navigationOptions: {
      drawerLabel: 'Your Account',
    },
  },

});

const AuthStack = createStackNavigator({
  Register: {
    screen: Register,
    navigationOptions: ({ navigation }) => ({
      title: 'Servus',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#000000',
    }),
  },
  ContinueWithPassword: {
    screen: ContinueWithPassword,
    navigationOptions: ({ navigation }) => ({
      title: 'Servus',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#000000',
    }),
  },
  CreateAccount: {
    screen: CreateAccount,
    navigationOptions: ({ navigation }) => ({
      title: 'Servus',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#000000',
    }),
  },
})

const AppStack = createStackNavigator({
  Home: {
    screen: DrawerNavigatorExample,
    navigationOptions: ({ navigation }) => ({
      title: 'Servus',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#000000',
    }),
  },
  Service: {
    screen: Service,
    navigationOptions: ({ navigation }) => ({
      title: 'Servus',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#000000',
    }),
  },
  ViewAccount: {
    screen: ViewAccount,
    navigationOptions: ({ navigation }) => ({
      title: 'Servus',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#000000',
    }),
  },
  BecomeASeller: {
    screen: BecomeASeller,
    navigationOptions: ({ navigation }) => ({
      title: 'Servus',
      //headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#000000',
    }),
  },
});

const switchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack,
},
{
  initialRouteName: 'AuthLoading',
})

export default createAppContainer(switchNavigator);
