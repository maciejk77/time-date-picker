import React from 'react';

const Pick = ({ data, value, onClick }) => {
  return (
    <div style={styles.pick} onClick={() => onClick(data)}>
      {value}
    </div>
  );
};

const styles = {
  pick: {
    alignItems: 'center',
    border: '1px solid black',
    display: 'flex',
    height: 40,
    justifyContent: 'center',
    margin: '0 5px 5px 0',
    padding: 10,
    width: 40,
  },
};

export default Pick;
