import React, { useEffect, useContext } from 'react';
import Picker from '../Picker';
import Loader from '../Loader';
import { SET_DAYS } from '../../constants';
import { getArrayOfDays } from '../../helpers';
import { Store } from '../../Store';

const DayPicker = () => {
  const { state, dispatch } = useContext(Store);
  const { days } = state;

  const isLoading = !days.length;
  const daysArray = days.map((el) => el.day);

  useEffect(() => {
    dispatch({
      type: SET_DAYS,
      payload: getArrayOfDays(),
    });
  }, [dispatch]);

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
