import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { serviceDropdown } from "../datas/datas";
import "../styles/dropdown.css";

export default function Dropdown() {
  return (
    <ul className="cont-dropdown">
      {serviceDropdown.map((drop) => (
        <li className="cont-link">
          {
            <Link to={drop.path} className={drop.cName}>
              {drop.title}
            </Link>
          }
        </li>
      ))}
    </ul>
  );
}
