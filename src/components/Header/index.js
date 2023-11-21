import React from 'react'
import { 
  View,
  StyleSheet,
  StatusBar,
  Image
} from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 0 : 15;

export default function Header({ name }){
  return(
    <View style={styles.container}>
      <StatusBar backgroundColor= "black" barStyle="light-content" />
      <Image
        style={{
          width: 60,
          height: 60,
        }}
        source={require('./assets/logo.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 20,
    paddingEnd: 20,
    paddingBottom: 10,
  },
  content:{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})