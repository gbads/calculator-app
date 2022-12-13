import { useState } from "react";
import { calculatorButtons } from "../data/button-data";
import Screen from "./Screen.js";
import Button from "./Button.js";

const Main = () => {
  const [screen, setScreen] = useState("");
  const [btnCalc, setBtnCalc] = useState("");

  const handleClick = (type, value) => {
    if(type === "number"){
      setBtnCalc(`${btnCalc}${value}`);
    } else if(type === "operator"){
      setBtnCalc(`${btnCalc}${value}`);
    } else if(type === "enter"){
      setBtnCalc(`${btnCalc}${value}`);
      // Eval to be replaced later
      console.log(eval(btnCalc));
      setBtnCalc("");
      console.log(btnCalc);
    }
    

  };


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
