import "./Gallery.css";
import { NavLink } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const Gallery = () => {
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
            <NavLink to="/" activeClassName="active" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" end>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" exact={true}>
              <i aria-hidden="true" className="active"></i>
              Gallery
            </NavLink>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Gallery;
