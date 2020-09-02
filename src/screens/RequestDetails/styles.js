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
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.softRed,
    marginBottom: 40,
    paddingLeft: 20,
    paddingTop: 20
  },
  label: {
    fontWeight: 'bold',
    fontSize: 12,
    color: Colors.softRed
  },
  button: {
    // alignItems: 'center',
    marginBottom: 10,
    width: '100%'
  },
  labelText: {
    color: Colors.white,
    paddingLeft: 10
  },
  requestBtn: {
    width: '80%',
    backgroundColor: Colors.softRed,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 30
  },
  requestText: {
    color: Colors.white
  },
  containerBtn: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputView: {
    width: '95%',
    backgroundColor: Colors.white,
    borderRadius: 25,
    height: 80,
    marginTop: 15,
    marginBottom: 10,
    // marginLeft: 10,
    // marginRight: 5,
    justifyContent: 'flex-end',
    padding: 20
  },
  textArea: {
    height: 80,
    color: Colors.grey
  }
})

export default styles
