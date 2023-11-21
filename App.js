import 'react-native-reanimated'
import { Provider } from 'react-redux'
import { store } from './store'
import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </Provider>
  );
}
