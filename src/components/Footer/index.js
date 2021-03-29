import React, { useContext } from 'react';
import Button from '../Button';
import { Store } from '../../Store';
import { getOrdinalDay } from '../../helpers/';

const Footer = () => {
  const {
    state: { selectedDay, selectedTime },
  } = useContext(Store);

  const isDisabled = !(selectedDay && selectedTime);

  const selectedDateString = (data) =>
    `${data.dayOfWeek}, ${getOrdinalDay(data.day)} ${data.month}`;

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
      <Button
        onClick={!isDisabled ? () => alert('There is a click on NEXT!') : null}
        disabled={isDisabled}
      >
        NEXT
      </Button>
    </div>
  );
};

const styles = {
  footer: {
    alignItems: 'center',
    border: '2px solid black',
    display: 'flex',
    height: 50,
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 5,
    width: 455,
  },
  line: {
    margin: 5,
  },
};

export default Footer;
