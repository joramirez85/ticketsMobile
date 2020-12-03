import React from 'react'

export const Context = React.createContext()

export const initialState = {
  email: '',
  password: '',
  providers: []
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'handleChangeEmail':
      return { ...state, email: action.email }
    case 'handleChangePassword':
      return { ...state, password: action.password }
    case 'setProviders':
     return { ...state, providers: action.providers }
    default:
      return state
  }
}

