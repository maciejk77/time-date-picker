import React from 'react';

const Button = ({ children, onClick, disabled = false }) => {
  const disabledButtonStyle = { ...styles.button, ...styles.buttonDisabled };

  return (
    <div
      style={disabled ? disabledButtonStyle : styles.button}
      onClick={onClick}
    >
      {children} &gt;
    </div>
  );
};

const styles = {
  button: {
    backgroundColor: 'red',
    borderRadius: 30,
    color: 'white',
    height: 20,
    padding: 10,
    textAlign: 'center',
    width: 80,
  },
  buttonDisabled: {
    backgroundColor: 'lightgray',
  },
};

export default Button;
