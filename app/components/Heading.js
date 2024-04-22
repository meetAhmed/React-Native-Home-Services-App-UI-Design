import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// local
import AppFont from '../utils/Fonts'

export default function Heading({ title, showViewAll }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.heading, AppFont.bold]}>{title}</Text>
            {showViewAll && <Text style={[styles.subHeading, AppFont.medium]}>View All</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    heading: {
        fontSize: 16,
        marginVertical: 10
    },
    subHeading: {
        fontSize: 15,
        marginVertical: 10
    }
})