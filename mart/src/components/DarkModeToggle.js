
import React from 'react';

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      id="darkModeToggle"
      className="neumorphic p-2 rounded-full"
      aria-label="Toggle dark mode"
      onClick={() => setDarkMode(!darkMode)}
    >
      <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
    </button>
  );
}

export default DarkModeToggle;
