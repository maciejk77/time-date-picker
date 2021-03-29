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
