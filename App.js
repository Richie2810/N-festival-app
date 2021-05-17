import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { selectUser } from './src/store/user/selectors'
import Header from './src/components/Header.js'
import Login from './src/components/Login';
import store from "./src/store";
import Options from './src/components/Options'
import Test from './src/components/Test'

function App() {
  const user = useSelector(selectUser)
  console.log('the users token is"', user.token)

  return (
    <>
      <Header />
      {user.token === null ? <Login /> : <Options />}
    </>
  )
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
