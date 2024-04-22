import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    FlatList
} from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';

// local
import BusinessListItemView from '../components/BusinessListItemView'

export default function CategoryDetails() {
    const params = useRoute().params;
    const nav = useNavigation();

    const businessList = [
        {
            name: "House Cleaning",
            person: {
                name: "Jenny Wilson"
            },
            category: 'Cleaning',
            image: require('../../assets/images/business1.jpg'),
        },
        {
            name: "Painting",
            person: {
                name: "Emma Poter"
            },
            category: 'Cleaning',
            image: require('../../assets/images/business2.jpg'),
        },
        {
            name: "Washing Clothes",
            person: {
                name: "Jack Shell"
            },
            category: 'Cleaning',
            image: require('../../assets/images/business3.jpg'),
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButtonContainer} onPress={() => { nav.goBack() }}>
                <MaterialIcons name="arrow-back" size={24} color="black" />
                <Text style={styles.backButtonText}>{params.category.name}</Text>
            </TouchableOpacity>
            <View style={styles.content}>
                <FlatList
                    data={businessList}
                    renderItem={({ item }) => (
                        <BusinessListItemView business={item} showContentOnRight={true} />
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    backButtonContainer: {
        flexDirection: 'row',
        gap: 15,
        marginTop: 10,
        marginHorizontal: 10,
        alignItems: 'center'
    },
    backButtonText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    content: {
        padding: 20
    }
})