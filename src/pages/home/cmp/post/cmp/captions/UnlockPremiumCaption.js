import React from "react";
 
class UnlockPremiumCaption extends React.Component {
  render() { 
    return (
      <div className="caption">
      <span className="premium-post-ad">{"Unlock today's"}</span>

      <span className="premium-post-ad">Premium Deals</span>

      <a
        className="button button-primary button-circle button-xs unlock-premium-button"
        href="#"
        style={{ textAlign: "center" }}
      >
        Start 14 days trial
      </a>
      <span className="premium-post-login">
        Already a member? <span className="link">LogIn</span>
      </span>
      <br/> 
    </div>
    );
  }
} 

export default UnlockPremiumCaption;
