import "./Gallery.css";
import { NavLink } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import vapocbd2 from "../images/Eighty8-CBD-Vape.png";
import vapohhc2 from "../images/Eighty8-Vape-Cocos-HHC.png";
import gomitashhc from "../images/gomitas-hhc-fixed.png";
import gomitashhcblancas from "../images/gomitas-hhc.jpg";

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
      <body
        className="maincontent"
        style={{
          display: "grid",
          placeItems: "flex-start",
        }}
      >
        <div className="todotodito">
          <div className="todo">
            <img src={vapocbd2} alt="Vapo CBD" />
            <div className="imgmastext">
              <h2>
                Eighty8's biggest boast is the NO.1 vaporizer pen, which is
                literally loaded to bursting with cannabidiol. It was not easy
                to create such a strong concentration due to the solidification
                of the extract during production. For a long time Eighty8
                struggled with this, but eventually they managed to create a
                unique blend with 98% cannabidiol.
              </h2>
              <h2>
                If you're looking for the best on the Czech market, choose NO.1
                which has an incredibly relaxing effect thanks to its terpene
                profile and high representation of individual cannabinoids.
              </h2>
              <ul className="listapopo">
                <h2>Features:</h2>
                <li>Disposable vaporizer pen with 98% cannabinoids</li>
                <li> The strongest variant in the eighty8 range</li>
                <li> Ultra strong</li>
                <li> Hemp + terpenes</li>
                <li> Up to 250 coats</li>
              </ul>
            </div>
          </div>

          <div className="todo">
            <img src={vapohhc2} alt="Vapo HHC" />
            <div className="imgmastext">
              <h2>
                HHC, was discovered in 1944 by American
                chemist Roger Adams when he added a hydrogen molecule to delta-9
                THC during the hydrogenation process. 
                HHC was found to be one of the many naturally occurring
                cannabinoids in the cannabis plant and in 2020, the de Las Heras
                group analysed a lipid extract from Cannabis sativa seeds and
                discovered 43 cannabinoids in it, one of which was HHC.
              </h2>
              <h2>
                This 99% HHC distillate from Eighty8 that they use in their pens
                is imported from one of the largest producers in the US, and is
                produced in certified labs. The ratio of 9R and 9S molecules is
                in an ideal 1:1 ratio for maximum efficiency.
              </h2>
              <ul className="listapopo">
                <h2>Features:</h2>
                <li>Disposable vaporizer pen with 99% HHC</li>
                <li>Ultra strong </li>
                <li>Cocos</li>
                <li>Up to 250 puffs</li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Gallery;
