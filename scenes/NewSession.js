import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import { Card, Title } from '../components/common';
import { ChooseGame, SelectGeeks } from './newsession';

export default class NewSession extends Component { 
  render () {
    return (
      <NewSessionNavigator />
    );
  }
}

export const CreateSession = (props) => {
  return (
    <Card styles={ [styles.container] }>
      <Button title='Game' onPress={ () => props.navigation.navigate('ChooseGame') }></Button>
      <Button title='Participants' onPress={ () => props.navigation.navigate('SelectGeeks') }></Button>
    </Card>
  );
}

const NewSessionNavigator = StackNavigator({
  CreateSession: {
    screen: CreateSession,
    navigationOptions: {
      title: 'New Session'
    }
  },
  ChooseGame: ChooseGame,
  SelectGeeks: SelectGeeks,
});

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});
