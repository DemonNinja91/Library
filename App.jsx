import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import COLOR from './src/assets/Colors'

const App = () => {
  return (
    <View>

      <StatusBar barStyle={"dark-content"} backgroundColor={COLOR.background} />
      <HomeScreen />

    </View>
  )
}

export default App

const styles = StyleSheet.create({

})