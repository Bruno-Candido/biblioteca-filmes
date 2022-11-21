import { StatusBar, NativeBaseProvider, Text } from 'native-base'

import { Search } from './src/screens/Search';
import { List } from './src/screens/List';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Search/>
    </NativeBaseProvider>
  );
}
