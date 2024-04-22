import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import Colors from '../utils/Colors';
import AppFont from '../utils/Fonts';

export default function Header() {
    return (
        <View style={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileMainContainer}>
                <View style={styles.userInfoContainer}>
                    <View style={styles.userImageContainer}>
                        <Text style={[styles.userNameText, styles.boldText, { color: Colors.PRIMARY }, AppFont.medium]}>A</Text>
                    </View>
                    <View>
                        <Text style={styles.userNameText}>Welcome,</Text>
                        <Text style={[styles.userNameText, styles.boldText, AppFont.bold]}>Ahmed Ali</Text>
                    </View>
                </View>
                <MaterialIcons name="shopping-cart" size={24} color="white" />
            </View>
            {/* Search bar section */}
            <View style={styles.searchBarContainer}>
                <TextInput placeholder='Search' style={styles.searchBarInput} />
                <MaterialIcons name="search" size={24} color={Colors.PRIMARY} style={styles.searchButton} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    userImageContainer: {
        backgroundColor: Colors.WHITE,
        padding: 5,
        width: 40,
        height: 40,
        borderRadius: 99,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userNameText: {
        color: Colors.WHITE,
        fontSize: 20
    },
    boldText: {
        fontWeight: 'bold'
    },
    profileMainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchBarInput: {
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        width: '85%'
    },
    searchBarContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchButton: {
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 8
    }
});