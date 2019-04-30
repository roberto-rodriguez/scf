import React from "react";
import "./postStyles.scss";
import PropTypes from "prop-types";
import PostCityPrice from "./PostCityPrice";
import * as Constants from '../../../../constants/Constants'
class Post extends React.Component {
  render() {
    var { post } = this.props;
    var {
      id,
      originCity,
      city,
      country,
      price,
      avg,
      foundDate,
      cityList,
      cityCode
    } = post;

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
        <div className="thumbnail">
          <span className="country-text">{country}</span>
          <div className="post-header pink-text bold-text icon">
            ${price} <span className="regular-price">${avg}</span>
          </div>
          <div className="post-text post-botom-left">{foundDate}</div>
          <img
            width="420"
            height="280" 
            className='img-responsive center-block thumbnail-img post-max-height'
            src={`http://res.cloudinary.com/fsc/image/upload/c_scale,w_360/v${Constants.TIMESTAMP}/${cityCode}.jpg`}
          /> 
          <div className="caption">
            <ul className="list-marked list-marked-no-padding list-marked-flex text-base cities-list">
              {cities.map((city, i) => (
                <PostCityPrice
                  key={i}
                  selectedCity={cityCode}
                  sampleSearchCity={city}
                  originCity={originCity}
                  country={country}
                  avg={avg}
                  postId={id + ""}
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
