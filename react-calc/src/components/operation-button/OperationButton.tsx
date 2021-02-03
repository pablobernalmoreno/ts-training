import React from "react";
import "./OperationButton.css";

export default function OperationButton(props: {
  value: string;
  sendData: (prevValue: string, screenValue: string) => void;
}): JSX.Element {
  const handleClick = (): void => {
    let sendValue: string;
    sendValue = props.value;
    props.sendData(props.value, sendValue);
  };

  return (
    <button onClick={handleClick} className="opt__button">
      {props.value}
    </button>
  );
}
