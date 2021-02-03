import React, { useState } from "react";
import Screen from "./components/screen/Screen";
import OperationalButton from "./components/operation-button/OperationButton";
import NumericButton from "./components/numeric-button/NumericButton";
import "./App.css";

function App() {
  const [screenValue, setScreenValue] = useState<string>("0");

  const handleValue = (prevValue: string, screenValue: string): void => {
    let addedValue = prevValue + screenValue;
    addedValue.charAt(0) === "0"
      ? setScreenValue(addedValue.substring(1))
      : setScreenValue(addedValue);
  };

  const eraseAll = (): void => {
    setScreenValue("0");
  };

  const evalAll = (): void => {
    setScreenValue(eval(screenValue));
  };

  return (
    <div className="calculator">
      <div className="calculator__frame">
        <Screen result={screenValue} />
        <div className="calculator__rows">
          <div className="calculator__row">
            <button className="especial__btn" onClick={eraseAll}>
              A/C
            </button>
            <OperationalButton
              value="+/-"
              sendData={() => handleValue(screenValue, "+/-")}
            />
            <OperationalButton
              value="%"
              sendData={() => handleValue(screenValue, "%")}
            />
            <OperationalButton
              value="/"
              sendData={() => handleValue(screenValue, "/")}
            />
          </div>
          <div className="calculator__row">
            <NumericButton
              value="7"
              sendData={() => handleValue(screenValue, "7")}
            />
            <NumericButton
              value="8"
              sendData={() => handleValue(screenValue, "8")}
            />
            <NumericButton
              value="9"
              sendData={() => handleValue(screenValue, "9")}
            />
            <OperationalButton
              value="*"
              sendData={() => handleValue(screenValue, "*")}
            />
          </div>
          <div className="calculator__row">
            <NumericButton
              value="4"
              sendData={() => handleValue(screenValue, "4")}
            />
            <NumericButton
              value="5"
              sendData={() => handleValue(screenValue, "5")}
            />
            <NumericButton
              value="6"
              sendData={() => handleValue(screenValue, "6")}
            />
            <OperationalButton
              value="-"
              sendData={() => handleValue(screenValue, "-")}
            />
          </div>
          <div className="calculator__row">
            <NumericButton
              value="1"
              sendData={() => handleValue(screenValue, "1")}
            />
            <NumericButton
              value="2"
              sendData={() => handleValue(screenValue, "2")}
            />
            <NumericButton
              value="3"
              sendData={() => handleValue(screenValue, "3")}
            />
            <OperationalButton
              value="+"
              sendData={() => handleValue(screenValue, "+")}
            />
          </div>
          <div className="calculator__row">
            <NumericButton
              value="0"
              sendData={() => handleValue(screenValue, "0")}
            />
            <button className="missingno" onClick={evalAll}>
              .
            </button>
            <NumericButton
              value=","
              sendData={() => handleValue(screenValue, ",")}
            />
            <button className="especial__btn" onClick={evalAll}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
