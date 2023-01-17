import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'
import COLOR from '../../assets/Colors'


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}> Component Page</Text>
      </View>
      <ScrollView>
      <CustomInput placeholder={'Custom Text'} style={styles.CustomInput} />

      </ScrollView>


    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: COLOR.background
  },
  headingContainer: {
    backgroundColor: COLOR.background,
    marginBottom:20
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    color: COLOR.text,
    fontWeight: '600',
  },
  CustomInput: {
    height: 50,
    width: '100%',
    borderColor: COLOR.borderColor,
    borderWidth: 1,
    borderRadius: 10
  }
})