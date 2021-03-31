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

  const handleClick = (selectedDay) =>
    dispatch({
      type: SET_SELECTED_DAY,
      payload: selectedDay,
    });

  // dispatch on first render to set first item as selected
  // needed for styled-component Pick isFirst
  // useEffect(() => {
  //   dispatch({
  //     type: SET_SELECTED_DAY,
  //     payload: days[0],
  //   });
  // }, [dispatch]);

  // dispatch action to load days array on state on first render
  useEffect(() => {
    dispatch({
      type: SET_DAYS,
      payload: getArrayOfDays(),
    });
  }, [dispatch]);

  // loader if no data yet available
  if (isLoading) return <Loader />;

  // use of Picker which should be flexible enough, iterator to whatever data it received
  // to create a grid od days, time slots
  // reusable in mind
  return (
    <div style={styles.dayPicker}>
      <Picker
        data={days}
        dataKey="day"
        onClick={handleClick}
        type="day"
        // passing a custom style for day item, which will change default square to rounded
        customStyles={{ borderRadius: 15 }}
      />
    </div>
  );
};

// to be replaced with styled with styled-components
const styles = {
  dayPicker: { border: '1px dotted lightgray', paddingRight: 5 },
};

export default DayPicker;
