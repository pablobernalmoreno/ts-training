import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

interface PokeUrl {
  name: string;
  url: string;
}

function App() {
  const [pokes, setPokes] = useState<PokeUrl[]>();
  const [pokemon, setPokemon] = useState<string>();
  const [chosen, setChosen] = useState<string>();

  const url = "https://pokeapi.co/api/v2/pokemon/";

  const getPokes = async (): Promise<void> => {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0"
    );
    setPokes(res.data.results);
  };

  const getPoke = async (
    event: React.FormEvent,
    url: string
  ): Promise<void> => {
    event.preventDefault();
    const res = await axios.get(url);
    setPokemon(res.data.sprites.other["official-artwork"].front_default);
  };

  useEffect(() => {
    getPokes();
  }, []);

  return (
    <div className="App">
      <h1>Hola</h1>
      <form>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setChosen(e.target.value);
          }}
        ></input>
        <button onClick={(e: React.FormEvent) => getPoke(e, url + chosen)}>
          Submit
        </button>
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            getPoke(e, e.currentTarget.value)
          }
        >
          {pokes?.map((poke) => {
            return (
              <option key={poke.name} value={poke.url}>
                {poke.name}
              </option>
            );
          })}
        </select>
      </form>
      <div>
        <img src={pokemon} />
      </div>
    </div>
  );
}

export default App;
