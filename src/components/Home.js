import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

// import { Container } from './styles';
//People

import Man3 from '../img/man3.jpg';
import Teen3 from '../img/teen3.jpg';
import Woman2 from '../img/woman2.jpg';
import Woman3 from '../img/woman3.jpg';
import Man1 from '../img/man1.jpg';
import Man2 from '../img/man2.jpg';
import Teen1 from '../img/teen1.jpg';
import Teen2 from '../img/teen2.jpg';
import Woman4 from '../img/woman4.jpg';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Home extends Component {
  render() {
    const { informations } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.peopleCont}>
          <TouchableOpacity>
            <Image
              style={styles.imgs}
              source={Man3}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.contact}>
            <Text style={styles.name}>{informations.names.name9}</Text>
            <View style={styles.conversation}>
              <Icon name="check-double" size={12} style={styles.icon} />
              <Text style={styles.text}>{informations.messages.msg9}</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.peopleCont}>
          <TouchableOpacity>
            <Image
              style={styles.imgs}
              source={Teen3}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.contact}>
            <Text style={styles.name}>{informations.names.name1}</Text>
            <View style={styles.conversation}>
              <Icon name="check-double" size={12} style={styles.icon} />
              <Text style={styles.text}>{informations.messages.msg1}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.peopleCont}>
          <TouchableOpacity>
            <Image
              style={styles.imgs}
              source={Woman2}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.contact}>
            <Text style={styles.name}>{informations.names.name2}</Text>
            <View style={styles.conversation}>
              <Icon name="check-double" size={12} style={styles.icon} />
              <Text style={styles.text}>{informations.messages.msg2}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.peopleCont}>
          <TouchableOpacity>
            <Image
              style={styles.imgs}
              source={Man1}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.contact}>
            <Text style={styles.name}>{informations.names.name3}</Text>
            <View style={styles.conversation}>
              <Icon name="check-double" size={12} style={styles.icon} />
              <Text style={styles.text}>{informations.messages.msg3}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.peopleCont}>
          <TouchableOpacity>
            <Image
              style={styles.imgs}
              source={Teen1}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.contact}>
            <Text style={styles.name}>{informations.names.name4}</Text>
            <View style={styles.conversation}>
              <Icon name="check-double" size={12} style={styles.icon} />
              <Text style={styles.text}>{informations.messages.msg4} </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.peopleCont}>
          <TouchableOpacity>
            <Image
              style={styles.imgs}
              source={Woman3}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.contact}>
            <Text style={styles.name}>{informations.names.name5} </Text>
            <View style={styles.conversation}>
              <Icon name="check-double" size={12} style={styles.icon} />
              <Text style={styles.text}>{informations.messages.msg5} </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.peopleCont}>
          <TouchableOpacity>
            <Image
              style={styles.imgs}
              source={Teen2}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.contact}>
            <Text style={styles.name}>{informations.names.name6}</Text>
            <View style={styles.conversation}>
              <Icon name="check-double" size={12} style={styles.icon} />
              <Text style={styles.text}>{informations.messages.msg6}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.peopleCont}>
          <TouchableOpacity>
            <Image
              style={styles.imgs}
              source={Man2}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.contact}>
            <Text style={styles.name}>{informations.names.name7}</Text>
            <View style={styles.conversation}>
              <Icon name="check-double" size={12} style={styles.icon} />
              <Text style={styles.text}>{informations.messages.msg7}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.peopleCont}>
          <TouchableOpacity>
            <Image
              style={styles.imgs}
              source={Woman4}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.contact}>
            <Text style={styles.name}>{informations.names.name8}</Text>
            <View style={styles.conversation}>
              <Icon name="check-double" size={12} style={styles.icon} />
              <Text style={styles.text}>{informations.messages.msg8}</Text>
            </View>
          </TouchableOpacity>
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

  conversation: {
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
  }
});





