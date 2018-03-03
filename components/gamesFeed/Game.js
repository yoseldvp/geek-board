import React, { Component } from 'react';
import { 
  Image,
  ScrollView, 
  StyleSheet, 
  Text, 
  View } from 'react-native';

import { colors } from '../../styles';

import winner from './icons/winner.gif';
import looser from './icons/looser.gif';

export const Game = ({ session }) => {
  return (
    <View style={ styles.container } >
      <View style={ styles.gameHeader }>
        <Text style={ styles.gameTitle } >{ session.game.name }</Text>
        <Text style={ styles.gameDate } >Played on { session.started.toLocaleDateString() }</Text>
      </View>
      <View style={ styles.gameImageContainer }>
        { session.images.map((image, key) =>
          <Image 
            key={ key }
            style={ styles.gameImage }
            source={{ uri: image }}
            resizeMode='cover' />
        )}
      </View>
      <View style={ styles.gameDetails }>
        <Text style={ styles.gameDetailsText } >
          { session.geeks.map((geek, key) => <GeekTag key={ key } name={ geek.tag }/>) }
         played for 43 minutes.
        </Text>
        { session.geeks.map((geek, key) => {
          if (geek.score.type === 'win/loose' && geek.score.value === 'win') {
            return <WinnerBadge key={ key } name={ geek.tag } />
          } else {
            return <LooserBadge key={ key } name={ geek.tag } />
          }
        }) }
      </View>
    </View>
  );
}

const GeekTag = ({ name, customStyle }) => {
  return (
    <Text style={ [styles.geekTag, customStyle]  }>@{ name }</Text>
  );
}

const Badge = ({ name, image, style, tagStyle }) => {
  return (
    <View style={ styles.badge } ><Image source={ image } style={ [styles.badgeImage, style ] } /><GeekTag name={ name } customStyle={ tagStyle } /></View>
  );
}

const WinnerBadge = ({ name }) => {
  return (
    <Badge name={ name } image={ winner } style={ styles.badgeImageWinner } tagStyle={ styles.badgeWinner } />
  );
}

const LooserBadge = ({ name }) => {
  return (
    <Badge name={ name } image={ looser } style={ styles.badgeImageLooser } tagStyle={ styles.badgeLooser } />
  );
}

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 18,
    marginTop: 4,
  },
  badgeImage: {
    height: 18,
    marginRight: 4,
    width: 18,
  },
  badgeWinner: {
    color: colors.accentDark,
    fontWeight: 'bold',
  },
  badgeLooser: {
    color: colors.alternate,
    fontWeight: 'bold',
  },
  
  badgeImageWinner: {
    tintColor: colors.accent,
  },
  badgeImageLooser: {
    tintColor: colors.alternate,
  },
  container: {
    backgroundColor: colors.text,
    borderRadius: 4,
    margin: 12,
    marginTop: 0,
    shadowColor: colors.accentDark,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1, 
    shadowRadius: 2,
  },
  gameDate: {
    color: colors.lowRelevance,
    fontSize: 11,
  },
  gameDetails: {
    padding: 12,
  },
  gameDetailsText: {
    color: colors.baseComplement,
  },
  gameHeader: {
    padding: 12,
  },
  gameImage: {
    flex: 1,
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  gameImageContainer: {
    height: 300
  },
  gameTitle: {
    color: 'black',
    fontFamily: 'DEADMEAL',
    fontSize: 32,
    fontWeight: 'bold',
  },
  geekTag: {
    color: colors.accent,
  },
});