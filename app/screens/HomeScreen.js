import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet
} from 'react-native'

// local
import Header from '../components/Header'
import Slider from '../components/Slider'
import Category from '../components/Category'
import BusinessView from '../components/BusinessView'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Slider />
        <Category />
        <BusinessView />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  content: {
    padding: 20
  }
})