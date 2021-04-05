import React from 'react';
import { DAY } from '../../constants';
import Pick from '../Pick';
import StyledPicker from './styles';

const Picker = ({ data, onClick, type }) => {
  const isTypeDay = type === DAY;

  return (
    <StyledPicker type={type}>
      {data.map((item, idx) => (
        <Pick
          key={idx}
          value={item[type]}
          data={item}
          onClick={onClick}
          type={type}
        >
          {/* two variants of items being passed here as children e.g. 1, Mon for day, 10:45 for time */}
          {isTypeDay ? (
            <div>
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
    </StyledPicker>
  );
};

export default Picker;
