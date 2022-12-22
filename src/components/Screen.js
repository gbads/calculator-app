import React from 'react';
import styles from './Screen.module.css';

const Screen = (display) => {
  return (
    <div className={styles.screen}>
      {display.textToDisplay}
    </div>
  )
}

export default Screen;