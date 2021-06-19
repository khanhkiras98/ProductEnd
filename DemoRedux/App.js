import React from 'react'
import AppNavigator from 'react-navigation/native'
import { Provider as StoreProvider } from 'react-redux'
import store from './src/redux/store'

// modify the App component
export default function App() {
  return (
    <StoreProvider store={store}>

        <AppNavigator />

    </StoreProvider>
  )
}