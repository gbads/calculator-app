import { useState } from "react";
import { calculatorButtons } from "../data/button-data";
import safeEval from "../utils/safeEval";
import Screen from "./Screen";
import Button from "./Button";

const Main = () => {
  const [screen, setScreen] = useState("");
  const [btnCalc, setBtnCalc] = useState("");

  const handleClick = (type, value) => {
    switch (type) {
      case "number":
        setBtnCalc(`${btnCalc}${value}`);
        break;
      case "operator":
        setBtnCalc(`${btnCalc}${value}`);
        break;
      case "enter":
        const newStr = safeEval(btnCalc);
        setBtnCalc(newStr);
        console.log("Result: ", newStr);
        break;
      default:
        console.log(type);
    }
  }

  return (
    <main>
      <section className="screen">
        <Screen />
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
