export const login = ({navigation, credentials}) => {
  console.log('** login action')
  if (credentials.email === 'provider@test.com') {
    navigation.navigate('ProviderList')
  } else {
    navigation.navigate('CustomerList')
  }
}