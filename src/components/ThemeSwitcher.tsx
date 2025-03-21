import { useThemeContext } from "../lib/ToggleLightDarkMode";
import "../style/ThemeSwitcher.css";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <div className="theme-switcher-container">
          <img
            src="/Pokeball-dark.svg"
            alt="darkmode"
            className="L-D-Mode"
          />
          <span className="theme-text">Change Light</span>
        </div>
      ) : (
        <div className="theme-switcher-container">
          <img
            src="/Pokeball-light.svg"
            alt="lightmode"
            className="L-D-Mode"
          />
          <span className="theme-text">Change Light</span>
        </div>
      )}
    </button>
  );
}
