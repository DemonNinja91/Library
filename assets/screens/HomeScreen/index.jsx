import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput'

const HomeScreen = () => {
  return (
    <View>
    <CustomInput placeholder = {'Custom Text'} style={styles.CustomInput}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})