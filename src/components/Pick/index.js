import React, { useContext } from 'react';
import { isActiveSlot } from '../../helpers';
import { DAY, TIME } from '../../constants';
import { Store } from '../../Store';
import StyledPick from './styles';

const Pick = ({ data, value, onClick, type, customStyles, children }) => {
  const { state } = useContext(Store);

  // think how to start with selected first day
  // const firstItem = (state.days && state.days[0] === data) || false;

  // need to simplify that
  const disabled = type !== DAY && !isActiveSlot(value);

  // below could be DRY-ied
  // const selectedTime = state.selectedTime
  //   ? value === state.selectedTime.time
  //   : false;

  // const selectedDay = state.selectedDay
  //   ? value === state.selectedDay.day
  //   : false;

  const selectedItem = (stateItem, key) =>
    stateItem ? value === stateItem[key] : false;

  const selectedDay = selectedItem(state.selectedDay, DAY);
  const selectedTime = selectedItem(state.selectedTime, TIME);

  const selected = selectedDay || selectedTime;

  return (
    <StyledPick
      style={customStyles}
      disabled={disabled}
      // isFirstItem={firstItem}
      selected={selected}
      onClick={disabled ? null : () => onClick(data)}
    >
      {children}
    </StyledPick>
  );
};

export default Pick;
