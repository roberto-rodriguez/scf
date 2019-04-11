import React from "react";
import "./postStyles.scss";
import PropTypes from "prop-types";
import PostCityPrice from "./PostCityPrice";
class Post extends React.Component {
  render() {
    var { post } = this.props;
    var { id, origin, city, country, price, avg, foundDate, cityList } = post;

    var cities = Object.values(cityList);

    return (
      <div
        className="col-12 col-md-12 col-lg-12 col-xl-6 isotope-item"
        data-filter="Type 3"
      >
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ textAlign: "left" }}>
                <span className="pOrigin">{origin}</span>
              </td>
              <td>
                <i className="fa fa-long-arrow-right" />
              </td>
              <td style={{ textAlign: "right" }}>
                <span className="pDestination pink-text">{city}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="thumbnail">
          <span className="country-text">{country}</span>
          <div className="post-header pink-text icon">
            ${price} <span className="regular-price">${avg}</span>
          </div>
          <div className="post-footer">{foundDate}</div>
          <img
            src={require("../../images/gallery-" + (id % 12) + ".jpg")}
            className="img-responsive center-block thumbnail-image"
            width="420"
            height="280"
            alt=""
          />
          <div className="caption">
            <ul className="list-marked list-marked-no-padding list-marked-flex text-base cities-list">
              {cities.map((city, i) => (
                <PostCityPrice
                  key={i}
                  sampleSearchCity={city}
                  origin={origin} 
                  country={country} 
                  avg={avg}
                  postId={id + ''}
                />
              ))}
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
