import React from 'react';
import Pick from '../Pick';

const Picker = ({ dataKey, data, onClick, type, customStyles }) => {
  // this logic quickly gets to complicated
  // needs refactor to styled component <Picker />
  // which will receive props and handle different styles for them
  const timePickerStyle = { ...styles.picker, ...styles.pickerTime };
  // differentiates between row / column display for grid of days/times
  const orientation = type === 'day' ? styles.picker : timePickerStyle;

  return (
    <div style={orientation}>
      {data.map((item, idx) => (
        <Pick
          key={idx}
          // current implementation of Picker only allows one piece of data to be passed on
          // e.g. time, day (without day of the week), hence the quick fix to give it a key for
          // passing one value only
          // refactor needed to e.g. passing a div/divs as children prop to serve
          // single data item e.g. 10:15, or double data items e.g. 28, Mon
          value={item[dataKey]}
          data={item}
          onClick={onClick}
          // Pick is a dummy just to render item
          // it need to receive a prop or handler to distinguish
          // between day item (disables when time passed) or time which doesn't do that
          type={type}
          customStyles={customStyles}
        />
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
};

export default Picker;
