import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LandingPage } from '../pages/LandingPage/LandingPage';
import { PodcastList } from '../pages/PodcastList/PodcastList';

const { Navigator } = createStackNavigator();

const Stack = createStackNavigator();

export function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LandingPage" component={LandingPage} />
                <Stack.Screen name="PodcastList" component={PodcastList} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;