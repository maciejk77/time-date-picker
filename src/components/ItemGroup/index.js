import React from 'react';
import Item from '../Item';

const ItemGroup = ({ data }) => (
  <div style={styles.itemGroup}>
    {data.map((item, idx) => (
      <Item key={idx} data={item} />
    ))}
  </div>
);

const styles = {
  itemGroup: {
    // border: '1px dotted red',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 5,
    padding: 5,
  },
};

export default ItemGroup;
