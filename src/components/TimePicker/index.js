import React from 'react';
import Item from '../Item';

const TimePicker = ({ times }) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div style={styles.timePicker}>
      {data.map((day, idx) => (
        <Item key={idx} day={day} />
      ))}
    </div>
  );
};

const styles = {
  timePicker: {
    border: '1px dotted red',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 5,
    padding: 5,
  },
};

export default TimePicker;
