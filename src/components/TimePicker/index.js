import React, { useState, useEffect } from 'react';
import ItemGroup from '../ItemGroup';
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

  return times.map(({ label, data }) => (
    <div style={styles.timePicker}>
      <Label>{label}</Label>
      <ItemGroup data={data} />
    </div>
  ));
};

const styles = {
  timePicker: {
    // border: '1px dotted blue',
    padding: 10,
    marginBottom: 3,
  },
};

export default TimePicker;
