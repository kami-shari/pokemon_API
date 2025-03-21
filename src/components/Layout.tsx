import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useThemeContext } from "../lib/ToggleLightDarkMode";

export default function Layout() {
  const { theme } = useThemeContext();

  return (
    <div className={`theme theme--${theme}`}>
      <Header />
      <Outlet />
    </div>
  );
}
