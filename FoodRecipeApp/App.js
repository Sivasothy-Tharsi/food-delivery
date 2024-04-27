import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './navigation/Tabs';
import { Recipe } from './screens';
import { StatusBar } from 'react-native';
import { COLORS } from './constants';



const Stack = createNativeStackNavigator();

const App = () => {

    StatusBar.setBackgroundColor(COLORS.darkLime)
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown:false
            }} initialRouteName='Home'>
                <Stack.Screen name='Home' component={Tabs}/>
                <Stack.Screen name='Recipe' component={Recipe} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

