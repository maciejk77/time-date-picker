import React from 'react';
import Pick from '../Pick';
import { DAY } from '../../constants';

const Picker = ({ dataKey, data, onClick, type, customStyles }) => {
  const timePickerStyle = { ...styles.picker, ...styles.pickerTime };

  const isTypeDay = type === DAY;
  const orientation = isTypeDay ? styles.picker : timePickerStyle;

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
        >
          {/* two variants of items being passed here as children e.g. 1, Mon for day, 10:45 for time */}
          {isTypeDay ? (
            <div style={styles.pickerDay}>
              <div>{item.day}</div>
              <div>{item.dayOfWeek}</div>
            </div>
          ) : (
            <>
              <div>{item.time}</div>
            </>
          )}
        </Pick>
      ))}
    </div>
  );
};

// styled component needed for less boilerplate and handling style logic
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
  pickerDay: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
};

export default Picker;
