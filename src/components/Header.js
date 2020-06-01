import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// import { Container } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <View style={styles.containerr}>
      <Text style={styles.text}>Whatsapp</Text>
      <View style={styles.iconC}>
        <TouchableOpacity>
          <Icon name="search" size={18} color="#7e848a" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ellipsis-v" size={18} color="#7e848a" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
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
    height: 19,
    width: 63
  },
  icon: {
    marginLeft: 30,
    borderRadius: 10,
  }
})


export default Header;