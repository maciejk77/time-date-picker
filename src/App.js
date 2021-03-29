import React from 'react';
import Footer from './components/Footer';
import Label from './components/Label';
import DayPicker from './components/DayPicker';
import TimePicker from './components/TimePicker';

const App = () => {
  return (
    <div style={styles.app}>
      <Label>DAY PICKER</Label>
      <DayPicker />
      <Label>TIME PICKER</Label>
      <TimePicker />
      <Footer />
    </div>
  );
};

const styles = {
  app: {
    width: 468,
  },
};

export default App;
