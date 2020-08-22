import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.containerr}>
        <Text style={styles.text}>Whatsapp</Text>
        <View style={styles.iconC}>
          <TouchableOpacity >
            <Icon name="search" size={18} color="#7e848a" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="ellipsis-v" size={18} color="#7e848a" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerr: {
    backgroundColor: '#232d36',
    padding: 5,
    width: "100%",
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    color: '#7e848a',
    padding: 15,
    paddingTop: 30
  },
  iconC: {
    flexDirection: 'row',
    margin: 30,
    marginTop: 36,
    height: 22,
    width: 63
  },
  icon: {
    marginLeft: 25,
    borderRadius: 10,
    padding: 3
  },
})

