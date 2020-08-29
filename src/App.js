import React from 'react';
import Header from './components/Header';
import InputGroup from './components/InputGroup';
import ListOfItems from './components/ListOfItems';
import { data } from './data';

export default function App() {
  return (
    <div>
      <Header />
      <InputGroup />
      <ListOfItems data={data} />
    </div>
  );
}
