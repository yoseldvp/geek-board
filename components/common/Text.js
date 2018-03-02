import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

import { colors } from '../../styles';

export const PlainText = (props) => {
  return (
    <Text style={ styles.text }>{ props.children }</Text>
  );
};

export const Title = (props) => {
  return (
    <Text style={ styles.heading }>{ props.children }</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.baseComplement,
    fontSize: 14,
  },
  heading: {
    color: colors.alternate,
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Pixellari',
  }
});