import React from 'react';

const Button = ({ children, onClick }) => (
  <div style={styles.button} onClick={onClick}>
    {children} &gt;
  </div>
);

const styles = {
  button: {
    backgroundColor: 'red',
    border: '1px solid red',
    borderRadius: 30,
    color: 'white',
    height: 20,
    padding: 10,
    textAlign: 'center',
    width: 80,
  },
};

export default Button;
