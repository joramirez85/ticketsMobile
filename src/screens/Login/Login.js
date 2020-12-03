import React, { useContext } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { Context } from '../../store'

import Colors from '../../constants/Colors'
import {login} from '../../actions/LoginActions'
import styles from './styles'

const Login = (props) => {
  const { store, dispatch } = useContext(Context)

  handleChangeEmail = (email) => {
    dispatch({
      type: 'handleChangeEmail',
      email: email
    })
  }
  
  handleChangePassword = (password) => {
    dispatch({
      type: 'handleChangePassword',
      password: password
    })
  }

  handleLogin = () => {
    console.log('** handleLogin: ', store)
    const { navigation } = props
    const credentials = {
      email: store.email,
      password: store.password
    }
    login({navigation, credentials})
  }

  handleSignUp = () => {
    props.navigation.navigate('SignUp')
  }

  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>CleanHouse</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder='Email...'
          placeholderTextColor={Colors.darkBlue}
          onChangeText={handleChangeEmail}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder='Contraseña...'
          placeholderTextColor={Colors.darkBlue}
          onChangeText={handleChangePassword}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={handleLogin}
      >
        <Text style={styles.loginText}>Iniciar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.loginText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
