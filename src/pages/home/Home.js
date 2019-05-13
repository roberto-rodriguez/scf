import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./homeStyles.scss";
import { PostColumn, ExpiredPostColumn, HomeHeader } from "./cmp/";
import * as viewStateActions from "../../actions/ViewStateActions";
class Home extends React.Component {
  render() {
    var { plan } = this.props;

    return (
      <div>
        <HomeHeader />
        <section className="section-80 section-lg-120 home-body">
          <div className="home-container isotope-wrap" style={{ pading: 0 }}>
            <div
              className="isotope"
              data-isotope-layout="fitRows"
              data-isotope-group="gallery"
              style={{ display: "inline-flex" }}
            >
              {plan > 1 ? (
                <PostColumn />
              ) : (
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
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
 
}

Home.propTypes = {
  plan: PropTypes.number 
};

 

const mapStateToProps = ({ authReducer }) => ({
  plan: authReducer.plan 
});

export default connect(
  mapStateToProps,
  viewStateActions
)(Home);
