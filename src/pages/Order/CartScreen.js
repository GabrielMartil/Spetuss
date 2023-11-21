import { View,Text,StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import COLORS from '../../consts/colors';
import { useNavigation } from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/Ionicons';
import foods from '../../consts/foods';
import React, { useMemo, useState } from 'react'



export default function CartScreen() {
  const restaurant = foods.restaurants[0];
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* top button */}
      <View style={styles.cartCard}>
        <TouchableOpacity
          style={styles.header}
          onPress={navigation.goBack}>
          <Icon2 name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
      </View>
      {/* dishes */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50
       }}
       style={{
        backgroundColor: 'white', // Cor de fundo branca
        paddingTop: 5,
       }}
       >
            {
                restaurant.dishes.map((dish, foods) =>{
                    return (
                        <View key={foods} 
                        style={styles.dishContainer}>
                            <Text style={{color: COLORS.orange, fontWeight:"bold" , fontSize: 15}}> 2x </Text>
                            <Text style={{flex:1, color: COLORS.primary, fontWeight:"bold", fontSize: 20}}>{dish.name}</Text>
                            <Text style={{color: COLORS.green, fontWeight: '600', fontSize: 16, marginHorizontal:5}}>R${dish.price}</Text>
                            <TouchableOpacity 
                                style={styles.menus}>
                                <Icon2 name="remove" strokeWidth={2} size={20} color={COLORS.white} />
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </ScrollView>
    {/* totals */}
    <View style={styles.container5}>
            <View style={styles.spaceY}>
                <Text style={styles.text2}>Subtotal</Text>
                <Text style={styles.text2}>R$ 20</Text>
            </View>
            <View style={styles.spaceY}>
                <Text style={styles.text2}>Garçom</Text>
                <Text style={styles.text2}>R$ 20</Text>
            </View>
            <View style={styles.spaceY}>
                <Text style={styles.text3}>Order Total</Text>
                <Text style={styles.text3}>R$ 20</Text>
            </View>
            <View>
                <TouchableOpacity 
                style={[styles.button, { backgroundColor: COLORS.primary }]} 
                onPress={()=> navigation.navigate('PreparingOrder')} >
                    <Text style={styles.buttonText}>Place Order</Text>
                </TouchableOpacity>
            </View>
       </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: COLORS.primary, // Replace with your actual theme color
    borderRadius: 999, // A large value for a circular button
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cartCard: {
    paddingTop: 10, 
    shadowRadius: 999, 
    elevation: 2,
    width:37,
    marginHorizontal:10,
  },
  text:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    width:100,
  },
  text2:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    width:100,
    color: COLORS.white
  },
  text3:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    width:100,
    fontWeight:800,
  },
  dishContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menus:{
    padding: 1,
    borderRadius: 999,
    backgroundColor: COLORS.primary,
    strokeWidth: 2,
  },
  button: {
    padding: 15,
    borderRadius: 999, // A large value for a circular shape
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  container5: {
    padding: 10,
    paddingHorizontal: 8,
    borderTopLeftRadius: 20, // A value for rounded top-left corner
    borderTopRightRadius: 20, // A value for rounded top-right corner
    backgroundColor: COLORS.grey2
  },
  spaceY: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10, // Space between child elements
  },
});