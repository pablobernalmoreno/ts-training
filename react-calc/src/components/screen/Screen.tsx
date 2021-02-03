import React from "react";
import "./Screen.css";

export default function Screen(props: { result: string }): JSX.Element {
  return <div className="screen">{props.result}</div>;
}
