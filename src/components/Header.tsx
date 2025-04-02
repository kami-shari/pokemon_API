import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchRef.current) return;

    const id = searchRef.current.value.toLowerCase().trim();
    navigate(`/pokemon/${id}`);
    searchRef.current.value = '';
  };

  return (
    <header>
      <NavLink to="/" className="logo-container">
        <img
          src="/pokeapi-logo.png"
          alt="Logo-Pokemon"
        />
        <h1>Gotta Fetch 'Em All</h1>
      </NavLink>
      <div className="elemtene-header">
        <section className="p-menu1">
          <nav id="navbar" className="navigation" role="navigation">
            <input id="toggle1" type="checkbox" />
            <label className="hamburger1" htmlFor="toggle1">
              <div className="top"></div>
              <div className="meat"></div>
              <div className="bottom"></div>
            </label>
            <nav className="menu1">
              <NavLink className="link1" to="/">
                Home
              </NavLink>
              <NavLink className="link1" to="/type">
                Types
              </NavLink>
              <NavLink className="link1" to="/about-us">
                About us
              </NavLink>
            </nav>
          </nav>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search Pokemon"
            ref={searchRef}
          />
        </form>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
