import React from "react";
import "./postStyles.scss";
const PostPremium = () => {
  return (
    <div
      className="col-12 col-md-12 col-lg-12 col-xl-6 isotope-item"
      data-filter="Type 3"
    >
      <div className="thumbnail">
        <div className="premium-post-overlay">
          <p className="expired-text">EXPIRED</p>
        </div>
        <div className="post-header pink-text">
          $253 <span className="regular-price">$750</span>
        </div>
        <div className="post-footer">1 week ago</div>
        <img
          src={require("../../images/gallery-02.jpg")}
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
              style={{textAlign:'center'}}
            > 
              Start 14 days trial
            </a>  
            <span  className="premium-post-login" >Already a member? <span className="link">LogIn</span></span> 
        </div>
      </div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td>
              <p className="pOrigin">San Francisco</p>
            </td>
            <td>
              <i
                style={{ marginBottom: 20 }}
                className="fa fa-long-arrow-right"
              />
            </td>
            <td>
              <p className="pDestination pink-text">New Zealand</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PostPremium;
