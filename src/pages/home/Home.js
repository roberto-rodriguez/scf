import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./homeStyles.scss";
import { PostColumn, HomeHeader } from "./cmp/";
import OnboardingTour from "../../cmp/onboarding/OnboardingTour"; 
import FounderQuote from "../../cmp/onboarding/FounderQuote";

class Home extends React.Component {
  render() {
    var { /*plan, */ appStarted } = this.props;

    return (
      <div>
        <HomeHeader />
        <OnboardingTour />

        <FounderQuote />

        {appStarted && (
          <section className="section-80 section-lg-30 home-body">
            <div className="home-container isotope-wrap" style={{ pading: 0 }}>
              <div
                className="isotope"
                data-isotope-layout="fitRows"
                data-isotope-group="gallery"
                style={{ display: "inline-flex", width: "100%" }}
              >
                {
                  /* {plan > 1 ? ( */
                  <PostColumn />
                  /* : (
                <table className="post-table" cellSpacing="10">
                  <tbody>
                    <tr>
                      <td width="50%">
                        <ExpiredPostColumn />
                      </td>
                      <td width="50%">
                        <PostColumn />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )
            */
                }
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}

Home.propTypes = {
  plan: PropTypes.number,
  clientId: PropTypes.number,
  appStarted: PropTypes.bool
};

const mapStateToProps = ({ authReducer }) => ({
  plan: authReducer.plan,
  clientId: authReducer.clientId,
  appStarted: authReducer.appStarted
});

export default connect(mapStateToProps)(Home);
