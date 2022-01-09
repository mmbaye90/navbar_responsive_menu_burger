import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../datas/datas.js";
import "../styles/navbar.css";
import * as Icons from "react-icons/fa";
import Dropdown from "./Dropdown.js";
// import MenuBurger from "./MenuBurger.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={`navbar ${open ? "show-nav" : "hide"}`}>
      <Link to="/" className="logo">
        <h1>LOGO</h1>
        <Icons.FaMicroscope />
      </Link>
      <ul>
        {navItems.map((items) => {
          return items.title === "Services" ? (
            <li
              className="sous-lien"
              onMouseOver={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <Link to={items.path} className="links">
                {items.icone}
                {items.title}
              </Link>
              {open && <Dropdown />}
            </li>
          ) : (
            <Link to={items.path} className="links">
              {items.icone}
              {items.title}
            </Link>
          );
        })}
      </ul>
      <butt className="navbar__menu" onClick={() => setOpen(!open)}>
        <span className="burger-bar"></span>
      </butt>
    </nav>

    // <MenuBurger />
  );
}
