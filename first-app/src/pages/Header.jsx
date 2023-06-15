import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="todos"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Todos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="counter"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Counter
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="posts"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
