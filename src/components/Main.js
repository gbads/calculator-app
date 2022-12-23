import { useState } from "react";
import { calculatorButtons } from "../data/button-data";
import safeEval from "../utils/safeEval";
import Screen from "./Screen";
import Button from "./Button";
import styles from "../styles/Main.css"

const Main = () => {
  const [screen, setScreen] = useState("0");
  const [btnCalc, setBtnCalc] = useState("0");
  const [isResult, setIsResult] = useState(false);
  const [memory, setMemory] = useState("");

  const handleClick = (type, value) => {
    let result = `${btnCalc}${value}`;

    switch (type) {
      case "number":
      case "decimal":
        if (isResult || screen === "0") {
          result = `${value}`;
          setIsResult(false);
        }

        setScreen(result);
        setBtnCalc(result);
        break;
      case "sign":
        setScreen(result);
        setBtnCalc(result);
        break;
      case "operator":
        if (screen.charAt(screen.length - 1) === " ") {
          result = screen.substring(0, screen.length - 2) + value + ' ';
        } else if (value === "Square Root") {
          result = Math.sqrt(btnCalc);
        } else if (value === "Percent") {
          result = btnCalc * 0.01;
        } else {
          result = `${btnCalc} ${value} `;
        }

        setBtnCalc(result);
        setScreen(result);
        setIsResult(false);
        break;
      case "memory":
        memFunc(value);
        break;
      case "enter":
        result = safeEval(btnCalc);
        setBtnCalc(result);
        setScreen(result);
        setIsResult(true);
        break;
      case "clear":
        if (value === "All Clear") {
          setScreen("0");
          setBtnCalc("0");
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
