import React, { Component } from 'react';
import { FlatList, View, YellowBox, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Modal from 'react-native-modal';
import CauaS1 from '../img/cauas1.png';
import Icon from 'react-native-vector-icons/AntDesign';
import AnimatedBar from "react-native-animated-bar";

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

export default class Status extends Component {
  state = {
    visible: false,
    progress: 0,
    userInfos: null
  }

  componentDidMount() {
    const interval = setInterval(() => {
      if (this.state.visible === true) {
        if (this.state.progress > 0.9) return clearInterval(interval);

        this.setState(state => {
          return {
            progress: state.progress + 0.1,
          };
        });
      }
    }, 100);
  }

  unableModal() {
    if (this.state.visible === true && this.state.progress >= 0.999) {
      setInterval(() => {
        this.setState({
          visible: false
        })
      }, 5000)
    }
  }

  
  render() {
    const status = this.props.status

    return (
      <View style={myStatus.container}>
        <TouchableOpacity>
          <View style={myStatus.myStatus}>
            <View style={myStatus.imgContainer}>
              <Image
                source={CauaS1}
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

        <View style={allStatus.AllStatusUpdate}>
          <View>
            <Text style={allStatus.recentText}>Viewed updates</Text>
          </View>

          <FlatList
            data={status}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <View>
                <View style={allStatus.statusContainer}>
                  <Image style={allStatus.img} source={item.photo} />
                  <TouchableOpacity onPress={() => {
                    this.setState({
                      visible: true,
                      userInfos: item
                    })
                  }}>
                    <View style={allStatus.infoContianer}>
                      <Text style={allStatus.names} > {item.name} </Text>
                      <Text style={allStatus.time} > {item.time} </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                  { this.unableModal() } 
              </View>
            )}
          />


          <Modal isVisible={this.state.visible} style={statusModal.container} backdropColor="black" customBackdrop="blur(0.8)">

            {this.state.userInfos && (
              <Image source={this.state.userInfos.photo} style={statusModal.status} />
            )}
            <View style={statusModal.header}>
              <View style={statusModal.bar}>
                <AnimatedBar
                  progress={this.state.progress}
                  height={1}
                  fillColor="gray"
                  barColor="#ccc"
                  borderRadius={5}
                  duration={5000}
                  borderWidth={0}
                />
              </View>
              <View style={statusModal.content}>
                <View style={statusModal.imgHeader}>
                  <Icon name="arrowleft" size={23} style={statusModal.icon} />
                  {this.state.userInfos && (
                    <Image source={this.state.userInfos.profileImg} style={statusModal.profileImg} />
                  )}
                </View>
                <View style={statusModal.aboutStatus}>
                  {this.state.userInfos && (
                    <Text style={statusModal.name}> {this.state.userInfos.name} </Text>
                  )}
                  {this.state.userInfos && (
                    <Text style={statusModal.time}> {this.state.userInfos.time} </Text>
                  )}
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>

    );
  }
}

const statusModal = StyleSheet.create({
  container: {
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    position: 'relative',
  },
  status: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain' //its sort of the like Object Fit: Cover
  },
  bar: {
    width: "95%",
    marginLeft: 7.5
  },
  header: {
    width: "100%",
    height: 60,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 10,
    left: 0
  },
  content: {
    flexDirection: 'row'
  },
  imgHeader: { //contaoinr
    width: 80,
    height: 60,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  icon: {
    color: "#ccc"
  },
  aboutStatus: {
    height: 60,
    marginLeft: 6,
    justifyContent: 'center',
  },
  name: {
    fontWeight: "bold",
    color: '#ccc',
    fontSize: 17
  },
  time: {
    color: '#ccc',
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc'
  },
})

//My status style
const myStatus = StyleSheet.create({
  container: {
    backgroundColor: "#101d25",
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

//allStatus Updates styles
const allStatus = StyleSheet.create({
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

  imgModal: {
    width: 310,
    height: 310,
    borderRadius: 10
  },

  modalContainer: {
    alignItems: "center",
    justifyContent: 'center'
  },
});




