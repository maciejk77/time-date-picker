import React, { useContext } from 'react';
import { Store } from '../../Store';
import { setOrdinalIndicator } from '../../helpers/';

const Footer = () => {
  const {
    state: { selectedDay, selectedTime },
  } = useContext(Store);

  const selectedDateString = (data) =>
    `${data.dayOfWeek}, ${setOrdinalIndicator(data.day)} ${data.month}`;

  return (
    <div style={styles.footer}>
      <div style={styles.line}>
        {selectedDay ? (
          <>{selectedDateString(selectedDay)}</>
        ) : (
          'No day selected'
        )}
      </div>
      <div style={styles.line}>
        {selectedTime ? <>{selectedTime.time}</> : 'No time selected'}
      </div>
    </div>
  );
};

const styles = {
  footer: {
    border: '1px solid black',
    marginLeft: 5,
    marginTop: 10,
    padding: 10,
    width: 375,
  },
  line: {
    margin: 5,
    marginBottom: 5,
  },
};

export default Footer;
