import React, { useState, useEffect } from 'react';
import Picker from '../Picker';
import Label from '../Label';
import Loader from '../Loader';
import { getArrayOfDays } from '../../helpers';

const DayPicker = () => {
  const [days, setDays] = useState([]);

  const isLoading = !days.length;
  const daysArray = days.map((el) => el.day);

  useEffect(() => {
    const days = getArrayOfDays();
    setDays(days);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div style={styles.dayPicker}>
      <Picker data={daysArray} />
    </div>
  );
};

const styles = {
  dayPicker: {
    // border: '1px dotted blue',
    // marginBottom: 3,
  },
};

export default DayPicker;
