import {
  SET_DAYS,
  SET_TIMES,
  SET_SELECTED_DAY,
  SET_SELECTED_TIME,
} from '../constants';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TIMES:
      return { ...state, times: payload };
    case SET_DAYS:
      return { ...state, days: payload };
    case SET_SELECTED_TIME:
      return { ...state, selectedTime: payload };
    case SET_SELECTED_DAY:
      return { ...state, selectedDay: payload };
    default:
      return state;
  }
};

export default reducer;
