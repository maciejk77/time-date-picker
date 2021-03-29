import React from 'react';

const Item = ({ data }) => {
  return <div style={styles.item}>{data}</div>;
};

const styles = {
  item: {
    alignItems: 'center',
    border: '1px solid black',
    display: 'flex',
    height: 40,
    justifyContent: 'center',
    margin: '0 5px 5px 0',
    padding: 10,
    width: 40,
  },
};

export default Item;
