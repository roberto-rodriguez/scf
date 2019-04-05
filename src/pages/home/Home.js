import React from "react";

import "./homeStyles.scss";
import Post from "./cmp/Post";
import PostColumn from "./cmp/PostColumn";
import HomeHeader from "./cmp/HomeHeader";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <section className="section-80 section-lg-120">
        <div
          className="container container-wide isotope-wrap"
          style={{ pading: 0 }}
        >
          <div
            className="isotope"
            data-isotope-layout="fitRows"
            data-isotope-group="gallery"
            style={{ display: "inline-flex" }}
          >
            <table className="post-table" cellSpacing="10">
              <tbody>
                <tr>
                  <td />
                  <PostColumn
                    float={"left"}
                    header={
                      <div>
                        <h5 style={{ textAlign: "left", color: "#c62a82" }}>
                          Premium Deals{" "}
                        </h5>
                      </div>
                    }
                  />
                  <td>
                    <PostColumn
                      float={"right"}
                      header={
                        <h5 style={{ textAlign: "right", color: "#c62a82" }}>
                          Free Deals
                        </h5>
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
