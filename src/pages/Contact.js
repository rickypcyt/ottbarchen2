import "./Contact.css";
import { NavLink } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const Contact = () => {
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
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <NavLink to="/contact" exact={true}>
              <i aria-hidden="true" className="active"></i>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Contact;
