import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// local
import Heading from './Heading'
import Colors from '../utils/Colors'
import AppFont from '../utils/Fonts'

export default function Category() {
    const nav = useNavigation();

    const categories = [
        {
            key: 1,
            name: "Cleaning",
            image: require('../../assets/images/mop.png'),
        },
        {
            key: 2,
            name: "Painting",
            image: require('../../assets/images/paintbrush.png'),
        },
        {
            key: 3,
            name: "Shifting",
            image: require('../../assets/images/cargo-truck.png'),
        },
        {
            key: 4,
            name: "Repairing",
            image: require('../../assets/images/support.png'),
        }
    ]

    return (
        <View>
            <Heading title={'Categories'} showViewAll={true} />
            <FlatList
                numColumns={4}
                data={categories}
                renderItem={({ item, index }) => index < 4 && (
                    <TouchableOpacity style={styles.container} onPress={() => { nav.push('category-details', { category: item }) }}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon} source={item.image} />
                        </View>
                        <Text style={[AppFont.medium]}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    iconContainer: {
        backgroundColor: Colors.LIGHT_GRAY,
        flexDirection: 'row',
        marginEnd: 10,
        padding: 15,
        borderRadius: 99
    },
    icon: {
        width: 30,
        height: 30
    }
})