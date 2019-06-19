import React from "react";
import { NavLink } from "react-router-dom";

class UnlockPremiumCaption extends React.Component {
  render() {
    return (
      <div className="caption">
        <span className="premium-post-ad">{"Unlock today's"}</span>

        <span className="premium-post-ad">Premium Deals</span>

        <NavLink
          exact
          to="/subscribe"
          className="button button-primary button-circle button-xs unlock-premium-button"
          href="#"
          style={{ textAlign: "center" }}
        >
          Start 30 days trial
        </NavLink>
        <span className="premium-post-login">
          Already a member?
          <NavLink exact to="/login">
            <span className="link margin-left-10">LogIn</span>
          </NavLink>
        </span>
        <br />
      </div>
    );
  }
}

export default UnlockPremiumCaption;
