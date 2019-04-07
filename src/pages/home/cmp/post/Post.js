import React from "react";
import "./postStyles.scss";
import PropTypes from "prop-types";
class Post extends React.Component {

 

  render() {
    var {index, post} = this.props; 
    var {id, city, country} = post;

    return (
      <div key={index}
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
                <span className="pDestination pink-text">{ city }</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="thumbnail">
          <span className="country-text">{country}</span>
          <div className="post-header pink-text">
            $253 <span className="regular-price">$481</span>
          </div>
          <div className="post-footer">3 hous ago</div>
          <img
            src={require('../../images/gallery-' + (id%12) + '.jpg')}
            className="img-responsive center-block thumbnail-image"
            width="420"
            height="280"
            alt=""
          />
          <div className="caption">
            <ul className="list-marked list-marked-no-padding list-marked-flex text-base cities-list">
              <li>
                <a className="yellow-text" href="tickets.html">
                  Paris
                </a>
                <div>
                  {" "}
                  <span className="city-price">$98.00</span>
                </div>
              </li>
              <li>
                <a className="yellow-text" href="tickets.html">
                  Rome
                </a>
                <div>
                  {" "}
                  <span className="city-price">$134.00</span>
                </div>
              </li>
              <li>
                <a className="yellow-text" href="tickets.html">
                  Barcelona
                </a>
                <div>
                  {" "}
                  <span className="city-price">$119.00</span>
                </div>
              </li>
              <li>
                <a className="yellow-text" href="tickets.html">
                  Berlin
                </a>
                <div>
                  {" "}
                  <span className="city-price">$99.00</span>
                </div>
              </li>
              <li>
                <a className="yellow-text" href="tickets.html">
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
      </div>
    );
  }
}

Post.propTypes = {
  index: PropTypes.number,
  post: PropTypes.object 
};

export default Post;
