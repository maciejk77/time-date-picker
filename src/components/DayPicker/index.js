import React, { useEffect, useContext } from 'react';
import Picker from '../Picker';
import Loader from '../Loader';
import { SET_DAYS, SET_SELECTED_DAY, DAY } from '../../constants';
import { getArrayOfDays } from '../../helpers';
import { Store } from '../../Store';
import StyledDayPicker from './styles';

const DayPicker = () => {
  // consider adding useCallback hook for dispatch-es below
  const {
    state: { days },
    dispatch,
  } = useContext(Store);

  const isLoading = !days.length;

  const handleClick = (selectedDay) =>
    dispatch(
      {
        type: SET_SELECTED_DAY,
        payload: selectedDay,
      },
      [dispatch]
    );

  useEffect(() => {
    const days = getArrayOfDays();
    dispatch(
      {
        type: SET_DAYS,
        payload: days,
      },
      [dispatch]
    );
    dispatch({
      type: SET_SELECTED_DAY,
      payload: days[0],
    });
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <StyledDayPicker>
      <Picker data={days} onClick={handleClick} type={DAY} />
    </StyledDayPicker>
  );
};

export default DayPicker;
