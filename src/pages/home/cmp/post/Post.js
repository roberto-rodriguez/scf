import React from "react";
import "./postStyles.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostBadge from "./cmp/PostBadge";
import { CityPricesCaption, UnlockPremiumCaption } from "./cmp/captions";
import * as Constants from "../../../../constants/Constants";
import moment from "moment";
class Post extends React.Component {
  render() {
    var { post, plan } = this.props;
    var {
      postId,
      originCity,
      city,
      country,
      price,
      avg,
      percent,
      creationDate,
      cityCode,
      status, // 0-expired 1-active
      premium
    } = post;

    return (
      <div
        id={postId}
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
                  <td width="10%" align="center">
                    <i className="fa fa-long-arrow-right" />
                  </td>
                  <td width="45%" style={{ textAlign: "right" }}>
                    <span className="pDestination pink-text text-bold">
                      {city}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {!status && <div className="premium-post-overlay"> </div>}
          <PostBadge status={status} premium={premium} />
          <div className="post-price yellow-text">
            ${price}{" "}
            <span className="regular-price" style={{ marginRight: 10 }}>
              ${avg}
            </span>
            {"  "}
            <span style={{ color: "orange", fontSize: 14 }}>
              {`${percent}% OFF`}
            </span>
          </div>

          <div className="post-footer">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td className="white-text" style={{ textAlign: "left" }}>
                    {creationDate && moment(creationDate).fromNow()}
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

  componentDidMount() {
    var { scrollToMe, post } = this.props;

    if (scrollToMe) {
      document.getElementById("" + post.postId).scrollIntoView();
      window.scrollBy(0, -window.innerHeight / 2);
    }
  }
}

Post.propTypes = {
  index: PropTypes.number,
  plan: PropTypes.number,
  post: PropTypes.object,
  scrollToMe: PropTypes.bool
};

const mapStateToProps = ({ authReducer, postReducer }, props) => ({
  plan: authReducer.plan,
  scrollToMe: props.post.postId == postReducer.selectedPostId
});

export default connect(mapStateToProps)(Post);
