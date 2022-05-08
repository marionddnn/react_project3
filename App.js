import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch } from "react-redux";
import List from './components/List';
import Navigation from './components/Navigation';
import store from "./store";
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist';

let persistor = persistStore(store);


export default function App() {
  return (
    <>
     <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation></Navigation>
      </PersistGate>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
