import React from 'react';
import Pick from '../Pick';

const Picker = ({ dataKey, data, onClick }) => (
  <div style={styles.picker}>
    {data.map((item, idx) => (
      <Pick key={idx} value={item[dataKey]} data={item} onClick={onClick} />
    ))}
  </div>
);

const styles = {
  picker: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 5,
    padding: 5,
  },
};

export default Picker;
