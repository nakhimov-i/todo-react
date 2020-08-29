import React from 'react';
import styles from './Item.module.css';

export default function Item(props) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemValue}>
        {props.important ? (
          <p style={{ fontWeight: 'bold', color: 'tomato' }}>{props.value}</p>
        ) : (
          <p>{props.value}</p>
        )}
      </div>
      <div className='itemButtons'>
        <button className='btn btn-outline-danger'>
          <i className='fa fa-trash '></i>
        </button>
        <button className={`btn btn-outline-success ${styles.itemButton}`}>
          <i className='fa fa-exclamation' aria-hidden='true'></i>
        </button>
      </div>
    </div>
  );
}
