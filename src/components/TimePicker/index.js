import React, { useEffect, useContext } from 'react';
import Picker from '../Picker';
import Label from '../Label';
import Loader from '../Loader';
import {
  SET_TIMES,
  SET_SELECTED_TIME,
  MORNING,
  AFTERNOON,
  EVENING,
} from '../../constants';
import { getArrayOfTimes } from '../../helpers';
import { Store } from '../../Store';

const TimePicker = () => {
  const {
    state: { times },
    dispatch,
  } = useContext(Store);

  const getTimes = (timeOfDay) => times.filter((t) => t.label === timeOfDay);

  const isLoading = !times.length;

  const handleClick = (selectedTime) =>
    dispatch({
      type: SET_SELECTED_TIME,
      payload: selectedTime,
    });

  useEffect(() => {
    dispatch({
      type: SET_TIMES,
      payload: getArrayOfTimes(),
    });
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <div style={styles.timePicker}>
      <Label>Morning</Label>
      <Picker data={getTimes(MORNING)} dataKey="time" onClick={handleClick} />
      <Label>Afternoon</Label>
      <Picker data={getTimes(AFTERNOON)} dataKey="time" onClick={handleClick} />
      <Label>Evening</Label>
      <Picker data={getTimes(EVENING)} dataKey="time" onClick={handleClick} />
    </div>
  );
};

const styles = {
  timePicker: { border: '1px dotted lightgray' },
};

export default TimePicker;
