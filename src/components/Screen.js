import React from 'react';
import styles from '../styles/Screen.module.css';

const Screen = (display) => {
  return (
    <div className={styles.wrapper}>
      {display.textToDisplay}
    </div>
  )
}

export default Screen;