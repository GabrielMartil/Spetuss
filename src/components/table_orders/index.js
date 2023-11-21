import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemsById } from '../../slices/basketSlice';


const CartCard = ({ item }) => {
  const [number, setNumber] = useState(0);
  const minusClickFunction = () => {
    setNumber(number - 1 > 0 ? number - 1 : 0);
  };

  const plusClickFunction = () => {
    setNumber(number + 1);
  };
  
  return (
    <View style={styles.cartCard}>
      <View style={{ height: 90, marginLeft: 5, paddingVertical: 20,paddingHorizontal: 5, flex: 1 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
        <Text style={{ fontSize: 15,fontWeight: 'bold', color: COLORS.grey}}>{item.price} </Text>
      </View>
      <View style={{ marginRight: 1,marginTop: 10, alignItems:'center' }}>
        <View style={styles.actionBtn}>
          <TouchableOpacity onPress={minusClickFunction}>
            <Icon2 name="trash" size={20} style={styles.menosBtn} color={COLORS.white} />
          </TouchableOpacity>
            <TextInput
              style={styles.input}
              value={number.toString()}
              placeholder="0"
              keyboardType="numeric"
              onChangeText={(text) => setNumber(parseInt(text) || 0)}
            />
          <TouchableOpacity onPress={plusClickFunction}>
            <Icon name="add" size={25} style={styles.maisBtn} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const YourComponent = () => {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={styles.header}></View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={foods.categories}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default YourComponent;

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    
  },
  cartCard: {
    height: 60,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 85,
    height: 30,
    backgroundColor: COLORS.white,
    elevation: 15,
    borderRadius: 5,
    paddingHorizontal: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  menosBtn: {
    color: COLORS.red,
    alignItems: 'center',
    margin: 4,
  },
  maisBtn: {
    color: COLORS.green,
    alignItems: 'center',
    margin: 2,
  },
  input: {
    color: COLORS.primary,
    textAlign: 'center', // Alinha o texto no centro horizontalmente
    fontSize: 15, // Ajusta o tamanho da fonte conforme necessário
    flex: 1, // Garante que o TextInput ocupe o máximo de espaço disponível
  },
  content:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8,
  },
});
