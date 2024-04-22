import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

// local
import Colors from '../utils/Colors';
import AppFont from '../utils/Fonts';

export default function ProfileScreen() {
  const menuList = [
    {
      key: 1,
      title: 'My Bookings',
      icon: 'shopping-cart'
    },
    {
      key: 2,
      title: 'Settings',
      icon: 'settings'
    },
    {
      key: 3,
      title: 'Logout',
      icon: 'logout'
    }
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View style={styles.userImageContainer}>
          <Text style={[styles.userNameIconText, styles.boldText, { color: Colors.PRIMARY }, AppFont.medium]}>A</Text>
        </View>
        <View>
          <Text style={[styles.userNameText, styles.boldText, AppFont.bold]}>Ahmed Ali</Text>
          <Text style={[styles.userNameText]}>aali.97@yahoo.com</Text>
        </View>
      </View>
      <View style={styles.content}>
        <FlatList
          data={menuList}
          renderItem={({ item }) => (
            <View style={styles.menuListItem}>
              <MaterialIcons name={item.icon} size={24} color={Colors.PRIMARY} />
              <Text style={styles.menuListItemText}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1
  },
  userInfoContainer: {
    alignItems: 'center',
    gap: 10,
    backgroundColor: Colors.PRIMARY,
    flex: 0.4,
    justifyContent: 'center'
  },
  userImageContainer: {
    backgroundColor: Colors.WHITE,
    padding: 5,
    width: 70,
    height: 70,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center'
  },
  userNameIconText: {
    color: Colors.WHITE,
    fontSize: 26,
    textAlign: 'center'
  },
  userNameText: {
    color: Colors.WHITE,
    fontSize: 20,
    textAlign: 'center'
  },
  boldText: {
    fontWeight: 'bold'
  },
  content: {
    padding: 30,
    flex: 0.6
  },
  menuListItem: {
    flexDirection: 'row',
    gap: 15,
    marginVertical: 10
  },
  menuListItemText: {
    color: Colors.BLACK,
    fontWeight: '500',
    fontSize: 18
  }
})