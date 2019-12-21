import 'react-native-gesture-handler'

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './components/LoginScreen';

export default class App extends Component {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" backgroundColor="#fff" />
                <AppContainer />
            </>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        LoginScreen: { screen: LoginScreen },
    },
    {
        initialRouteName: 'LoginScreen',
    }
);

const AppContainer = createAppContainer(AppNavigator);