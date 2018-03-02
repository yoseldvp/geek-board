import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import { PlainText, Title } from './components/common';
import { colors } from './styles';
import { Header } from './components/common';
import { GameFeed } from './components/gamesFeed';

export default class App extends Component {
  render() {
    return (
      <View style={ styles.app }>
        <Header></Header>
        <GameFeed></GameFeed>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: colors.accent,
    flex: 1,
    justifyContent: 'center',
  }
});