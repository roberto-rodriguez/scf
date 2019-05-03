import React from "react";
import "./postStyles.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostBadge from "./cmp/PostBadge";
import { CityPricesCaption, UnlockPremiumCaption } from "./cmp/captions";
import * as Constants from "../../../../constants/Constants";
class Post extends React.Component {
  render() {
    var { post, plan } = this.props;
    var {
      id,
      originCity,
      city,
      country,
      price,
      avg,
      foundDate,
      cityList,
      cityCode,
      status // 0-expired 1-free 2-premium
    } = post;
 
    return (
      <div
        className={`${
          plan > 1
            ? "col-12 col-md-6 col-lg-4 col-xl-4 col-x1400-4 "
            : "col-12 col-md-12 col-lg-12 col-xl-6"
        } isotope-item`}
        data-filter="Type 3"
      >
        <div className="thumbnail"> 
          <div className="post-header">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td width="45%" style={{ textAlign: "left" }}>
                    <span className="pOrigin">{originCity}</span>
                  </td>
                  <td width="10%"  align="center">
                    <i className="fa fa-long-arrow-right"/>
                  </td>
                  <td  width="45%" style={{ textAlign: "right" }}>
                    <span className="pDestination pink-text text-bold">
                      {city}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {!status && <div className="premium-post-overlay"> </div>}
          <PostBadge status={status}/>
          <div className="post-price white-text bold-text icon">
            ${price} <span className="regular-price">${avg}</span>
          </div>
          <div className="post-footer">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td className="white-text" style={{ textAlign: "left" }}>
                    {foundDate}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span className="pDestination yellow-text">{country}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <img
            width="100%" 
            className="img-responsive thumbnail-img post-max-height"
            src={`http://res.cloudinary.com/fsc/image/upload/c_scale,w_360/v${
              Constants.TIMESTAMP
            }/${cityCode}.jpg`}
          />
          {status ? (
            <CityPricesCaption post={post} />
          ) : (
            <UnlockPremiumCaption />
          )}
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  index: PropTypes.number,
  plan: PropTypes.number,
  post: PropTypes.object
};

const mapStateToProps = ({ authReducer }) => ({
  plan: authReducer.plan
});

export default connect(mapStateToProps)(Post);
