import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ============== Drawer Pages =======================
import About from './src/pages/Drawer/About';
import Profile from './src/pages/Drawer/Profile';
import Setting from './src/pages/Drawer/Setting';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Flashlist from './src/pages/Drawer/List';
import Image from './src/pages/Drawer/Image';
import Video from './src/pages/Drawer/Video';
import AudioRecord from './src/pages/Drawer/AudioRecord';
import ImageTofirebase from './src/pages/Drawer/ImageTofirebase';
import WebBrowserAndroid from './src/pages/Drawer/WebBrowserAndroid';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Drawer' component={DrawerNav} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

function DrawerNav() {
  return (

    <Drawer.Navigator>
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Flash" component={Flashlist} />
      <Drawer.Screen name="Image" component={Image} />
      <Drawer.Screen name="Video" component={Video} />
      <Drawer.Screen name="Audio" component={AudioRecord} />
      <Drawer.Screen name="ImageFirebase" component={ImageTofirebase} />
      <Drawer.Screen name="Browser" component={WebBrowserAndroid} />
      
    </Drawer.Navigator>
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
