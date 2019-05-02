import React from "react";
import "./postStyles.scss";
import * as Constants from "../../../../constants/Constants";
import PropTypes from "prop-types";

const PostExpired = props => {
  var { post } = props;
  var { cityCode, originCity, city, country, price, avg, foundDate } = post;

  return (
    <div
      className="col-12 col-md-12 col-lg-12 col-xl-6 isotope-item"
      data-filter="Type 3"
    >
     
      <div className="thumbnail">
      <div className="post-header">
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ textAlign: "left" }}>
                <span className="pOrigin">{originCity}</span>
              </td>
              <td>
                <i className="fa fa-long-arrow-right" />
              </td>
              <td style={{ textAlign: "right" }}>
                <span className="pDestination pink-text bold-text">{city}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        <span className="country-text">{country}</span>
        <div className="premium-post-overlay">
          <p className="absolute-left-text white-text">EXPIRED</p>
        </div>
        <div className="post-header pink-text bold-text">
          ${price} <span className="regular-price">${avg}</span>
        </div>
        <div
          className="post-text post-botom-left"
          style={{ backgroundColor: "transparent" }}
        >
          7 days ago
        </div>
        <img
          src={`http://res.cloudinary.com/fsc/image/upload/c_scale,w_360/v${
            Constants.TIMESTAMP
          }/${cityCode}.jpg`}
          className="img-responsive center-block thumbnail-img post-max-height"
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

PostExpired.propTypes = {
  post: PropTypes.object
};

export default PostExpired;
