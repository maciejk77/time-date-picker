import styled from 'styled-components';
import { DAY } from '../../constants';

const StyledPicker = styled.div`
  display: flex;
  flex-wrap: ${({ type }) => (type === DAY ? 'nowrap' : 'wrap')};
  overflow: auto;
  width: ${({ theme }) => `${theme.width.base}px`};
}};
`;

export default StyledPicker;
