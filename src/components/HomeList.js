import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';

const contactsList = props => {
  const InformationsAll = props.names.map((info, index) => {
    return (
      <View key={info.name} style={styles.peopleCont}>
        <TouchableOpacity onPressIn={() => {
          this.props.setState({
            visible: true,
            userInfos: info
          })
        }}
          onPressOut={() => {
            this.props.setState({
              visible: false
            })
          }}>
          <Image style={styles.imgs} source={info.img} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.contact}>
          <Text style={styles.name}> {info.name} </Text>
          <View style={styles.msgContainer}>
            <Icon name="check-double" size={12} style={styles.icon}  />
            <Text style={styles.text} key={index}> {info.msg} </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  })
  return InformationsAll
}

const styles = StyleSheet.create({
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


})


export default contactsList