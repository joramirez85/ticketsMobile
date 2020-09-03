import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'

import Colors from '../../constants/Colors'
import {login} from '../../actions/LoginActions'
import styles from './styles'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChangeEmail = (email) => {
    this.setState({
      email
    })
  }
  
  handleChangePassword = (password) => {
    this.setState({
      password
    })
  }

  handleLogin = () => {
    console.log('** handleLogin')
    const { navigation } = this.props
    const credentials = {
      email: this.state.email,
      password: this.state.password
    }
    login({navigation, credentials})
  }

  handleSignUp = () => {
    this.props.navigation.navigate('SignUp')
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>CleanHouse</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='Email...'
            placeholderTextColor={Colors.darkBlue}
            onChangeText={this.handleChangeEmail}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder='Contraseña...'
            placeholderTextColor={Colors.darkBlue}
            onChangeText={this.handleChangePassword}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={this.handleLogin}
        >
          <Text style={styles.loginText}>Iniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleSignUp}>
          <Text style={styles.loginText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
