import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../style/nav.scss";

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "orangered" : "whitesmoke",
              })}
              to="main"
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "orangered" : "whitesmoke",
              })}
              to="blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "orangered" : "whitesmoke",
              })}
              to="gallery"
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "orangered" : "whitesmoke",
              })}
              to="news"
            >
              News
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  );
}

export default Nav;
