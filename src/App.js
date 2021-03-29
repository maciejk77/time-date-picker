import React from 'react';
import Label from './components/Label';
import TimePicker from './components/TimePicker';

const App = () => {
  return (
    <div style={styles.app}>
      <Label>TIME PICKER</Label>
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
