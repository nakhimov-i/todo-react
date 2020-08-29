import React from 'react';
import styles from './InputGroup.module.css';
import { Button } from 'react-bootstrap';

export default function Input() {
  return (
    <div className={styles.inputGroup}>
      <input placeholder='Что нужно сделать?' />
      <Button variant='outline-info'>Все</Button>
      <Button variant='outline-success'>Актуальные</Button>{' '}
      <Button variant='outline-danger'>Законченные</Button>{' '}
    </div>
  );
}
