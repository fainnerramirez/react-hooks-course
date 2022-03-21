import { useState } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="header">
      <h1>React Hooks</h1>
      <div>
        <button type="button" onClick={handleClick}>
          {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
};
