import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'primary' | 'secondary';

interface Props {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.colors['green-700'] : theme.colors['red-dark']};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme['font-size'].md}px;
    color: ${theme.colors.white};
    font-family: ${theme['font-family'].bold};
  `}
`;
