import { useState } from "react";
import { calculatorButtons } from "../data/button-data";
import safeEval from "../utils/safeEval";
import Screen from "./Screen";
import Button from "./Button";
import "../styles/Main.css";

const Main = () => {
  const [screen, setScreen] = useState("0");
  const [btnCalc, setBtnCalc] = useState("0");
  const [isResult, setIsResult] = useState(false);
  const [memory, setMemory] = useState("");

  const handleClick = (type, value) => {
    let result = `${btnCalc}${value}`;

    switch (type) {
      case "number":
        if (isResult || screen === "0") {
          result = `${value}`;
          setIsResult(false);
        }

        setScreen(result);
        setBtnCalc(result);
        break;
      case "decimal":
        if (isResult || screen === "0") {
          result = `0${value}`;
          setIsResult(false);
        } else if (screen.slice(-1) === " ") {
          result = screen + `0${value}`;
          setIsResult(false);
        } else if (screen.slice(-1) === ".") {
          result = screen;
        }

        setScreen(result);
        setBtnCalc(result);
        break;
      case "sign":
        let numbers = btnCalc.split(" ");
        let lastNumber = numbers[numbers.length - 1];
        if(Number.isNaN(lastNumber) || lastNumber === "") {
          
          result = btnCalc;

        } else {
          if(lastNumber.charAt(0) ==="-") {
            lastNumber =  lastNumber.substring(1);
          } else {
            lastNumber = `-${lastNumber}`;
          }

          numbers[numbers.length - 1] = lastNumber;
          result = numbers.join(" ");
        }

        setScreen(result);
        setBtnCalc(result);
        break;
      case "operator":
        if (value === "Square Root") {
          result = Math.sqrt(btnCalc);
          setIsResult(true);
        } else if (value === "Percent") {
          result = btnCalc * 0.01;
          setIsResult(true);
        } else if (String(screen).charAt(screen.length - 1) === " ") {
          result = screen.substring(0, screen.length - 2) + value + ' ';
          setIsResult(false);
        } else{
          result = `${btnCalc} ${value} `;
          setIsResult(false);
        }

        if (String(result).includes(". ")) {
          result = String(result).replace(". ", " ");
        }

        if(Number.isNaN(result)) {
          result = "Error";
        }

        setBtnCalc(result);
        setScreen(result);
        break;
      case "memory":
        memFunc(value);
        break;
      case "enter":

        if((String(screen).slice(-1) === " ") || Number.isNaN(String(screen).slice(-1))) {
          result =  String(screen).substring(0, screen.length - 2);
        } else {
          result = safeEval(btnCalc);
        }

        if(Number.isNaN(result)) {
          result = "Error";
        }

        setBtnCalc(result);
        setScreen(result);
        setIsResult(true);
        break;
      case "clear":
        if (value === "All Clear") {
          setScreen("0");
          setBtnCalc("0");
        } else if (value === "Clear") {
          if ((btnCalc === "0" && screen === "0") || String(screen).length === 1 ) {
            console.log(screen.length);
            setScreen("0");
            setBtnCalc("0");
          } else {
            const newScreen = String(screen).trim().slice(0, -1);
            const newCalc = String(btnCalc).trim().slice(0, -1);
            setScreen(newScreen);
            setBtnCalc(newCalc);
          }
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
      
    } else if(memory === "" || memory === null || Number.isNaN(memory)) {
      if (value === "Memory Recall" || value === "Memory Addition" || value === "Memory Subtract") {
        setScreen("Error");
        setBtnCalc("");
        setMemory("");
      }
    } else if (!Number.isNaN(memory)) {
      if (value === "Memory Addition") {
        setBtnCalc(`${btnCalc}+${memory}`);
        setScreen(`${btnCalc} + ${memory}`);
      } else if (value === "Memory Subtract") {
        setBtnCalc(`${btnCalc}-${memory}`);
        setScreen(`${btnCalc} - ${memory}`);
      } else if (value === "Memory Recall") {
        setBtnCalc(`${memory}`);
        setScreen(`${memory}`);
      }
      
    } 
        
      
  };

  return (
    <main className="main">
      <section className="screen-wrapper">
        <Screen textToDisplay={screen} />
      </section>

      <section className="button-wrapper">
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
