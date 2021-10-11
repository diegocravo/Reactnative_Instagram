import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Stories from '../Stories';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../img/logo.png')} style={styles.logo} />
        </TouchableOpacity>

        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('../img/add.png')} style={styles.send} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('../img/like.png')} style={styles.send} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('../img/send.png')} style={styles.send} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  send: {
    width: 25,
    height: 25,
  },
  rightIcons: {
    flexDirection: 'row',
  },
  icon: {
    paddingLeft: 20,
  },
});
