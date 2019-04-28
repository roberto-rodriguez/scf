import React from "react";
import "./postStyles.scss";

const PostExpired = () => {
  return (
    <div
      className="col-12 col-md-12 col-lg-12 col-xl-6 isotope-item"
      data-filter="Type 3"
    >
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ textAlign: "left" }}>
              <span className="pOrigin">San Francisco</span>
            </td>
            <td>
              <i className="fa fa-long-arrow-right" />
            </td>
            <td style={{ textAlign: "right" }}>
              <span className="pDestination pink-text">Wellington</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="thumbnail">
        <span className="country-text">New Zealand</span>
        <div className="premium-post-overlay">
          <p className="absolute-left-text white-text">EXPIRED</p>
        </div>
        <div className="post-header pink-text">
          $253 <span className="regular-price">$750</span>
        </div>
        <div
          className="post-text post-botom-left"
          style={{ backgroundColor: "transparent" }}
        >
          7 days ago
        </div>
        <img
          src={require("../../images/gallery-3.jpg")}
          className="img-responsive center-block thumbnail-image"
          width="420"
          height="280"
          alt=""
        />
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
        </div>
      </div>
    </div>
  );
};

export default PostExpired;
