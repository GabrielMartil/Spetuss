import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../../consts/colors';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../../slices/basketSlice'

export default function BasketIcon() {
  const navigation = useNavigation();
  const basketItems = useSelector(selectBasketItems);
  if(!basketItems.length) return null;
  return (
    <View style={styles.container}>
        <TouchableOpacity
          onPress={()=> navigation.navigate('Order')} 
          style={{backgroundColor: COLORS.primary, ...styles.info}}>
            <View style={{backgroundColor: COLORS.grey ,...styles.container2}}>
              <Text style={styles.text}>{3}</Text>
            </View>
            <Text style={styles.text}>
                Pedidos
            </Text>
            <Text style={styles.text}>
                ${23}
            </Text>
        
        </TouchableOpacity>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    bottom: 1, // bottom-5
    width: '100%', // w-full
    
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 40,
    borderRadius: 999, // A large value for a fully rounded container
    padding: 16, // Padding on all sides
    paddingTop: 12, // Additional top padding
    shadowColor:'#000',
    marginVertical:85,
    marginTop:10,
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    
  },
  container2: {
    padding: 2, // p-2
    paddingHorizontal: 10, // px-4
    borderRadius: 999, // rounded-full (use a large value for full rounding)
    alignItems:'center'
  },
  text: {
    fontWeight: '800', // font-extrabold
    color: 'white', // text-white
    fontSize: 15, // text-lg (adjust the size based on your design)
  },
});

