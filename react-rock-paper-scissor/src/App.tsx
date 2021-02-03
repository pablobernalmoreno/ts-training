import React, { useState } from "react";
import "./App.css";

function App(): JSX.Element {
  const [toggleInstruction, setToggleInstruction] = useState<boolean>(false);
  const [toggleGameMode, setToggleGameMode] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const [winsNeeded, setWinsNeeded] = useState<number>();
  const [result, setResult] = useState<string>("");
  const [playerWins, setPlayerWins] = useState<number>(0);
  const [aiWins, setAiWins] = useState<number>(0);

  const toggleInstructions = (): void => {
    setToggleInstruction(!toggleInstruction);
  };

  const toggleGameModes = (): void => {
    setToggleGameMode(true);
  };

  const togglePlaying = (wins: number): void => {
    setPlaying(true);
    setWinsNeeded(wins);
  };

  const handleReset = (): void => {
    setToggleInstruction(false);
    setToggleGameMode(false);
    setPlaying(false);
    setResult("");
    setAiWins(0);
    setPlayerWins(0);
  };

  const play = (played: string): void => {
    const options: string[] = ["ROCK", "PAPER", "SCISSOR"];
    const Ai: string = options[Math.floor(Math.random() * 3)];
    let result = "";
    if (playerWins === winsNeeded) result = "Player wins";
    else if (aiWins === winsNeeded) result = "Ai wins";
    if (played === "ROCK") {
      if (Ai === "PAPER") setAiWins(aiWins + 1);
      else setPlayerWins(playerWins + 1);
    } else if (played === "PAPER") {
      if (Ai === "SCISSOR") setAiWins(aiWins + 1);
      else setPlayerWins(playerWins + 1);
    } else if (played === "SCISSOR") {
      if (Ai === "ROCK") setAiWins(aiWins + 1);
      else setPlayerWins(playerWins + 1);
    }
    setResult(result);
  };

  return (
    <body className="App">
      <h1>ROCK-PAPER-SCISSOR</h1>
      {!playing ? (
        <div>
          <h2>Lets play</h2>
          {!toggleGameMode ? (
            <div className="instructions">
              <button className="instructions_btn" onClick={toggleInstructions}>
                Instructions
              </button>
              <button className="gameplay_btn" onClick={toggleGameModes}>
                Play
              </button>
              {toggleInstruction ? (
                <p>First click on "play" and then select the gamemode</p>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div>
              <h2>Best of</h2>
              <div className="gameModes">
                <button onClick={() => togglePlaying(2)}>2-3</button>
                <button onClick={() => togglePlaying(3)}>3-5</button>
                <button onClick={() => togglePlaying(4)}>4-7</button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="gameModes">
          <button onClick={() => play("ROCK")}>ROCK</button>
          <button onClick={() => play("PAPER")}>PAPER</button>
          <button onClick={() => play("SCISSOR")}>SCISSOR</button>
        </div>
      )}
      <h4>{result}</h4>
      <button onClick={handleReset}>RESET</button>
    </body>
  );
}

export default App;
