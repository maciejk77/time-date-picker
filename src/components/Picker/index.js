import React from 'react';
import Pick from '../Pick';

const Picker = ({ dataKey, data, onClick, type, customStyles }) => {
  const timePickerStyle = { ...styles.picker, ...styles.pickerTime };
  const orientation = type === 'day' ? styles.picker : timePickerStyle;

  return (
    <div style={orientation}>
      {data.map((item, idx) => (
        <Pick
          key={idx}
          value={item[dataKey]}
          data={item}
          onClick={onClick}
          type={type}
          customStyles={customStyles}
        />
      ))}
    </div>
  );
};

const styles = {
  picker: {
    display: 'flex',
    overflow: 'auto',
    marginTop: 5,
    padding: 5,
  },
  pickerTime: {
    flexWrap: 'wrap',
  },
};

export default Picker;
