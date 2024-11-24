import { useEffect, useState } from "react";
import "./ThemeSwitch.css";

function ThemeSwitch() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);
  function switchHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const newTheme = event.target.checked ? "light" : "dark";
    setTheme(newTheme);
    console.log(newTheme);
  }
  return (
    <>
      <label htmlFor="checkbox" className="toggle">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={switchHandler}
        />
        <div className="slider">
          <div className="moon"></div>
          <div className="sun"></div>
        </div>
      </label>
    </>
  );
}

export default ThemeSwitch;
