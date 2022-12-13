import {calculatorButtons} from '../data/calculator-bonus-03-button-data';
import { useState } from 'react';

function Main() {

    const [screen, setScreen] = useState('');
    const [btnCalc, setBtnCalc] = useState('');
 
    return (
        <main>
        <section className="screen">

        </section>

        <section className="buttons">
        {calculatorButtons.map
        }
        </section>
        </main>
    )
}


export default Main;