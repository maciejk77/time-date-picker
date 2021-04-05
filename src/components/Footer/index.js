import React, { useContext } from 'react';
import Button from '../Button';
import { Store } from '../../Store';
import { getOrdinalDay } from '../../helpers/';
import { StyledFooter, Row, Column } from './styles';

const Footer = () => {
  const {
    state: { selectedDay, selectedTime },
  } = useContext(Store);

  const isDisabled = !(selectedDay && selectedTime);
  const selectedDateString = (data) =>
    `${data.dayOfWeek}, ${getOrdinalDay(data.day)} ${data.month}`;

  return (
    <StyledFooter>
      <Column>
        <Row>
          {selectedDay ? (
            <>{selectedDateString(selectedDay)}</>
          ) : (
            'No day selected'
          )}
        </Row>
        <Row>
          {selectedTime ? <>{selectedTime.time}</> : 'No time selected'}
        </Row>
      </Column>
      <Button
        onClick={!isDisabled ? () => alert('There is a click on NEXT!') : null}
        disabled={isDisabled}
      >
        NEXT
      </Button>
    </StyledFooter>
  );
};

export default Footer;
