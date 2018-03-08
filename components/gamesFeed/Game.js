import React, { Component } from 'react';
import { 
  Dimensions,
  Image,
  ScrollView, 
  StyleSheet, 
  Text, 
  View } from 'react-native';

import { Title, Card } from '../common';
import { colors } from '../../styles';

import winner from './icons/winner.gif';
import looser from './icons/looser.gif';

export const Game = ({ session }) => {
  return (
    <Card>
      <View style={ styles.gameHeader }>
        <Title >{ session.game.name }</Title>
        <Text style={ styles.gameDate } >Played on { session.started.toLocaleDateString() }</Text>
      </View>
      <View style={ styles.gameImageWrapper }>
        <ScrollView decelerationRate={ 0 } 
          horizontal={ true } 
          showsHorizontalScrollIndicator={ false }
          snapToAlignment='center' 
          snapToInterval={ Dimensions.get('window').width } 
          styles={ styles.gameImageContainer }> 
          { session.images.map( (image, index) => 
            <Image 
              key={ index }
              style={ styles.gameImage }
              source={{ uri: image }}
              resizeMode='cover' />
          )}
        </ScrollView>
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
    </Card>
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
  badgeImageLooser: {
    tintColor: colors.alternate,
  },
  badgeImageWinner: {
    tintColor: colors.accent,
  },
  badgeLooser: {
    color: colors.alternate,
    fontWeight: 'bold',
  },
  badgeWinner: {
    color: colors.accentDark,
    fontWeight: 'bold',
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
    alignSelf: 'stretch',
    flex: 1,
    height: 300,
    overflow: 'hidden',
    width: Dimensions.get('window').width,
  },
  gameImageContainer: {
    height: 300,
  },
  gameImageWrapper: {
    borderBottomWidth: 2,
    borderColor: colors.baseLight,
    borderTopWidth: 2,
  },
  geekTag: {
    color: colors.accent,
  },
});