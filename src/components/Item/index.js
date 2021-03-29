import React from 'react';

const Item = ({ data }) => {
  return <div style={styles.item}>{data}</div>;
};

const styles = {
  item: {
    border: '1px solid black',
    margin: '0 5px 5px 0',
    padding: 10,
    height: 40,
    width: 40,
  },
};

export default Item;
