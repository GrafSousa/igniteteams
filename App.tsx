import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { defaultTheme } from 'src/styles/themes/default';

import { Groups } from '@screens/Groups';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        {fontsLoaded ? <Groups /> : <ActivityIndicator />}

        <StatusBar style='dark' />
      </SafeAreaView>
    </ThemeProvider>
  );
}
