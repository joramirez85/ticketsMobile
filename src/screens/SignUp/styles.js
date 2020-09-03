import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputView: {
    width: '80%',
    backgroundColor: Colors.darkModerateBlue,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20
  },
  inputText: {
    height: 50,
    color: Colors.white
  },
  signupBtn: {
    width: '80%',
    backgroundColor: Colors.softRed,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10
  },
  signupText: {
    color: Colors.white
  }
})

export default styles
