import React from "react";

export default function TypedButton(props: {
  name: string | number;
}): JSX.Element {
  console.log(typeof props.name);
  return (
    <div>
      <button>{props.name}</button>
    </div>
  );
}
