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
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: Colors.softRed,
    marginBottom: 40
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
  forgot: {
    color: Colors.white,
    fontSize: 11
  },
  loginBtn: {
    width: '80%',
    backgroundColor: Colors.softRed,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 30
  },
  loginText: {
    color: Colors.white
  }
})

export default styles
