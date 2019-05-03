import React from "react";
import NavBar from "../../../../cmp/header/NavBar";
import { HeaderRegion, SubscribeButton } from "./cmp";

var regions = [
  "All Deals to:",
  "Europe", //2
  "Asia", //3
  "Oceania", //4
  "Caribean", //5
  "America", //6
  "Africa" //7
];
class HomeHeader extends React.Component {
  render() {
    return (
      <header className="page-header home-header">
        <NavBar />

        <section style={{ paddingTop: 130 }}>
          <h3 style={{ color: "white", fontFamily: "Courgette, cursive" }}>
            Find the TOP 20 chepest flights
          </h3>
          <br />
          <span
            style={{
              color: "white",
              fontSize: 22,
              fontFamily: "Overlock, cursive"
            }}
          >
            Departing from your home city
          </span>

          <br />
          <br />
          <span
            className="text text-italic"
            style={{ color: "white", fontFamily: "Overlock, cursive" }}
          >
            Updated Daily
          </span>

          <br />
          <br />
          <SubscribeButton />
          <br />
          <br />
          <br />
        </section>

        <div className="isotope-filters isotope-filters-horizontal">
          <ul className="nav-custom" style={{ backgroundColor: "white" }}>
            {regions.map((r, i) => (
              <HeaderRegion key={i} id={i + 1} text={r} />
            ))}
          </ul>
        </div>
      </header>
    );
  }

  onUpdateRegion = region => this.setState(region);
}

export default HomeHeader;
