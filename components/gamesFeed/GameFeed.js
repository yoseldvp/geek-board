import React, { Component } from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';

import { Game } from './Game';

import Collections, { PersistenceService } from '../../model';

export class GameFeed extends Component {
  
  constructor (props) {
    super(props);
    this.sessionsService = new PersistenceService(Collections.sessions);
    this.state = { feed: [] };
    this.loadFeed();
  }

  loadFeed () {
    this.sessionsService.loadAll()
      .then(data => {
        const games = [];
        data.forEach(session => {
          games.push(session.data());
        });
        this.setState({ feed: games });
      })
      .catch(error => console.error(error))
  }

  render () {
    return(
      <FlatList data={ this.state.feed } 
        keyExtractor={ (item, index) => index.toString() }
        renderItem={ ({ item }) => 
          <Game session={ item } />
        } />
    );
  }
}