import React from 'react';
import Item from './Item';

export default function ListOfItems(props) {
  return (
    <div>
      {props.data.map((item) => (
        <Item value={item.value} important={item.important} key={item.id} />
      ))}
    </div>
  );
}
