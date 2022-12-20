import { useState } from "react";
import { calculatorButtons } from "../data/button-data";
import Screen from "./Screen.js";
import Button from "./Button.js";

const Main = () => {
  const [screen, setScreen] = useState("");
  const [btnCalc, setBtnCalc] = useState("");

  const handleClick = (type, value) => {
    switch (type) {
      case "number":
        setScreen(`${btnCalc} ${type}`);
        setBtnCalc(`${btnCalc}${value}`);
        break;
      case "operator":
        setScreen(`${btnCalc} ${type}`);
        setBtnCalc(`${btnCalc}${value}`);
        break;
      case "decimal":
        setScreen(`${btnCalc} ${type}`);
        setBtnCalc(`${btnCalc}${value}`);
        break;
      case "sign":
        setScreen(`${btnCalc} ${type}`);
        setBtnCalc(`${btnCalc}${value}`);
        break;    
      case "enter":
        // Eval to be replaced later
        eval(btnCalc);
        console.log('btnCalc', btnCalc);
        console.log('eval(btnCalc)', eval(btnCalc));
        break;
      default:
        console.log(type);
    }

    switch (value) {
      case "All Clear":
        setScreen("");
        setBtnCalc("");
        break;
      default:
        console.log(value);
    }
  }

  return (
    <main>
      <section className="screen">
        <Screen textToDisplay={screen}/>
      </section>

      <section className="buttons">
        {calculatorButtons.map((item) => {
          return (
            <Button
              key={item.value}
              type={item.type}
              className={item.className}
              text={item.text}
              value={item.value}
              onClick={handleClick}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Main;
