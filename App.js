import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './src/pages/Home';
import Status from './src/pages/Status';
import Calls from './src/pages/Calls';

import Header from './src/components/Header';

/* PROFILES IMGS */

import Man3 from './src/img/man3.jpg';
import Teen3 from './src/img/teen3.jpg';
import Woman2 from './src/img/woman2.jpg';
import Woman3 from './src/img/woman3.jpg';
import Man1 from './src/img/man1.jpg';
import Man2 from './src/img/man2.jpg';
import Teen1 from './src/img/teen1.jpg';
import Teen2 from './src/img/teen2.jpg';
import Woman4 from './src/img/woman4.jpg';

/*STATUS IAMGES*/

import TimeSquare from './src/images/timesquare.jpg';
import MiamiBeach from './src/images/miamibeach.jpg';
import Kawasaki from './src/images/kawasaki.jpg';
import Concert from './src/images/concert.jpg';
import Soldier from './src/images/soldier.jpg';
import Friends from './src/images/friends.jpg'


function HomeScreen() {
  return (
    <Home informations={info} />
  );
}

function StatusScreen() {
  return (
    <Status status={status} />
  );
}

function CallScreen() {
  return (
    <Calls calls={call} />
  );
}

const info = [ //Informations
  {
    name: 'Mike',
    msg: 'Ok!',
    img: Man1,
    id: 1,
  },
  {
    name: 'Omar',
    msg: 'Where ?',
    img: Teen2,
    id: 2,
  },
  {
    name: 'Maggie',
    msg: 'CSGO today ?',
    img: Woman2,
    id: 3,

  },
  {
    name: 'Sophia',
    msg: 'At Central Park ok ?',
    img: Woman3,
    id: 4,
  },
  {
    name: 'Luke',
    msg: 'Lol',
    img: Man2,
    id: 5,

  },
  {
    name: 'Manuella',
    msg: 'Wtf hahah',
    img: Teen1,
    id: 6,
  },
  {
    name: 'Michael',
    msg: 'Ok!',
    img: Man3,
    id: 7,
    oder: "Seven"
  },
  {
    name: 'Willian',
    msg: 'Above is her number',
    img: Teen3,
    id: 8,

  },
  {
    name: 'Lian',
    msg: 'See you tomorrow!',
    img: Woman4,
    id: 9,

  },
]

const status = [ //Status
  {
    name: 'Mike',
    time: '2h ago',
    photo: TimeSquare,
    profileImg: Man1
  },
  {
    name: 'Willian',
    time: '10m ago',
    photo: MiamiBeach,
    profileImg: Teen2
  },
  {
    name: 'Luke',
    time: '16h ago',
    photo: Soldier,
    profileImg: Man2

  },
  {
    name: 'Maggie',
    time: '10h ago',
    photo: Kawasaki,
    profileImg: Woman2
  },
  {
    name: 'Lian',
    time: '1m ago',
    photo: Friends,
    profileImg: Woman4

  },
  {
    name: 'Manuella',
    time: '12h ago',
    photo: Concert,
    profileImg: Teen1
  },
]

const call = [ //Calls
  {
    name: 'Maggie',
    time: 'August 18, 17:18',
    img: Woman2,
    answered: true
  },
  {
    name: 'Omar',
    time: 'August 15, 10:00',
    img: Teen2,
    answered: true
  },
  {
    name: 'Maggie',
    time: 'August 15, 06:25',
    img: Woman2,
    answered: false
  },
  {
    name: 'Sophia',
    time: 'August 10, 12:15',
    img: Woman3,
    answered: true
  },
  {
    name: 'Luke',
    time: 'August 05, 17:35',
    img: Man2,
    answered: false
  },
];


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

