import React, { useEffect, useContext } from 'react';
import Picker from '../Picker';
import Loader from '../Loader';
import { SET_DAYS, SET_SELECTED_DAY } from '../../constants';
import { getArrayOfDays } from '../../helpers';
import { Store } from '../../Store';

const DayPicker = () => {
  const {
    state: { days },
    dispatch,
  } = useContext(Store);

  const isLoading = !days.length;
  const daysArray = days.map((el) => el.day);

  console.log(days);

  const handleClick = (selectedDay) =>
    dispatch({
      type: SET_SELECTED_DAY,
      payload: selectedDay,
    });

  useEffect(() => {
    dispatch({
      type: SET_DAYS,
      payload: getArrayOfDays(),
    });
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <div style={styles.dayPicker}>
      <Picker data={daysArray} onClick={handleClick} />
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
