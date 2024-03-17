import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import { Groups } from '@screens/Groups';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Groups />
      <StatusBar style='dark' />
    </SafeAreaView>
  );
}
