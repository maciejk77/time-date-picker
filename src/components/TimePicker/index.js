import React, { useEffect, useContext } from 'react';
import Picker from '../Picker';
import Label from '../Label';
import Loader from '../Loader';
import { SET_TIMES } from '../../constants';
import { getArrayOfTimes } from '../../helpers';
import { Store } from '../../Store';

const TimePicker = () => {
  const { state, dispatch } = useContext(Store);
  const { times } = state;

  const isLoading = !times.length;

  useEffect(() => {
    dispatch({
      type: SET_TIMES,
      payload: getArrayOfTimes(),
    });
  }, [dispatch]);

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
