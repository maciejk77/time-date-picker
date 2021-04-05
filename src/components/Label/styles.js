import styled from 'styled-components';

const StyledLabel = styled.h3`
  font-family: ${({ theme }) => theme.fonts.base2};
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin-bottom: 10px;
  padding-left: 5px;
  text-align: left;
`;

export default StyledLabel;
