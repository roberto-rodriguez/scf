import React from "react";
import NavBar from "../../../../cmp/header/NavBar";
import * as utils from "../../../../utils/util";
import { HeaderRegion, SubscribeButton } from "./cmp";
import "./homeHeaderStyles.scss";

var regions = [
  "All Deals to:",
  "Europe", //2
  "Asia", //3
  "Oceania", //4
  "Caribean", //5
  "America", //6
  "Africa" //7
];
class HomeHeader2 extends React.Component {
  render() {
    return (
      <header className="home-header2">
        <NavBar />

        <div className="home-header-wrap">
          <div className="home-header-top">
            <div className="home-header-top-inner">
              <div className="home-header-top-title">
                <h3
                  className="blue-text"
                  style={{ fontFamily: "Courgette, cursive" }}
                >
                  Every day we find the
                  <span
                    className="pink-text"
                    style={{ fontFamily: "Courgette, cursive" }}
                  >
                    {" BEST "}
                  </span>
                  Flight Deals
                </h3>
                <br />
                <h4 className="blue-text">Departing from your home city</h4>
                <br />
                <h4
                  className="home-header-sub-title"
                  style={{ color: "maroon" }}
                >
                  Deals up to 70% OFF
                </h4>
              </div>
              <SubscribeButton />
            </div>
          </div>

          <div className="home-header-bottom">
            <div className="isotope-filters isotope-filters-horizontal">
              <ul className="nav-custom" style={{ backgroundColor: "white" }}>
                {regions.map((r, i) => (
                  <HeaderRegion key={i} id={i + 1} text={r} />
                ))}
              </ul>
            </div>

            <div className="arrow bounce cursor-pointer"  onClick={() => utils.scrollTo(600, 1000)}>
              <span className="fa fa-chevron-down fa-2x" />
            </div>
          </div>
        </div>

        <a
          href="https://unsplash.com/@simonmigaj?utm_source=trello&amp;utm_medium=referral&amp;utm_campaign=api-credit"
          target="_blank"
          rel="noopener noreferrer"
          title="Simon Migaj"
          className="hide-on-tablet"
          style={{ position: "absolute", bottom: 10, right: 10 }}
        >
          Photo by: Simon Migaj
        </a>
      </header>
    );
  } 

  onUpdateRegion = region => this.setState(region);
}

export default HomeHeader2;
