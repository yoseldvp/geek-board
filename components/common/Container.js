import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { colors } from '../../styles';

export const Card = (props) => {
  const additionalStyles = props.styles ? props.styles : [''];
  return (
    <View style={ [styles.container, ...additionalStyles] }>
      { props.children }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
});