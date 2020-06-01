import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Man3 from '../img/man3.jpg';
import Teen1 from '../img/teen1.jpg';
import Man2 from '../img/man2.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Woman4 from '../img/woman4.jpg';

export default class Calls extends Component {
  render() {
    const { informations } = this.props;

    return (
      <ScrollView style={calls.container}>
        <View style={calls.peopleContacts}>
          <Image
            style={calls.imgs}
            source={Man3}
          />

          <TouchableOpacity style={calls.callContainer}>
            <Text style={calls.names}>{informations.names.name9}</Text>
            <View style={calls.allCalls} >
              <Icon name="call-received" size={18} color="#11b09c" />
              <Text style={calls.aboutCall}>May 31, 15:37</Text>
            </View>
          </TouchableOpacity>
          <Icon name="call" style={calls.icon} />
        </View>

        <View style={calls.peopleContacts}>
          <Image
            style={calls.imgs}
            source={Man3}
          />

          <TouchableOpacity style={calls.callContainer}>
            <Text style={calls.names}>{informations.names.name9}</Text>
            <View style={calls.allCalls} >
              <Icon name="call-received" size={18} color="#ff505a" />
              <Text style={calls.aboutCall}>(5) May 28, 23:15</Text>
            </View>
          </TouchableOpacity>
          <Icon name="call" style={calls.icon} />
        </View>

        <View style={calls.peopleContacts}>
          <Image
            style={calls.imgs}
            source={Teen1}
          />

          <TouchableOpacity style={calls.callContainer}>
            <Text style={calls.names}>{informations.names.name4}</Text>
            <View style={calls.allCalls} >
              <Icon name="call-received" size={18} color="#11b09c" />
              <Text style={calls.aboutCall}>May 27, 23:55</Text>
            </View>
          </TouchableOpacity>
          <Icon name="call" style={calls.icon} />
        </View>

        <View style={calls.peopleContacts}>
          <Image
            style={calls.imgs}
            source={Teen1}
          />

          <TouchableOpacity style={calls.callContainer}>
            <Text style={calls.names}>{informations.names.name4}</Text>
            <View style={calls.allCalls} >
              <Icon name="call-received" size={18} color="#ff405a" />
              <Text style={calls.aboutCall}>(5)May 28, 09:18</Text>
            </View>
          </TouchableOpacity>
          <Icon name="call" style={calls.icon} />
        </View>

        <View style={calls.peopleContacts}>
          <Image
            style={calls.imgs}
            source={Teen1}
          />

          <TouchableOpacity style={calls.callContainer}>
            <Text style={calls.names}>{informations.names.name4}</Text>
            <View style={calls.allCalls} >
              <Icon name="call-received" size={18} color="#ff405a" />
              <Text style={calls.aboutCall}>(5) May 27, 08:55</Text>
            </View>
          </TouchableOpacity>
          <Icon name="call" style={calls.icon} />
        </View>

        <View style={calls.peopleContacts}>
          <Image
            style={calls.imgs}
            source={Man2}
          />

          <TouchableOpacity style={calls.callContainer}>
            <Text style={calls.names}>{informations.names.name7}</Text>
            <View style={calls.allCalls} >
              <Icon name="call-received" size={18} color="#11b09c" />
              <Text style={calls.aboutCall}>May 22, 14:01</Text>
            </View>
          </TouchableOpacity>
          <Icon name="call" style={calls.icon} />
        </View>

        <View style={calls.peopleContacts}>
          <Image
            style={calls.imgs}
            source={Woman4}
          />

          <TouchableOpacity style={calls.callContainer}>
            <Text style={calls.names}>{informations.names.name8}</Text>
            <View style={calls.allCalls} >
              <Icon name="call-received" size={18} color="#ff405a" />
              <Text style={calls.aboutCall}>May 21, 18:48</Text>
            </View>
          </TouchableOpacity>
          <Icon name="call" style={calls.icon} />
        </View>
      </ScrollView>
    );
  }
}

const calls = StyleSheet.create({
  container: {
    backgroundColor: "#101d25",
    width: '100%',
    height: '100%'
  },

  peopleContacts: {
    flexDirection: 'row',
    flex: 1,
    height: 80,
    padding: 10
  },

  callContainer: {
    padding: 12, //Here is where have the border bottom
    paddingTop: 1,
    borderBottomWidth: 0.3,
    borderBottomColor: '#8c8c8c',
    width: "85%",
    justifyContent: "space-between"
  },

  allCalls: {
    flexDirection: 'row',
    margin: 1
  },

  names: {
    flexDirection: 'row',
    padding: 5,
    color: "#b7babe",
    fontWeight: 'bold',
    fontSize: 17
  },

  aboutCall: {
    fontSize: 15,
    color: "#8c8c8c"
  },

  imgs: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  icon: {
    color: '#11b09c',
    marginLeft: -25,
    marginTop: 10,
    fontSize: 22
  }
});