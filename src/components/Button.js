import React from 'react';
import styles from './Button.module.css';

const Button = ({ type, className, text, value, onClick }) => {
  const handleClick = () => {
    onClick(type, value);
  };

  return (
    <button className={`${className} ${styles.btn}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
