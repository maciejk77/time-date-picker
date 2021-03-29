import React, { useEffect, useState } from 'react';
import TimePicker from './components/TimePicker';
import { getArrayOfTimes } from './helpers';

const App = () => {
  const [times, setTimes] = useState();
  const isLoading = !times;

  // console.log(times);

  useEffect(() => {
    const times = getArrayOfTimes();
    setTimes(times);
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div style={styles.app}>
      <div>TIME PICKER</div>
      <TimePicker />
    </div>
  );
};

const styles = {
  app: {
    width: 320,
  },
};

export default App;
