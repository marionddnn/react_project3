import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch } from "react-redux";
import List from './components/List';
import Navigation from './components/Navigation';
import store from "./store";
//import Search from './components/Search';


export default function App() {
  return (
    <>
     <Provider store={store}>
        <Navigation></Navigation>
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
