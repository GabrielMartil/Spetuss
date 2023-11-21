import { StyleSheet, Text, View, FlatList} from 'react-native';


import Header from '../../components/Header'
import Actions from '../../components/Actions';
import Sroll from '../../components/table_orders';
import BasketIcon from '../../components/shoppingcart';

export default function Home() {
  return (
    
    <View style={styles.container}>
      <Header/>
      <Actions/>
      <Sroll/>
      <BasketIcon/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});