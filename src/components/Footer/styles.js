import styled from 'styled-components';

export const StyledFooter = styled.div`
  align-items: center;
  border: ${({ theme }) => `1px dotted ${theme.colors.base2}`};
  display: flex;
  font-family: ${({ theme }) => theme.fonts.base2};
  justify-content: space-between;
  margin-top: 5px;
  padding: 10px;
  padding-right: 15px;
  width: ${({ theme }) => `${theme.width.base - 13}px`};
`;

export const Row = styled.div`
  margin: 5px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
