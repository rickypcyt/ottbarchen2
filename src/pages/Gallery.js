import "./Gallery.css";
import { NavLink } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import vapocbd2 from "../images/Eighty8-CBD-Vape.png";
import vapohhc2 from "../images/Eighty8-Vape-Cocos-HHC.png";
import gomitashhc2 from "../images/gummies-banner.png";
import gomitashhcblancas2 from "../images/Canalogy-HHC-Gummies.png";

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
            <NavLink to="/gallery" exact={true}>
              <i aria-hidden="true" className="active"></i>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" end>
              About
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
              <h1>Eighty8 CBD Vape No. 1, 98 % CBD</h1>
              <h2>
                Eighty8's biggest boast is the NO.1 vaporizer pen, which is
                literally loaded to bursting with cannabidiol. It was not easy
                to create such a strong concentration due to the solidification
                of the extract during production. For a long time Eighty8
                struggled with this, but eventually they managed to create a
                unique blend with 98% cannabidiol.
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
              <h1>Eighty8 HHC Vape Cocos, 99 % HHC, 0,5 ml</h1>
              <h2>
                HHC, was discovered in 1944 by American chemist Roger Adams when
                he added a hydrogen molecule to delta-9 THC during the
                hydrogenation process. HHC was found to be one of the many
                naturally occurring cannabinoids in the cannabis plant and in
                2020, the de Las Heras group analysed a lipid extract from
                Cannabis sativa seeds and discovered 43 cannabinoids in it, one
                of which was HHC.
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
          <div className="todo">
            <img src={gomitashhcblancas2} alt="Vapo CBD" />
            <div className="imgmastext">
              <h1>Canalogy HHC Gummies Wattermelon 500mg, 20 Stück x 25mg</h1>
              <h2>
                Canalogy Gummies (HHC) Wattermelon. Hexahydro-cannabinol is an
                alternative to Delta 8 THC and Delta 9 THC and is legal in all
                EU countries. It has a very similar effect to Delta 9 and is
                becoming the new cannabidiol of choice among consumers.
              </h2>

              <ul className="listapopo">
                <h2>Composition of the product:</h2>
                <li>Quantity: 20 gummies</li>
                <li>Total cannabinoid content: 500 mg (25 mg per 1 gummy)</li>
                <li>Content of Delta 9: less than 0.3%</li>
                <li>
                  Composition: Sugar, Corn Syrup, Pectin, Sunflower Oil, Water,
                  Flavouring, Sodium Citrate, Sodium Sulfate, Citric Acid,
                  Natural and Artificial Food Colors, 25 mg Hemp Extract and
                  Vegetable Terpenes, Hemp Extract.
                </li>
              </ul>
            </div>
          </div>
          <div className="todo">
            <img src={gomitashhc2} alt="Vapo HHC" />
            <div className="imgmastext">
              <h1>Eighty8 HHC Gummies Strawberry, 10 pcs, 250mg</h1>
              <h2>
                Taste unique strawberry gummies with the unique power of 25mg
                HHC in one piece.
              </h2>

              <ul className="listapopo">
                <h2>Features:</h2>
                <li>Strength: Ultra Strong</li>
                <li> Taste: Strawberry</li>
                <li> HHC Content: 25mg/piece</li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Gallery;
