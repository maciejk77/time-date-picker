import styled from 'styled-components';

const StyledDayPicker = styled.button`
  background-color: white;
  border: ${({ theme }) => `1px dotted ${theme.colors.base2}`};
  outline: none;
  padding-top: 5px;
`;

export default StyledDayPicker;
