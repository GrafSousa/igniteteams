import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { defaultTheme } from 'src/styles/themes/default';

import { Loading } from '@components/Loading';

import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        {fontsLoaded ? <Routes /> : <Loading />}

        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
      </>
    </ThemeProvider>
  );
}
