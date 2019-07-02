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

    if (!originCity || !city || !country || !price) {
      return null;
    }

    return (
      <div 
        id={postId}
        className={
          "home-post isotope-item " +
          (plan > 1
            ? "col-12 col-md-12 col-lg-6 col-xl-4 col-x1400-4 "
            : "col-12 col-md-12 col-lg-12 col-xl-6")
        }
        data-filter="Type 3"
      >
        <div className="thumbnail">
          <div className="post-header">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td width="45%" style={{ textAlign: "left" }}>
                    <span className="pOrigin mobile-font-50">{originCity}</span>
                  </td>
                  <td width="10%" align="center">
                    <i className="fa fa-long-arrow-right mobile-font-50" />
                  </td>
                  <td width="45%" style={{ textAlign: "right" }}>
                    <span className="pDestination pink-text text-bold mobile-font-50">
                      {city}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {!status && <div className="premium-post-overlay"> </div>}
          <PostBadge status={status} premium={premium} />
          <div className="post-price yellow-text mobile-font-50">
            ${price}{" "}
            <span className="regular-price mobile-font-50" style={{ marginRight: 10 }}>
              ${avg}
            </span>
            {"  "}
            <span style={{ color: "orange"}}>
              {`${percent}% OFF`}
            </span>
          </div>

          <div className="post-footer">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td className="white-text mobile-font-50" style={{ textAlign: "left" }}>
                    {creationDate && moment(creationDate).fromNow()}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span className="pDestination yellow-text mobile-font-50">{country}</span>
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
          {status || 1 > 0 ? ( //Made this intentional
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
      var elem = document.getElementById("" + post.postId);

      if (elem) {
        elem.scrollIntoView();
        window.scrollBy(0, -window.innerHeight / 2);
      }
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