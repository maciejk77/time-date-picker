import React, { useContext } from 'react';
import { isActiveSlot } from '../../helpers';
import { DAY, TIME } from '../../constants';
import { Store } from '../../Store';
import StyledPick from './styles';

const Pick = ({ data, value, onClick, type, children }) => {
  const { state } = useContext(Store);

  // think how to start with selected first day
  // const firstItem = (state.days && state.days[0] === data) || false;

  // need to simplify that
  const disabled = type !== DAY && !isActiveSlot(value);

  const selectedItem = (stateItem, key) =>
    stateItem ? value === stateItem[key] : false;

  const selectedDay = selectedItem(state.selectedDay, DAY);
  const selectedTime = selectedItem(state.selectedTime, TIME);

  const selected = selectedDay || selectedTime;

  return (
    <StyledPick
      disabled={disabled}
      onClick={disabled ? null : () => onClick(data)}
      // isFirstItem={firstItem}
      selected={selected}
      type={type}
    >
      {children}
    </StyledPick>
  );
};

export default Pick;
