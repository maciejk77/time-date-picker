import React from 'react';
import { isActiveSlot } from '../../helpers';

const Pick = ({ data, value, onClick, type }) => {
  // TODO: this logic can be simplified
  const isDisabled = type !== 'day' && !isActiveSlot(value);

  return (
    <div
      style={!isDisabled ? styles.pick : styles.inactivePick}
      onClick={!isDisabled ? () => onClick(data) : null}
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
    height: 30,
    justifyContent: 'center',
    margin: '0 5px 5px 0',
    padding: 10,
    minWidth: 30,
  },

  inactivePick: {
    alignItems: 'center',
    display: 'flex',
    height: 30,
    justifyContent: 'center',
    margin: '0 5px 5px 0',
    padding: 10,
    width: 30,
    // TODO: above repeated here as a quick fix, refactor to something like [...pick, inactivePick] latter being just two items below
    border: '2px solid lightgray',
    color: 'lightgray',
  },
};

export default Pick;
