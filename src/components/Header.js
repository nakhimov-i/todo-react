import React from 'react';
import style from './Header.module.css';

export default function Header() {
  return (
    <div>
      <h1 className={style.header}>Список задач</h1>
    </div>
  );
}
