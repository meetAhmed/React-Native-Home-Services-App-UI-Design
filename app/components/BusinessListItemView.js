import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'

export default function BusinessListItemView({ business, showContentOnRight }) {
    return (
        <View style={[styles.container, showContentOnRight ? { flexDirection: "row" } : { flexDirection: 'column' }, showContentOnRight ? { marginBottom: 15 } : { marginBottom: 0 }]}>
            <Image source={business.image} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.businessText}>{business.name}</Text>
                <Text style={styles.personText}>{business.person.name}</Text>
                <Text style={styles.categoryText}>{business.category}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginEnd: 10,
        backgroundColor: Colors.WHITE,
        padding: 6,
        borderRadius: 10
    },
    image: {
        width: 160,
        height: 100,
        borderRadius: 10
    },
    businessText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    personText: {
        fontSize: 14,
        color: 'gray'
    },
    categoryText: {
        fontSize: 12,
        backgroundColor: Colors.PRIMARY_LIGHT,
        color: Colors.PRIMARY,
        borderRadius: 5,
        padding: 3,
        alignSelf: 'flex-start'
    },
    content: {
        padding: 7,
        gap: 3
    }
})