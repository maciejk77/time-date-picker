import React, { useContext } from 'react';
import Button from '../Button';
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
      <div>
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
      <Button onClick={() => console.log('click')}>NEXT</Button>
    </div>
  );
};

const styles = {
  footer: {
    alignItems: 'center',
    border: '1px solid black',
    display: 'flex',
    height: 50,
    justifyContent: 'space-between',
    marginLeft: 5,
    marginTop: 10,
    padding: 5,
    width: 375,
  },
  line: {
    margin: 10,
  },
};

export default Footer;
