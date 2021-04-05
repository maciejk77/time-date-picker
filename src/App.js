import React from 'react';
import Footer from './components/Footer';
import Label from './components/Label';
import DayPicker from './components/DayPicker';
import TimePicker from './components/TimePicker';

const App = () => (
  <div style={{ width: 468 }}>
    <Label>DAY PICKER</Label>
    <DayPicker />
    <Label>TIME PICKER</Label>
    <TimePicker />
    <Footer />
  </div>
);

export default App;
