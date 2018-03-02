import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

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
        <Image 
          style={ styles.gameImage }
          source={{ uri: 'https://tibs2.threeifbyspace.net/wp-content/uploads/2014/11/7wonders_1.jpg' }}
          resizeMode='cover' />
      </View>
      <View style={ styles.gameDetails }>
        <Text style={ styles.gameDetailsText } >
          <GeekTag name='yoseldvp'/>, <GeekTag name='nevilleflynn'/>, <GeekTag name='darthvader'/>, <GeekTag name='Chewbaca'/> played for 43 minutes.
        </Text>
        <WinnerBadge name='nevilleflynn' />
        <LooserBadge name='darthvader' />
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