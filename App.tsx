import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { defaultTheme } from 'src/styles/themes/default';

import { Groups } from '@screens/Groups';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <Groups />
        <StatusBar style='dark' />
      </SafeAreaView>
    </ThemeProvider>
  );
}
