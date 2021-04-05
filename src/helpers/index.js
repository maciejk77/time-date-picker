import moment from 'moment';
import { MORNING, AFTERNOON, EVENING } from '../constants';

// TODO: THE BELOW TO REFACTOR
// Use of Moment.js to optimise code

// helper to get 1st, 5th etc.
export const getOrdinalDay = (day) => moment.localeData().ordinal(day);

export const getArrayOfTimes = () => {
  const quarters = ['00', '15', '30', '45'];
  // helper to get array of 16 working hours between 6 - 22
  const workingHours = Array.from(Array(16).keys(), (n) => n + 6);

  // loop over to generate the array of slots e.g. [10:15, 11:00, ...]
  const generateTimeSlots = (hours, quarters) => {
    let times = [];
    for (const hour of hours) {
      quarters.forEach((quarter) => {
        const newTime = `${hour}:${quarter}`;
        times = [...times, newTime];
      });
    }
    return times;
  };

  const timeSlots = generateTimeSlots(workingHours, quarters);

  // quick fix, fragile? just to create three separate arrays of time slots
  const morningSlots = timeSlots.slice(0, 24);
  const afternoonSlots = timeSlots.slice(24, 44);
  const eveningSlots = timeSlots.slice(44);

  // helper to generate data objects of e.g. {label: 'morning', time: '10:15'} shape
  const generateSetOfData = (label, data) =>
    data.reduce((acc, time) => [...acc, { label, time }], []);

  // combine three data sets for morning, afternoon, evening
  return [
    ...generateSetOfData(MORNING, morningSlots),
    ...generateSetOfData(AFTERNOON, afternoonSlots),
    ...generateSetOfData(EVENING, eveningSlots),
  ];
};

export const getArrayOfDays = () => {
  const months = moment.monthsShort();

  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDate();

  const generateDays = (days, month) => {
    const daysArray = Array.from(Array(days).keys(), (n) => n + 1);
    const daysMonthArray = daysArray.reduce(
      // fixed 'Mon' string for time being
      // it will create a collection of two full month approx 60 vs 28 needed, to refactor
      (acc, day) => [...acc, { day, dayOfWeek: 'Mon', month }],
      []
    );

    return daysMonthArray;
  };

  // helper to get number of days in a given month
  const numberOfDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  // helper to combine days of the current full month
  // and days of next month approx 60
  const combinedDays = [
    ...generateDays(
      numberOfDaysInMonth(currentYear, currentMonth + 1),
      months[currentMonth]
    ),
    ...generateDays(
      numberOfDaysInMonth(currentYear, currentMonth + 2),
      months[currentMonth + 1]
    ),
  ];

  // helper to get the index of the current day in current month
  const indexOfCurrentDay = combinedDays.findIndex(
    (obj) => obj.day === currentDay
  );

  // extract from array of approx 60 the element at current day index and following, 28 in total
  return combinedDays.splice(indexOfCurrentDay, 28);
};

// helper to return whether current time passed a given time slot
// boilerplate could be reduced with Moment.js Before/After etc.
export const isActiveSlot = (value) => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();
  const hours = d.getHours();
  const minutes = d.getMinutes();

  const [hr, min] = String(value).split(':');

  if (isNaN(value)) {
    const givenTime = new Date(year, month, day, hours, minutes);
    const timeSlot = new Date(year, month, day, `${hr}`, `${min}`);

    // this logic is fragile, just for time being
    // this logic should only be applied to "time" type of data
    // if value is not a number like day e.g. 28, it will be time "10:15" string
    return isNaN(value) ? givenTime < timeSlot : true;
  }
};
