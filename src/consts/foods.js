
export const foods = {
  id: 1,
  title:'',
  description:'',
  categories:[
    {
      id: '1',
      name: 'Budweiser',
      price: '8.30',
      title: 'Cervejas',
      //image: require('../assets/budweiser.png'),
    },
    {
      id: '2',
      name: 'Maminha',
      price: '7.10',
      title: 'Espetinhos',
      //image: require('../assets/cheesePizza.png'),
    },
    {
      id: '3',
      name: 'Ypióca Amarela',
      price: '5.10',
      title: 'Destilados',
      //image: require('../assets/chickenBurger.png'),
    },
    {
      id: '4',
      name: 'Bolinha de Queijo',
      price: '9.55',
      title: 'Petiscos',
      //image: require('../assets/sushiMakizushi.png'),
    },
  
  ], 
  restaurants:[
    {
      id: 1,
      name: 'Papa Johns',
      //image: require('../assets/images/pizza.png'),
      description: 'Hot and spicy pizzas',
      lng: -85.5324269,
      lat: 38.2145602,
      address: '434 second street',
      stars: 4,
      reviews: '4.4k',
      category: 'Fast Food',
      dishes:[
        {
          id: '1',
          name: 'Budweiser',
          price: '8.30',
          title: 'Cervejas',
          //image: require('../assets/budweiser.png'),
        },
        {
          id: '2',
          name: 'Maminha',
          price: '7.10',
          title: 'Espetinhos',
          //image: require('../assets/cheesePizza.png'),
        },
        {
          id: '3',
          name: 'Ypióca Amarela',
          price: '5.10',
          title: 'Destilados',
          //image: require('../assets/chickenBurger.png'),
        },
        {
          id: '4',
          name: 'Bolinha de Queijo',
          price: '9.55',
          title: 'Petiscos',
          //image: require('../assets/sushiMakizushi.png'),
        },
      ]
    }
  ]
};

export default foods;
