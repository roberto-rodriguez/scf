import React from "react";
import PropTypes from "prop-types"; 

class CityPost extends React.Component {
  render() {
    var {imgName} = this.props;

    return ( 
        <div className="col-xl-12 col-md-6">
          <div className="thumbnail-btn details-city-thumbnail">
            <div className="post-header pink-text">
               $253 <span className="regular-price">$481</span>
            </div>
            <div className="post-footer">{imgName}</div>
            <img
              className="img-responsive center-block thumbnail-img details-city-img"
              src={require(`../images/${imgName}.jpg`)} 
              alt=""
            />
            <div className="caption datails-city-caption">  
              <a
                className="button button-primary button-xs"
                href="blog-single-post.html"
              >
               explore
              </a>
            </div>
          </div>
        </div> 
    );
  }
}

CityPost.propTypes = {
  imgName: PropTypes.string 
};


export default CityPost;
