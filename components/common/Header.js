import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Title } from '.';
import { colors } from '../../styles';

export const Header = (props) => {
  return(
    <View style={ styles.header }>
      <Text style={ styles.link }>Ranks</Text>
      <Text style={ [styles.link, styles.linkActive ] }>Game Feed</Text>
      <Text style={ styles.link }>Sessions</Text>
    </View>
  );
}

export const styles = StyleSheet.create({  
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 28,
    paddingBottom: 14,
  },
  link: {
    color: colors.accentDark,
    fontFamily: 'DEADMEAL',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 28,
    shadowColor: colors.accentComplement,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8, 
    shadowRadius: 0,
  },
  linkActive: {
    color: colors.text,
    shadowColor: colors.base,
  }
});
