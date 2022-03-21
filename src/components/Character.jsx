import { useEffect, useState } from "react";

export const Character = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="character">
      {characters.map((character) => (
        <h2>{character.name}</h2>
      ))}
    </div>
  );
};
