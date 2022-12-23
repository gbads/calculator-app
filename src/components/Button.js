import React from 'react';
import styles from './Button.css';

const Button = ({ type, className, text, value, onClick }) => {
  const handleClick = () => {
    onClick(type, value);
  };

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
