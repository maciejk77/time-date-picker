import styled from 'styled-components';

const StyledButton = styled.button`
  align-items: center;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.base2 : theme.colors.base3};
  border: none;
  border-radius: 30px;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.base1 : theme.colors.base0};
  display: flex;
  height: 40px;
  justify-content: center;
  outline: none;
  padding: 10px;
  width: 100px;
`;

export default StyledButton;
