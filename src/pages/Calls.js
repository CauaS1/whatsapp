import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
let ScreenHeight = Dimensions.get("window").height;

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Calls extends Component {
  render() {
    const call = this.props.calls

    return (
      <View style={callsStyle.container}>
        <FlatList
          data={call}
          keyExtractor={item => item.time}
          renderItem={({ item }) => (
            <View style={callsStyle.peopleContacts}>
              <View style={callsStyle.imgContainer}>
                <Image
                  style={callsStyle.imgs}
                  source={item.img}
                />
              </View>

              <TouchableOpacity style={callsStyle.callContainer}>
                <View>
                  <Text style={callsStyle.names}>{item.name}</Text>
                  <View style={callsStyle.data} >
                    <Icon name="call-received" size={18} color="#11b09c" />
                    <Text style={callsStyle.aboutCall}>{item.time}</Text>
                  </View>
                </View>
                <View style={callsStyle.iconContainer}>
                  <Icon name="call" style={callsStyle.icon} />
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

const callsStyle = StyleSheet.create({
  container: {
    backgroundColor: "#101d25",
    height: ScreenHeight - 125,  //see its the rigth thing after 
  },

  peopleContacts: {
    flexDirection: 'row',
    flex: 1,
    height: 80,
    padding: 10
  },

  callContainer: {
    height: 70,
    paddingBottom: 10,
    borderBottomWidth: 0.3,
    flexDirection: 'row',
    borderBottomColor: '#8c8c8c',
    width: "80%",
    justifyContent: "space-between",
    alignItems: 'center'
  },

  data: {
    flexDirection: 'row',
    margin: 1,
    width: 135,
    alignItems: 'center',
    justifyContent: 'space-between'
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

  imgContainer: {
    width: 50,
    height: 60,
    alignItems: "center",
    justifyContent: 'center',
    marginRight: 15
  },

  imgs: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  iconContainer: {
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 60,
  },

  icon: {
    color: '#11b09c',
    fontSize: 22
  }
});