import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// import { Container } from './myStatus';

import Teen3 from '../img/teen3.jpg';

import TimeSquare from '../images/timesquare.jpg';
import MiamiBeach from '../images/miamibeach.jpg';
import Kawasaki from '../images/kawasaki.jpg';
import Concert from '../images/concert.jpg';
import Soldier from '../images/soldier.jpg';
import Friends from '../images/friends.jpg' 

export default class Status extends Component {
  render() {
    const { informations } = this.props;

    return (
      <ScrollView style={myStatus.container}>
        <TouchableOpacity>
          <View style={myStatus.myStatus}>
            <View style={myStatus.imgContainer}>
              <Image
                source={Teen3}
                style={myStatus.img}
              />
              <View style={myStatus.more}>
                <Text style={myStatus.button}>+</Text>
              </View>
            </View>
            <View style={myStatus.textContainer}>
              <Text style={myStatus.status}>My status</Text>
              <Text style={myStatus.update}>Tap to add status update</Text>
            </View>
          </View>
        </TouchableOpacity>



        <View style={AllStatus.AllStatusUpdate}>
          <View>
            <Text style={AllStatus.recentText}>Recent updates</Text>
          </View>
          <View style={AllStatus.statusContainer}>
            <Image
              source={TimeSquare}
              style={AllStatus.img}
            />
            <TouchableOpacity>
              <View style={AllStatus.infoContianer}>
                <Text style={AllStatus.names}>{informations.names.name4}</Text>
                <Text style={AllStatus.time}>1 hour ago</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={AllStatus.statusContainer}>
            <Image
              source={MiamiBeach}
              style={AllStatus.img}
            />
            <TouchableOpacity>
              <View style={AllStatus.infoContianer}>
                <Text style={AllStatus.names}>{informations.names.name3}</Text>
                <Text style={AllStatus.time}> 48 minutes ago </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>



        <View style={AllStatus.AllStatusUpdate}>
          <View>
            <Text style={AllStatus.recentText}> Viewed updates</Text>
          </View>
          <View style={AllStatus.statusContainer}>
            <Image
              source={Kawasaki}
              style={AllStatus.img}
            />
            <TouchableOpacity>
              <View style={AllStatus.infoContianer}>
                <Text style={AllStatus.names}>{informations.names.name7}</Text>
                <Text style={AllStatus.time}>Today, 10:17</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={AllStatus.AllStatusUpdate}>
          <View style={AllStatus.statusContainer}>
            <Image
              source={Concert}
              style={AllStatus.img}
            />
            <TouchableOpacity>
              <View style={AllStatus.infoContianer}>
                <Text style={AllStatus.names}>{informations.names.name2}</Text>
                <Text style={AllStatus.time}>Yesterday, 23:21</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={AllStatus.AllStatusUpdate}>
          <View style={AllStatus.statusContainer}>
            <Image
              source={Soldier}
              style={AllStatus.img}
            />
            <TouchableOpacity>
              <View style={AllStatus.infoContianer}>
                <Text style={AllStatus.names}>{informations.names.name9}</Text>
                <Text style={AllStatus.time}>20 minutes ago</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={AllStatus.AllStatusUpdate}>
          <View style={AllStatus.statusContainer}>
            <Image
              source={Friends}
              style={AllStatus.img}
            />
            <TouchableOpacity>
              <View style={AllStatus.infoContianer}>
                <Text style={AllStatus.names}>{informations.names.name5}</Text>
                <Text style={AllStatus.time}>57 minutes ago</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

//My status style
const myStatus = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "#101d25",
    height: "100%"
  },

  imgContainer: {
    width: 55,
    height: 55,
    position: 'relative'
  },

  img: {
    width: 55,
    height: 55,
    borderRadius: 35
  },

  more: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#1dad9f",
    position: 'absolute',
    top: 33,
    left: 35,
  },

  button: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 5,
    marginTop: -4
  },
  /*End img config*/

  myStatus: {
    flexDirection: 'row',
    margin: 10
  },

  textContainer: {
    margin: 8,
    marginLeft: 10,
  },

  update: {
    color: "#8c8c8c",
    fontSize: 14
  },

  status: {
    color: "#b7babe",
    fontWeight: 'bold',
    fontSize: 17
  },
});

//AllStatus Updates styles
const AllStatus = StyleSheet.create({
  AllStatusUpdate: {
    margin: 5,
    marginLeft: 10,
  },

  recentText: {
    color: '#8c8c8c',
    fontWeight: 'bold'
  },

  statusContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 2
  },

  img: {
    width: 55,
    height: 55,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#9397a0',
  },

  infoContianer: {
    margin: 8,
    marginLeft: 10, 
    width: 280,
  },

  names: {
    color: "#b7babe",
    fontWeight: 'bold',
    fontSize: 17
  },

  time: {
    color: "#8c8c8c",
    fontSize: 14
  },
});



