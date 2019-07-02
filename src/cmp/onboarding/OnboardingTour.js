import React from "react";
import Tour from "reactour";
import { connect } from "react-redux";
import * as viewActions from "../../actions/ViewActions";
import PropTypes from "prop-types";
import "./welcomePanel.scss";

class OnboardingTour extends React.Component {
  render() {
    var { showTour, setViewStateProps } = this.props;

    return (
      <Tour
        steps={this.steps}
        isOpen={showTour}
        onRequestClose={() =>
          setViewStateProps({ showWelcome: false, showTour: false })
        }
      />
    );
  }

  steps = [
    {
      selector: ".post-full",
      content: (
        <p>
          Here you will find our{" "}
          <b className="navy-blue-text">Flight Deals</b>
        </p>
      )
    },
    {
      selector: ".home-post",
      content: (
        <p>
          <b className="navy-blue-text">And this is a Deal</b> <br /> Click in
          one of the cities name and we will show you the details and how to
          find it.
        </p>
      )
    },
    {
      selector: ".post-price",
      content: (
        <div>
          These are:
          <br />
          <ul style={{ listStyle: "disc" }}>
            <li>Price</li>
            <li>Average Price</li>
            <li>% OFF the average</li>
          </ul>
        </div>
      )
    },
    {
      selector: ".nav-filter-button",
      content: (
        <p>
          Here you can<b className="navy-blue-text">{" Filter "}</b> the Deals
          by
          <b className="navy-blue-text">{" Departure Cities "}</b>, Destination
          and Departure Dates
        </p>
      )
    },
    {
      selector: ".isotope-filters-horizontal",
      content: (
        <p>
          Select the deals by specific{" "}
          <b className="navy-blue-text"> destination region</b>
        </p>
      )
    }
  ];
}

OnboardingTour.propTypes = {
  showTour: PropTypes.bool,
  setViewStateProps: PropTypes.func
};

const mapStateToProps = ({ viewReducer }) => ({
  showTour: viewReducer.showTour
});

export default connect(
  mapStateToProps,
  viewActions
)(OnboardingTour);
