import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'

import Colors from '../../constants/Colors'
import styles from './styles'

export default class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      lastname: '',
      secondname: '',
      address: '',
      email: '',
      phone: ''
    }
  }

  handleSignUp = () => {
    console.log('asdasdsa')
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='Nombre...'
            placeholderTextColor={Colors.darkBlue}
            onChangeText={this.handleChangeEmail}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='Apellido Paterno...'
            placeholderTextColor={Colors.darkBlue}
            onChangeText={this.handleChangePassword}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='Apellido Materno...'
            placeholderTextColor={Colors.darkBlue}
            onChangeText={this.handleChangePassword}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='Direccion...'
            placeholderTextColor={Colors.darkBlue}
            onChangeText={this.handleChangePassword}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='Email...'
            placeholderTextColor={Colors.darkBlue}
            onChangeText={this.handleChangePassword}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='Telefono...'
            placeholderTextColor={Colors.darkBlue}
            onChangeText={this.handleChangePassword}
          />
        </View>
        <TouchableOpacity
          style={styles.signupBtn}
          onPress={this.handleLogin}
        >
          <Text style={styles.signupText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
