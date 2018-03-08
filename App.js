import React, { Component } from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import { Feed, GeekProfile, NewSession } from './scenes';
import { colors } from './styles';

const ProfileButton = ({ focused }) => {
  return (
    <View style={ [ styles.linkContainer, focused ? styles.linkContainerActive : '' ] }>
      <Text style={ [ styles.link, focused ? styles.linkActive : '' ] }>Profile</Text>
    </View>
  );
}

const RanksButton = ({ focused }) => {
  return (
    <View style={ [ styles.linkContainer, focused ? styles.linkContainerActive : '' ] }>
      <Text style={ [ styles.link, focused ? styles.linkActive : '' ] }>RANKS</Text>
    </View>
  );
}

const FeedButton = ({ focused }) => {
  return (
    <View style={ [ styles.linkContainer, focused ? styles.linkContainerActive : '' ] }>
      <Text style={ [styles.link, focused ? styles.linkActive : '' ] }>FEED</Text>
    </View>
  );
}

const SessionButton = ({ focused }) => {
  return (
    <View style={ [ styles.linkContainer, focused ? styles.linkContainerActive : '' ] }>
      <Text style={ [styles.link, focused ? styles.linkActive : '' ] }>NEW SESSION</Text>
    </View>
  );
}

const MainNavigator = TabNavigator({
  Feed: { 
    screen: Feed,
    navigationOptions: {
      tabBarIcon: ({ focused }) => <FeedButton focused={ focused } />,
    }
  },
  Ranks: { 
    screen: GeekProfile,
    navigationOptions: {
      tabBarIcon: ({ focused }) => <RanksButton focused={ focused } />,
    }
  },
},
{
  animationEnabled: true,
  tabBarPosition: 'top',
  tabBarOptions: {
    showLabel: false,
    style: { 
      height: 24,
      backgroundColor: colors.accent,
      borderBottomColor: colors.accentLight,
      borderBottomWidth: 1,
      borderTopColor: 'transparent',
      padding: 24,
    },
  },
  swipeEnabled: true,
});

export default App = (props) => {
  return (
    <Navigator />
  )
}

export const MainScene = (props) => {
  return (
    <View style={ styles.mainView }>
      <View style={ styles.appTitleContainer } >
        <Text style={ styles.appTitle }>GeekBoard</Text>
      </View>
      <MainNavigator />
      <Button title='+' onPress={ () => props.navigation.navigate('Create') } />
    </View>
  );
} 

const Navigator = StackNavigator({
  Feed: { 
    screen: MainScene
  }, 
  Create: {
    screen: NewSession
  },
}, {
  headerMode: 'none',
  initialRouteName: 'Feed',
});


const styles = StyleSheet.create({  
  appTitle: {
    color: colors.text,
    fontFamily: 'DEADMEAL',
    fontSize: 32,
  },
  appTitleContainer: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    height: 54,
    justifyContent: 'center',
    paddingTop: 32,
  },
  link: {
    color: colors.text,
    fontSize: 11,
    marginBottom: 6,
    marginLeft: 18,
    marginRight: 18,
    marginTop: 6,
  },
  linkActive: {
    color: colors.text,
  },
  linkContainer: {
    borderRadius: 8,
    padding: 12,
    position: 'absolute',
  },
  linkContainerActive: {
    padding: 0,
    backgroundColor: colors.accentDark,
    borderBottomWidth: 1,
    borderBottomColor: colors.accentLight,
    borderRightWidth: 1,
    borderRightColor: colors.accentLight,
  },
  mainView: {
    backgroundColor: colors.base,
    flex: 1,
  }
});
