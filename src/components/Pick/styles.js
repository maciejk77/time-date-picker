import styled from 'styled-components';

const StyledPick = styled.div`
  align-items: center;
  background-color: ${({ theme, disabled, selected }) => {
    if (disabled) return theme.colors.base2;
    if (selected) return theme.colors.base1;
  }};
  border: ${({ theme, disabled, selected }) => {
    if (!disabled && !selected) return `2px solid ${theme.colors.base1}`;
    if (disabled) return `2px solid ${theme.colors.base4}`;
    if (selected) return `2px solid ${theme.colors.base1}`;
  }};
  color: ${({ theme, disabled, selected }) => {
    if (disabled) return theme.colors.base4;
    if (selected) return theme.colors.base0;
  }};
  display: flex;
  height: 40px;
  justify-content: center;
  margin: 0 5px 5px 0;
  padding: 10px;
  min-width: 40px;
`;

export default StyledPick;
