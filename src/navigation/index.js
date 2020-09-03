import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login/Login'
import SignUp from '../screens/SignUp/SignUp'
import ProviderList from '../screens/ProviderList/ProviderList'
import CustomerList from '../screens/CustomerList/CustomerList'
import RequestDetails from '../screens/RequestDetails/RequestDetails'
import ServiceDetails from '../screens/ServiceDetails/ServiceDetails'

export default function Navigation () {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createStackNavigator()

function RootNavigator () {
  return (
    <Stack.Navigator
      initialRouteName='Login'
    >
      <Stack.Screen options={{headerShown: false, title: 'Inicio'}} name='Login' component={Login} />
      <Stack.Screen options={{title: 'Registrar'}} name='SignUp' component={SignUp} />
      <Stack.Screen options={{title: 'Lista de Proveedores'}} name='ProviderList' component={ProviderList} />
      <Stack.Screen options={{title: 'Lista de Servicios'}} name='CustomerList' component={CustomerList} />
      <Stack.Screen options={{title: 'Servicio'}} name='RequestDetails' component={RequestDetails} />
      <Stack.Screen options={{title: 'Detalles de Servicio'}} name='ServiceDetails' component={ServiceDetails} />
    </Stack.Navigator>
  )
}
