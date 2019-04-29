import React from "react";
import NavBar from "../../../cmp/header/NavBar";

class AuthHeader extends React.Component {
  render() {
    return (
      <header className="page-header auth-header">
        <NavBar navBck />

        <br />
        <br />
        <br />

        <section style={{ paddingTop: 360 }}>
          <h3
            style={{
              color: "white",
              fontFamily: "Courgette, cursive"
            }}
          >
            Welcome to the coolest Cheap Flights Service
            <span
              className="text text-italic hide-on-tablet"
              style={{
                color: "white",
                cursor: "pointer",
                fontFamily: "Overlock, cursive",
                fontSize: 15,
                marginLeft: 10
              }}
            >
              ( Learn why )
            </span>
          </h3>

          <a
            href="https://unsplash.com/@simonmigaj?utm_source=trello&amp;utm_medium=referral&amp;utm_campaign=api-credit"
            target="_blank"
            rel="noopener noreferrer"
            title="Simon Migaj"
            className="hide-on-tablet"
            style={{ position: "absolute", top: 470, right: 10 }}
          >
            Photo by: Simon Migaj
          </a>
        </section>
      </header>
    );
  }
}

export default AuthHeader;
