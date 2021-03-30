import React from 'react';
import { isActiveSlot } from '../../helpers';

const Pick = ({ data, value, onClick, type, customStyles }) => {
  const inactivePickStyle = { ...styles.pick, ...styles.inactivePick };
  // TODO: this logic can be simplified
  // TODO: Add activePick style e.g. default first day of the array on initial render
  const isDisabled = type !== 'day' && !isActiveSlot(value);

  return (
    <div
      style={
        isDisabled
          ? { ...inactivePickStyle, ...customStyles }
          : { ...styles.pick, ...customStyles }
      }
      onClick={isDisabled ? null : () => onClick(data)}
    >
      {value}
    </div>
  );
};

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
