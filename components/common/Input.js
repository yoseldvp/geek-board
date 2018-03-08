import React, { Component } from 'react';
import {
  StyleSheet, 
  Text,
  TextInput,
  View,
} from 'react-native';

import { colors } from '../../styles';

export const SimpleInput = (props) => {
  return (
    <View style={ styles.wrapper }>
      <Text style={ styles.label } >{ props.name }</Text>
      <TextInput style={ styles.input } />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.baseLight,
    color: colors.lowRelevance,
    fontSize: 24
  },
  label: {
    color: colors.baseLight,
    fontSize: 12,
    marginLeft: 12,
  }, 
  wrapper: {
    paddingTop: 12,
  }
});