import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

// local
import Colors from '../utils/Colors'

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/login.png')} style={styles.loginImage} />
            <View style={styles.subContainer}>
                <Text style={styles.subContainerTitle}>
                    Let's Find <Text style={styles.boldText}>Professional Cleaning and Repair</Text> Services
                </Text>
                <Text style={styles.subContainerSubTitle}>Best App To Find Services Near You which deliver Professional service.</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Let's Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column'
    },
    loginImage: {
        width: 300,
        resizeMode: 'cover',
        flex: 0.5,
        marginTop: 50
    },
    subContainer: {
        width: '100%',
        backgroundColor: Colors.PRIMARY,
        flex: 0.5,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20
    },
    subContainerTitle: {
        fontSize: 27,
        color: Colors.WHITE,
        textAlign: 'center'
    },
    boldText: {
        fontWeight: 'bold'
    },
    subContainerSubTitle: {
        fontSize: 17,
        color: Colors.WHITE,
        textAlign: 'center',
        marginTop: 20
    },
    button: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 99,
        marginTop: 40
    },
    buttonText: {
        color: Colors.PRIMARY,
        fontSize: 17,
        textAlign: 'center'
    }
})