import 'styled-components/native';
import { defaultTheme } from 'src/styles/themes/default';

declare module 'styled-components/native' {
  type ThemeType = typeof defaultTheme;

  export interface DefaultTheme extends ThemeType {}
}
