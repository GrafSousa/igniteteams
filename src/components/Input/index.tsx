import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

export function Input({ ...rest }: TextInputProps) {
  const { colors } = useTheme();

  return <S.Container placeholderTextColor={colors['gray-300']} {...rest} />;
}
