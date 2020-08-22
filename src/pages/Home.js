import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, FlatList, YellowBox } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

export default class Home extends Component {
  state = {
    visible: false,
    userInfos: null //Na primeira vez, quando clica, ele vai como null dps substituido por "info"
  }

  render() {
    const informations = this.props.informations

    return (
      <View style={styles.container}>
        <FlatList
          data={informations}
          keyExtractor={item => item.id.toString()} //the key need to be a STRING
          renderItem={({ item }) => ( //We can only pass "ITEM" 
            <View style={styles.peopleCont}>
              <TouchableOpacity onPressIn={() => {
                this.setState({
                  visible: true,
                  userInfos: item
                })
              }}
                onPressOut={() => { this.setState({ visible: false }) }}
              >
                <Image style={styles.imgs} source={item.img} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.contact}>
                <Text style={styles.name}> {item.name} </Text>
                <View style={styles.msgContainer}>
                  <Icon name="check-double" size={12} style={styles.icon} />
                  <Text style={styles.text} > {item.msg} </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />

        <Modal isVisible={this.state.visible} >
          <View style={styles.modalContainer}>
            {this.state.userInfos && (
              <Image source={this.state.userInfos.img} style={styles.imgModal} />
            )} 
          </View>
        </Modal>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101d25",
    flex: 1
  },
  imgModal: {
    width: "100%",
    height: 310,
    borderRadius: 10
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: 'center',
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
});





