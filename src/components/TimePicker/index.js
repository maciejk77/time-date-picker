import React, { useState, useEffect } from 'react';
import Picker from '../Picker';
import Label from '../Label';
import Loader from '../Loader';
import { getArrayOfTimes } from '../../helpers';

const TimePicker = () => {
  const [times, setTimes] = useState([]);

  const isLoading = !times.length;

  useEffect(() => {
    const times = getArrayOfTimes();
    setTimes(times);
  }, []);

  if (isLoading) return <Loader />;

  return times.map(({ label, data }, idx) => (
    <div style={styles.timePicker} key={idx}>
      <Label>{label}</Label>
      <Picker data={data} />
    </div>
  ));
};

const styles = {
  timePicker: {
    // border: '1px dotted blue',
    // marginBottom: 3,
  },
};

export default TimePicker;
