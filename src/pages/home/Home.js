import React from "react";
import { connect } from "react-redux";

import "./homeStyles.scss";
import { PostColumn, ExpiredPostColumn, HomeHeader } from "./cmp/";

class Home extends React.Component {
  render() {
    var { plan } = this.props;

    return (
      <div>
        <HomeHeader />
        <section className="section-80 section-lg-120 home-body">
          <div
            className="home-container isotope-wrap"
            style={{ pading: 0 }}
          >
            <div
              className="isotope"
              data-isotope-layout="fitRows"
              data-isotope-group="gallery"
              style={{ display: "inline-flex" }}
            >
              {plan ? (
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

const mapStateToProps = ({ authReducer }) => ({
  plan: authReducer.plan
});

export default connect(mapStateToProps)(Home);
