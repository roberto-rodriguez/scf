import React from "react";
import "./postStyles.scss";
const Post = () => {
  return (
    <div
      className="col-12 col-md-12 col-lg-12 col-xl-6 isotope-item"
      data-filter="Type 3"
    >
      <div className="thumbnail">
        <div className="post-header pink-text">
           $253 <span className="regular-price">$481</span>
        </div>
        <div className="post-footer">
            3 hous ago
        </div>
        <img
          src={require("../../images/gallery-02.jpg")}
          className="img-responsive center-block thumbnail-image"
          width="420"
          height="280"
          alt=""
        />
        <div className="caption">
          <ul className="list-marked list-marked-no-padding list-marked-flex text-base cities-list">
            <li>
              <a className="text-info-dr" href="tickets.html">
                Paris
              </a>
              <div>
                {" "}
                <span className="city-price">$98.00</span>
              </div>
            </li>
            <li>
              <a className="text-info-dr" href="tickets.html">
                Rome
              </a>
              <div>
                {" "}
                <span className="city-price">$134.00</span>
              </div>
            </li>
            <li>
              <a className="text-info-dr" href="tickets.html">
                Barcelona
              </a>
              <div>
                {" "}
                <span className="city-price">$119.00</span>
              </div>
            </li>
            <li>
              <a className="text-info-dr" href="tickets.html">
                Berlin
              </a>
              <div>
                {" "}
                <span className="city-price">$99.00</span>
              </div>
            </li>
            <li>
              <a className="text-info-dr" href="tickets.html">
                Madrid
              </a>
              <div>
                {" "}
                <span className="city-price">$1299.00</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td>
              <p className="pOrigin">
                San Francisco
              </p>
            </td>
            <td>
              <i  style={{marginBottom:20}} className="fa fa-long-arrow-right" />
            </td>
            <td>
              <p className="pDestination pink-text">
                New Zealand
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Post;
