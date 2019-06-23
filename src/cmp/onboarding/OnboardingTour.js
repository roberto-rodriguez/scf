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
      selector: ".expired-post-column",
      content: (
        <ul style={{ listStyle: "disc" }}>
          <li>
            Here you will find <b className="navy-blue-text">Premium Deals</b>{" "}
            that came out 3 days ago.
          </li>
          <br />
          <li>
            <b className="navy-blue-text">Premium Members </b> see these deals
            as soon as they come out.
          </li>
          <br />
          <li>
            You will get one month of{" "}
            <b className="navy-blue-text">FREE Premium Membership </b> when you
            sign up.
          </li>
        </ul>
      )
    },
    {
      selector: ".main-post-column",
      content: (
        <p>
          Here you will find the <b className="navy-blue-text">FREE Deals</b>{" "}
          (Usually one third of all the deals we find)
        </p>
      )
    },
    {
      selector: ".nav-filter-button",
      content: (
        <p>
          Here you can <b className="navy-blue-text">Filter the Deals</b> by
          Departure Cities, Destination and Dates
        </p>
      )
    },
    {
      selector: ".home-post",
      content: (
        <p>
          <b className="navy-blue-text">And this is a Deal</b> <br /> Click in
          one of the cities name and we will show you the details and how to
          find it .
          <br />
          We also show you the best prices to cities around.
        </p>
      )
    },
    {
      selector: ".isotope-filters-horizontal",
      content: (
        <p>
          Select the deals of an{" "}
          <b className="navy-blue-text">specific region</b>
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
