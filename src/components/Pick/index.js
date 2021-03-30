import React from 'react';
import { isActiveSlot } from '../../helpers';

const Pick = ({ data, value, onClick, type, customStyles }) => {
  const inactivePickStyle = { ...styles.pick, ...styles.inactivePick };
  // if item is NOT of a day type (time) and time slot is not active
  // this is a bit to complicated need refactor
  // isActiveSlot looks into current time and time of the given slot
  const isDisabled = type !== 'day' && !isActiveSlot(value);

  // Styling
  // it needs also a active item on first render for day type, fist day in the array -> current day
  // it needs to change active into selected one on click, both separately for day and time

  return (
    <div
      style={
        // this would be simplified in styled components, passing isDisabled prop
        isDisabled
          ? { ...inactivePickStyle, ...customStyles }
          : { ...styles.pick, ...customStyles }
      }
      // callback to dispatch action on Click
      // no click registered if isDisabled item
      onClick={isDisabled ? null : () => onClick(data)}
    >
      {value}
    </div>
  );
};

// styled component needed for less boilerplate and handling style logic
const styles = {
  pick: {
    alignItems: 'center',
    border: '2px solid black',
    display: 'flex',
    height: 40,
    justifyContent: 'center',
    margin: '0 5px 5px 0',
    padding: 10,
    minWidth: 40,
  },
  inactivePick: {
    border: '2px solid lightgray',
    color: 'lightgray',
  },
  activePick: {
    backgroundColor: 'black',
    border: '2px solid black',
    color: 'white',
  },
};

export default Pick;
