import React from 'react';
import Pick from '../Pick';

const Picker = ({ dataKey, data, onClick, type }) => {
  // TODO: Refactor this logic and below repetition of styles to react-jss, styled-components
  const orientation = type === 'day' ? styles.pickerDay : styles.pickerTime;

  return (
    <div style={orientation}>
      {data.map((item, idx) => (
        <Pick
          key={idx}
          value={item[dataKey]}
          data={item}
          onClick={onClick}
          type={type}
        />
      ))}
    </div>
  );
};

const styles = {
  pickerDay: {
    display: 'flex',
    overflow: 'auto',
    // flexWrap: 'wrap',
    marginTop: 5,
    padding: 5,
  },
  pickerTime: {
    display: 'flex',
    // overflow: 'auto',
    flexWrap: 'wrap',
    marginTop: 5,
    padding: 5,
  },
};

export default Picker;
