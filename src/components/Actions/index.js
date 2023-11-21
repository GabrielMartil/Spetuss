import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { AntDesign } from '@expo/vector-icons'

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

     <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.labelButton}>Cervejas</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.labelButton}>Espetinhos</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.labelButton}>Destiladas</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.labelButton}>Peticos</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.labelButton}>Guarnições</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.labelButton}>Sucos</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.labelButton}>Refrigerantes</Text>
     </TouchableOpacity>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    maxHeight: 40,
    marginBottom:5,
    marginTop: 10,
    paddingEnd: 10,
    paddingStart: 10,
  },
  actionButton:{
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 50,
    width: 100,
    height: 30,
    marginRight: 20,
    marginVertical: 1,
    
  },
  areaButton:{
    height: 10,
    width: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelButton:{
    fontSize: 15,
    color: 'white',
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})