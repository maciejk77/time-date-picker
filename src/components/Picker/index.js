import React from 'react';
import Pick from '../Pick';

const Picker = ({ data }) => (
  <div style={styles.picker}>
    {data.map((item, idx) => (
      <Pick key={idx} data={item} />
    ))}
  </div>
);

const styles = {
  picker: {
    // border: '1px dotted red',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 5,
    padding: 5,
  },
};

export default Picker;