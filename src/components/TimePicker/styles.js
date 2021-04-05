import styled from 'styled-components';

const StyledTimePicker = styled.button`
  background-color: ${({ theme }) => theme.colors.base0};
  border: ${({ theme }) => `1px dotted ${theme.colors.base2}`};
  outline: none;
`;

export default StyledTimePicker;
