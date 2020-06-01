import * as React from 'react';
import { Text, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './src/components/Home';
import Header from './src/components/Header';
import Status from './src/components/Status';
import Calls from './src/components/Calls';

function HomeScreen() {
  return (
    <ScrollView >
      <Home informations={info} />
    </ScrollView>
  );
}

function StatusScreen() {
  return (
    <ScrollView>
      <Status informations={info} />
    </ScrollView>
  );
}

function CallScreen() {
  return (
    <ScrollView>
      <Calls informations={info} />
    </ScrollView>
  );
}

const info = {
  names: {
    name1: 'Mike',
    name2: 'Maggie',
    name3: 'Omar',
    name4: 'Sophie',
    name5: 'Lilly',
    name5: 'Manuella',
    name6: 'Luke',
    name7: 'William',
    name8: 'Lian',
    name9: 'Michael'
  },

  messages: {
    msg1: 'Ok!',
    msg2: 'Where ?',
    msg3: 'CSGO today ?',
    msg4: 'At Central Park ok ?',
    msg5: 'Lol',
    msg6: 'My dog is asking the link',
    msg7: 'Wtf hahah',
    msg8: 'See you tomorrow',
    msg9: 'Above is her number'
  },

}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#01ac9a',
        inactiveTintColor: '#7e848a',
        indicatorStyle: {
          backgroundColor: '#10ac9a'
        },
        style: {
          backgroundColor: "#232d36",
        }
      }} >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Calls" component={CallScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


