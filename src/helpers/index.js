export const getArrayOfTimes = () => {
  const quarters = ['00', '15', '30', '45'];
  const workingHours = Array.from(Array(16).keys(), (n) => n + 6);

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

  const morningSlots = timeSlots.slice(0, 24);
  const afternoonSlots = timeSlots.slice(24, 44);
  const eveningSlots = timeSlots.slice(44);

  return [
    { label: 'Morning', data: morningSlots },
    { label: 'Afternoon', data: afternoonSlots },
    { label: 'Evening', data: eveningSlots },
  ];
};

export const getArrayOfDays = () => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDate();

  const generateDays = (days, month) => {
    const daysArray = Array.from(Array(days).keys(), (n) => n + 1);
    const daysMonthArray = daysArray.reduce(
      (acc, day) => [...acc, { day, dayOfWeek: 'Mon', month }],
      []
    );

    return daysMonthArray;
  };

  const numberOfDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

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

  const indexOfCurrentDay = combinedDays.findIndex(
    (obj) => obj.day === currentDay
  );

  return combinedDays.splice(indexOfCurrentDay, 28);
};
