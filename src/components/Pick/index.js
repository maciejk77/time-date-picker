import React from 'react';
import { isActiveSlot } from '../../helpers';

const Pick = ({ data, value, onClick, type }) => {
  const inactivePickStyle = { ...styles.pick, ...styles.inactivePick };
  // TODO: this logic can be simplified
  const isDisabled = type !== 'day' && !isActiveSlot(value);

  return (
    <div
      style={isDisabled ? inactivePickStyle : styles.pick}
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
};

export default Pick;
