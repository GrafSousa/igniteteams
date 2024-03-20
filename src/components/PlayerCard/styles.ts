import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.colors['gray-500']};

  flex-direction: row;
  align-items: center;

  border-radius: 6px;

  margin-bottom: 16px;
`;

export const Name = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme['font-size'].md}px;
    color: ${theme.colors['gray-200']};
    font-family: ${theme['font-family'].regular};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors['gray-200'],
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
