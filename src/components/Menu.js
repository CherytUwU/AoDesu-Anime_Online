import React from "react";
import { Link } from "react-router-dom";
import {
  VIEW_ONE_PATH,
  VIEW_TWO_PATH,
  VIEW_THREE_PATH,
  PRIVATE_VIEW_PATH
} from "../config/routing/paths";

export default function Menu() {
  return (
    <header className="header">
      <div className="container-header-A">
        <div className="img-header">
          <Link to="">
            <img src="" />
          </Link>
        </div>
        <div className="nav-header">
          <nav className="nav">
            <h2 className="links-menu">
              <Link to={VIEW_ONE_PATH}>Inicio</Link>
            </h2>
            <h2 className="links-menu">
              <Link to={VIEW_TWO_PATH}>Animes</Link>
            </h2>
            <h2 className="emision">
              <Link to={VIEW_THREE_PATH}>En Emisión <i className="fas fa-clock"></i></Link>
            </h2>
          </nav>
        </div>
      </div>
      <div className="container-switch-header">
        <div className="container-switch-header-B">
            <button className="switch" id="switch">
                <span className="night">
                    <i className="fas fa-moon"></i>
                </span>
                <span className="day">
                    <i className="fas fa-sun"></i>
                </span>
            </button>
        </div>
      </div>
    </header>
  );
}
