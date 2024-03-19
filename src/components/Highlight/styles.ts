import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme['font-size'].xl}px;
    font-family: ${theme['font-family'].bold};
    color: ${theme['colors'].white};
  `}
  text-align: center;
`;

export const Subtitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme['font-size'].md}px;
    font-family: ${theme['font-family'].regular};
    color: ${theme['colors']['gray-300']};
  `}
`;
