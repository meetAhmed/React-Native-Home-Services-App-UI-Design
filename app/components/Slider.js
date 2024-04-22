import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import Heading from './Heading'

export default function Slider() {
    const sliders = [
        require('../../assets/images/Slider1.png'),
        require('../../assets/images/Slider2.png')
    ]

    return (
        <View>
            <Heading title={'Offers for you'} />
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={sliders}
                keyExtractor={({ item, index }) => index}
                renderItem={({ item }) => (
                    <View style={styles.sliderImageContainer}>
                        <Image source={item} style={styles.sliderImage} resizeMode='contain' borderRadius={20} />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sliderImage: {
        width: 278,
        height: 125
    },
    sliderImageContainer: {
        marginEnd: 15
    }
})