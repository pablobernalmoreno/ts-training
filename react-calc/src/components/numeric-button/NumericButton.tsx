import React from "react";
import "./NumericButton.css";

export default function NumericButton(props: {
  value: string;
  sendData: (prevValue: string, screenValue: string) => void;
}): JSX.Element {
  const handleClick = (): void => {
    let sendValue: string;
    sendValue = props.value;
    props.sendData(props.value, sendValue);
  };
  return (
    <button className="num__button" onClick={handleClick}>
      {props.value}
    </button>
  );
}
