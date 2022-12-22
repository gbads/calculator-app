import { useState } from "react";
import { calculatorButtons } from "../data/button-data";
import safeEval from "../utils/safeEval";
import Screen from "./Screen";
import Button from "./Button";
import styles from "./main.css"

const Main = () => {
  const [screen, setScreen] = useState("");
  const [btnCalc, setBtnCalc] = useState("");
  const [memory, setMemory] = useState("");

  const handleClick = (type, value) => {
    switch (type) {
      case "number":
      case "decimal":
      case "sign":
        setScreen(`${btnCalc} ${value}`);
        setBtnCalc(`${btnCalc}${value}`);
        break;
      case "operator":
        let result = `${btnCalc} ${value}`;

        switch (value) {
          case "Square Root":
            result = Math.sqrt(btnCalc);
            break;
          case "Percent":
            result = btnCalc * 0.01;
            break;
          default:
            console.log('switch-operator: ', value);
        }

        setBtnCalc(result);
        setScreen(result);
        break;
      case "memory":
        memFunc(value);
        break;
      case "enter":
        const newStr = safeEval(btnCalc);
        setBtnCalc(newStr);
        setScreen(newStr);
        break;
      case "clear":
        if (value === "All Clear") {
          setScreen("");
          setBtnCalc("");
        } else if (value === "Clear") {
          const newScreen = screen.trim().slice(0, -1);
          const newCalc = btnCalc.trim().slice(0, -1);

          setScreen(newScreen);
          setBtnCalc(newCalc);
        }
        break;
      default:
        console.log('switch-default: ', type);
    }

  }

  // To be separated when we migrate to switch case statement

  const memFunc = (value) => {
    if (value === "Memory Save") {
      const plainCalc = Number(btnCalc);

      // Number Validation
      if (Number.isNaN(plainCalc) || plainCalc === null) {
        console.log("a");
        setScreen("Error");
        setBtnCalc("");
        setMemory("");
      } else {
        console.log("b");
        setMemory(btnCalc);
      }
    } else if (value === "Memory Clear") {
      setMemory("");
    } else if (value === "Memory Recall") {
      setScreen(memory);
    } else if (value === "Memory Addition") {
      setBtnCalc(`${btnCalc}+${memory}`);
      setScreen(`${btnCalc} + ${memory}`);
    } else if (value === "Memory Subtract") {
      setBtnCalc(`${btnCalc}-${memory}`);
      setScreen(`${btnCalc} - ${memory}`);
    }
  };

  return (
    <main className="main">
      <section className="screen">
        <Screen textToDisplay={screen} />
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
