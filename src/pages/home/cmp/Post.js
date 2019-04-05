import React from "react";
import "../homeStyles.scss";
const Post = () => {
  return ( 
    <div
      className="col-12 col-md-12 col-lg-12 col-xl-6 isotope-item"
      data-filter="Type 3"
    > 
      <div className="thumbnail">
        <img
          src={require("../images/gallery-02.jpg")}
          className="img-responsive center-block thumbnail-image"
          width="420"
          height="280"
          alt=""
        />
        <div className="caption">
          <h4 className="text-ubold">Venice</h4>
          <p className="text-italic text-gray">Italy</p>
          <p>Departure City:</p>
          <ul className="list-marked list-marked-no-padding list-marked-flex text-base">
            <li>
              <a className="text-info-dr" href="tickets.html">
                Paris
              </a>
              <div>
                {" "}
                <span>$98.00</span>
              </div>
            </li>
            <li>
              <a className="text-info-dr" href="tickets.html">
                Rome
              </a>
              <div>
                {" "}
                <span>$134.00</span>
              </div>
            </li>
            <li>
              <a className="text-info-dr" href="tickets.html">
                Barcelona
              </a>
              <div>
                {" "}
                <span>$119.00</span>
              </div>
            </li>
            <li>
              <a className="text-info-dr" href="tickets.html">
                Berlin
              </a>
              <div>
                {" "}
                <span>$99.00</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
