import { useState } from 'react';
import { calculatorButtons } from '../data/button-data';
import Screen from './Screen.js';
import Button from './Button.js';

const Main = () => {
  const [screen, setScreen] = useState('');
  const [btnCalc, setBtnCalc] = useState('');

  return (
    <main>
      <section className="screen">
        <Screen />
      </section>

      <section className="buttons">
        {calculatorButtons.map(item => {
          console.log(item);
          return <Button />
        })}
      </section>
    </main>
  )
}


export default Main;