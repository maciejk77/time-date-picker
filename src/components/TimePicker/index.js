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
  TIME,
} from '../../constants';
import { getArrayOfTimes } from '../../helpers';
import { Store } from '../../Store';
import StyledTimePicker from './styles';

const TimePicker = () => {
  const {
    state: { times },
    dispatch,
  } = useContext(Store);

  // this filtering could be moved to helper
  // or by shaping data object into collections and imported as {morning, afternoon .... } sets of data

  const getTimes = (timeOfDay) => times.filter((t) => t.label === timeOfDay);

  const isLoading = !times.length;

  const handleClick = (selectedTime) => {
    return dispatch({
      type: SET_SELECTED_TIME,
      payload: selectedTime,
    });
  };

  useEffect(() => {
    dispatch({
      type: SET_TIMES,
      payload: getArrayOfTimes(),
    });
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <StyledTimePicker>
      <Label>Morning</Label>
      <Picker data={getTimes(MORNING)} onClick={handleClick} type={TIME} />
      <Label>Afternoon</Label>
      <Picker data={getTimes(AFTERNOON)} onClick={handleClick} type={TIME} />
      <Label>Evening</Label>
      <Picker data={getTimes(EVENING)} onClick={handleClick} type={TIME} />
    </StyledTimePicker>
  );
};

export default TimePicker;
