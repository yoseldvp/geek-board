import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import { PlainText, Title } from '../components/common';
import { Header } from '../components/common';
import { GameFeed } from '../components/gamesFeed';

import { colors } from '../styles';

export default class Feed extends Component {
  render() {
    return (
      <View style={ styles.main }>
        <GameFeed></GameFeed>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  }
});