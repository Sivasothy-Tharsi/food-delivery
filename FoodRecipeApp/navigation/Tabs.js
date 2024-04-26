import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home} from '../screens'
import { COLORS, icons } from '../constants';
import { TabIcon } from '../components';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarShowLabel: false,
      tabBarStyle:  {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: COLORS.white,
        borderTopColor: 'transparent',
        height: 70
      }
    }}>
        <Tab.Screen name='Home'component={Home}
        options={{
          tabBarIcon: ({focused})=>(
            <TabIcon focused={focused} icon={icons.home}/>
          ),
        }}
        />
        <Tab.Screen name='Search' component={Home}
        options={{
          tabBarIcon: ({focused})=>(
            <TabIcon focused={focused} icon={icons.favourite1}/>
          )
        }}
        />
        <Tab.Screen name='Bookmark' component={Home}
        options={{
          tabBarIcon: ({focused})=>(
            <TabIcon focused={focused} icon={icons.shoppingcart1}/>
          )
        }}
        />
        <Tab.Screen name='Settings' component={Home}
        options={{
          tabBarIcon: ({focused})=>(
            <TabIcon focused={focused} icon={icons.notification1}/>
          )
        }}
        />
    </Tab.Navigator>
  )
}

export default Tabs

