import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

import { colors } from '../../styles';


export const Title = (props) => {
  return (
    <Text style={ styles.title }>{ props.children }</Text>
  );
}

export const Subtitle = (props) => {
  return (
    <Text style={ styles.subtitle }>{ props.children }</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.title,
    fontSize: 28,
  },
  subtitle: {
    color: colors.title,
    fontSize: 20,
  }
});