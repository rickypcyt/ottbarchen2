import "./Contact.css";
import { NavLink } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const About = () => {
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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" exact={true}>
              <i aria-hidden="true" className="active"></i>
              About
            </NavLink>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div style={{ margin: "15%" }}>
        <h1
          style={{
            flex: 1,
            justifyContent: "center",
            fontSize: 44,
          }}
        >
          Hi Everybody! We are a small German company called OTT Bärchen,
          dedicated to the sale of medical cannabis products. We have different
          products with CBD and HHC. We are looking to sell new products, both
          gummies and vapes. And we are also interested in shipping these
          products to other countries.
        </h1>
      </div>
      <Outlet />
    </>
  );
};

export default About;
