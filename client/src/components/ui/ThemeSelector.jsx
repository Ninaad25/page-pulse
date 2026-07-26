import { useEffect, useState } from "react";

const themes = ["corporate", "business", "night", "dracula", "luxury"];

function ThemeSelector() {
  const [theme, setTheme] = useState("corporate");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "corporate";

    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const changeTheme = (e) => {
    const newTheme = e.target.value;

    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
  };

  return (
    <select
      className="select select-bordered"
      value={theme}
      onChange={changeTheme}
    >
      {themes.map((t) => (
        <option key={t} value={t}>
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </option>
      ))}
    </select>
  );
}

export default ThemeSelector;
