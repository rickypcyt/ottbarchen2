import "./App.css";
import { Outlet, NavLink } from "react-router-dom";
import vapocbd from "./images/vapo-cbd-fixed.png";
import vapohhc from "./images/vapo-hhc-fixed.png";
import gomitashhc from "./images/gomitas-hhc-fixed.png";
import gomitashhcblancas from "./images/gomitas-hhc.jpg";
import logoinfo from "./images/logo-mas-info.jpg";

function App() {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Responsive Navigation Menu</title>
      <link rel="stylesheet" href="style.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <nav>
        <div className="logo">
          <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
            OTT BÄRCHEN
          </NavLink>
        </div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars" />
        </label>
        <ul>
          <li>
            <NavLink to="/" exact={true}>
              <i aria-hidden="true" className="active"></i>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="maincontent">
        <div className="content4">
          <img src={logoinfo} alt="Logo Info" />
        </div>
        <div className="BOX">
          <div className="content2">
            <img src={vapocbd} alt="Vapo CBD" />
            <img src={vapohhc} alt="Vapo HHC" />
          </div>
          <div className="content3">
            <img src={gomitashhcblancas} alt="Gomitas HHC Blancas" />
            <img src={gomitashhc} alt="Gomitas HHC" />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default App;
