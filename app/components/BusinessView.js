import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

// local 
import Heading from './Heading'
import BusinessListItemView from './BusinessListItemView'

export default function BusinessView() {
    const businessList = [
        {
            key: 1,
            name: "House Cleaning",
            person: {
                name: "Jenny Wilson"
            },
            category: 'Cleaning',
            image: require('../../assets/images/business1.jpg'),
        },
        {
            key: 2,
            name: "Painting",
            person: {
                name: "Emma Poter"
            },
            category: 'Cleaning',
            image: require('../../assets/images/business2.jpg'),
        },
        {
            key: 3,
            name: "Washing Clothes",
            person: {
                name: "Jack Shell"
            },
            category: 'Cleaning',
            image: require('../../assets/images/business3.jpg'),
        },
    ]

    return (
        <View style={styles.container}>
            <Heading title={'Latest Business'} showViewAll={true} />
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={businessList}
                renderItem={({ item }) => (
                    <BusinessListItemView business={item} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    }
})