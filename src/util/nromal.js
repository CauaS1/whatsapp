/*import React, { Component, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

//People



import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Home extends Component {
  state = {
    visible: false,
    userInfos: null
  }

  namesFunction() {
    const InformationsAll = this.props.informations.map((info) => {
      return (
        <View key={this.state.info.name} style={styles.peopleCont}>
          <TouchableOpacity onPress={() => {
            this.setState({
              visible: true,
              userInfos: info
            })
          }}>
            <Image style={styles.imgs} source={info.img} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.contact}>
            <Text style={styles.name}> {info.name} </Text>
            <View style={styles.msgContainer}>
              <Icon name="check-double" size={12} style={styles.icon} />
              <Text style={styles.text} key={info.name}> {info.msg} </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    })
    return InformationsAll;
  }

  render() {
    return (
      <ScrollView style={styles.container}>


        <Modal isVisible={this.state.visible} style={styles.modal}>
          <View style={styles.modalContainer}>
          <Text> {this.state.userInfos} </Text>
          </View>
        </Modal>

        <View>
          {this.namesFunction()}
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101d25",
    width: '100%',
    height: '100%'
  },

  peopleCont: {
    flexDirection: 'row',
    flex: 1,
    height: 80,
    padding: 10
  },

  contact: {
    padding: 12, //Here is where have the border bottom
    paddingTop: 1,
    borderBottomWidth: 0.3,
    borderBottomColor: '#8c8c8c',
    width: "85%",
  },

  msgContainer: {
    flexDirection: 'row',
    padding: 5
  },

  name: {
    color: '#b7babe',
    fontWeight: "bold",
    fontSize: 16,
  },

  text: {
    color: 'gray',
    paddingTop: 5
  },

  imgs: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  icon: {
    paddingTop: 8,
    paddingRight: 8,
    color: '#3588b8',
  },

  modalContainer: {
    alignItems: "center",
    justifyContent: 'center'
  },
});





*/