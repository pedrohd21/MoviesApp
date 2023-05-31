// import { Groups } from '@screens/Groups';
// import { NewGroup } from '@screens/NewGroup';
// import { Players } from '@screens/Players';

import { StatusBar, View } from 'react-native';
import { Filme } from './src/screens/Filme';



export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      <Filme />
    </View>
      
  );
}
