import React from 'react';
import StyledButton from './styles';

const Button = ({ children, onClick, disabled = false }) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {children} &gt;
  </StyledButton>
);

export default Button;
