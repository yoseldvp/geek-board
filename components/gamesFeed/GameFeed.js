import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

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
      <ScrollView>
        { this.state.feed.map((session, key) => <Game key={ key } session={ session } />) }
      </ScrollView>
    );
  }
}