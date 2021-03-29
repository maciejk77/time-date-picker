import React from 'react';

const Button = ({ children, onClick, disabled = false }) => (
  <div
    style={disabled ? styles.buttonDisabled : styles.button}
    onClick={onClick}
  >
    {children} &gt;
  </div>
);

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
    // TODO: the below is repeated as quick fix, refactor needed
    borderRadius: 30,
    color: 'white',
    height: 20,
    padding: 10,
    textAlign: 'center',
    width: 80,
  },
};

export default Button;
