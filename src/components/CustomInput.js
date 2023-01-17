import React from 'react'
import {
  Keyboard,
  StyleSheet,
  TextInput,
  View
} from 'react-native'
import COLOR from '../assets/Colors'



const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  iconName,
  isEnable = true,
  autoFocus = false,
  inputType = 'default',
  multiline = false,
  numberofLines = 1,
  inputStyle,
  style,
  type= "PRIMARY"
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoFocus={autoFocus}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={[styles.input, styles[`input_${inputStyle}`, styles[`container_${type}`]], style]}
        secureTextEntry={secureTextEntry}
        editable={isEnable}
        keyboardType={inputType}
        multiline={multiline}
        numberOfLines={numberofLines}
      />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
    
  },
  input: {
    width: "100%",
    paddingHorizontal: 10,
    color: 'black',
  },
  input_Multiline: {
    textAlignVertical: 'top'
  },
  container_PRIMARY:{
    backgroundColor: '#000',

    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5.46,
    elevation: 9,
  }
})