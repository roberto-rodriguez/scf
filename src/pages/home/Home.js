import React from "react";

import "../../styles/tpl/style.css";
import "../../styles/tpl/bootstrap.css";
import "./homeStyles.scss";
//<div className="page text-center">
const Home = () => {
  return (
    <div>
      <section className="section-80 section-lg-120">
        <div className="container container-wide isotope-wrap">
          <div
            className="isotope"
            data-isotope-layout="fitRows"
            data-isotope-group="gallery"
          >
            <div className="row text-lg-left">
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item"
                data-filter="*"
              >
                <div className="thumbnail">
                  <img
                    src={require("./images/gallery-01.jpg")}
                    className="img-responsive center-block thumbnail-image"
                    width="420"
                    height="280"
                    alt=""
                  />
                  <a className="caption" href="tickets.html">
                    <h4>London</h4>
                    <hr className="divider divider-white divider-md-left divider-40" />
                    <p>
                      When booking a ticket on our website, all you need to
                      think of is the list of things you’ll pack in your
                      suitcase, we will do everything else for you!
                    </p>
                  </a>
                </div>
              </div>
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item"
                data-filter="Type 3"
              >
                <div className="thumbnail">
                  <img
                    src={require("./images/gallery-02.jpg")}
                    className="img-responsive center-block thumbnail-image"
                    width="420"
                    height="280"
                    alt=""
                  />

                  <div className="caption">
                    <h4 className="text-ubold">Venice</h4>
                    <p className="text-italic text-gray">Italy</p>
                    <p>Departure City:</p>
                    <ul className="list-marked list-marked-no-padding list-marked-flex text-base">
                      <li>
                        <a className="text-info-dr" href="tickets.html">
                          Paris
                        </a>
                        <div>
                          {" "}
                          <span>$98.00</span>
                        </div>
                      </li>
                      <li>
                        <a className="text-info-dr" href="tickets.html">
                          Rome
                        </a>
                        <div>
                          {" "}
                          <span>$134.00</span>
                        </div>
                      </li>
                      <li>
                        <a className="text-info-dr" href="tickets.html">
                          Barcelona
                        </a>
                        <div>
                          {" "}
                          <span>$119.00</span>
                        </div>
                      </li>
                      <li>
                        <a className="text-info-dr" href="tickets.html">
                          Berlin
                        </a>
                        <div>
                          {" "}
                          <span>$99.00</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item"
                data-filter="Type 3"
              >
                <div className="thumbnail">
                  <img
                    src={require("./images/gallery-03.jpg")}
                    className="img-responsive center-block thumbnail-image"
                    width="420"
                    height="280"
                    alt=""
                  />
                  <a className="caption" href="tickets.html">
                    <h4>London</h4>
                    <hr className="divider divider-white divider-md-left divider-40" />
                    <p>
                      When booking a ticket on our website, all you need to
                      think of is the list of things you’ll pack in your
                      suitcase, we will do everything else for you!
                    </p>
                  </a>
                </div>
              </div>
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item"
                data-filter="Type 3"
              >
                <div className="thumbnail">
                  <img
                    src={require("./images/gallery-04.jpg")}
                    className="img-responsive center-block thumbnail-image"
                    width="420"
                    height="280"
                    alt=""
                  />
                  <a className="caption" href="tickets.html">
                    <h4>London</h4>
                    <hr className="divider divider-white divider-md-left divider-40" />
                    <p>
                      When booking a ticket on our website, all you need to
                      think of is the list of things you’ll pack in your
                      suitcase, we will do everything else for you!
                    </p>
                  </a>
                </div>
              </div>
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item"
                data-filter="Type 2"
              >
                <div className="thumbnail">
                  <img
                    src={require("./images/gallery-05.jpg")}
                    className="img-responsive center-block thumbnail-image"
                    width="420"
                    height="280"
                    alt=""
                  />
                  <a className="caption" href="tickets.html">
                    <h4>London</h4>
                    <hr className="divider divider-white divider-md-left divider-40" />
                    <p>
                      When booking a ticket on our website, all you need to
                      think of is the list of things you’ll pack in your
                      suitcase, we will do everything else for you!
                    </p>
                  </a>
                </div>
              </div>
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item"
                data-filter="Type 2"
              >
                <div className="thumbnail">
                  <img
                    src={require("./images/gallery-06.jpg")}
                    className="img-responsive center-block thumbnail-image"
                    width="420"
                    height="280"
                    alt=""
                  />
                  <a className="caption" href="tickets.html">
                    <h4>London</h4>
                    <hr className="divider divider-white divider-md-left divider-40" />
                    <p>
                      When booking a ticket on our website, all you need to
                      think of is the list of things you’ll pack in your
                      suitcase, we will do everything else for you!
                    </p>
                  </a>
                </div>
              </div>
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item"
                data-filter="Type 1"
              >
                <div className="thumbnail">
                  <img
                    src={require("./images/gallery-07.jpg")}
                    className="img-responsive center-block thumbnail-image"
                    width="420"
                    height="280"
                    alt=""
                  />
                  <a className="caption" href="tickets.html">
                    <h4>London</h4>
                    <hr className="divider divider-white divider-md-left divider-40" />
                    <p>
                      When booking a ticket on our website, all you need to
                      think of is the list of things you’ll pack in your
                      suitcase, we will do everything else for you!
                    </p>
                  </a>
                </div>
              </div>
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item"
                data-filter="Type 1"
              >
                <div className="thumbnail">
                  <img
                    src={require("./images/gallery-08.jpg")}
                    className="img-responsive center-block thumbnail-image"
                    width="420"
                    height="280"
                    alt=""
                  />
                  <a className="caption" href="tickets.html">
                    <h4>London</h4>
                    <hr className="divider divider-white divider-md-left divider-40" />
                    <p>
                      When booking a ticket on our website, all you need to
                      think of is the list of things you’ll pack in your
                      suitcase, we will do everything else for you!
                    </p>
                  </a>
                </div>
              </div>
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item"
                data-filter="Type 1"
              >
                <div className="thumbnail">
                  <img
                    src={require("./images/gallery-09.jpg")}
                    className="img-responsive center-block thumbnail-image"
                    width="420"
                    height="280"
                    alt=""
                  />
                  <a className="caption" href="tickets.html">
                    <h4>London</h4>
                    <hr className="divider divider-white divider-md-left divider-40" />
                    <p>
                      When booking a ticket on our website, all you need to
                      think of is the list of things you’ll pack in your
                      suitcase, we will do everything else for you!
                    </p>
                  </a>
                </div>
              </div>
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item"
                data-filter="Type 4"
              >
                <div className="thumbnail">
                  <img
                    src={require("./images/gallery-10.jpg")}
                    className="img-responsive center-block thumbnail-image"
                    width="420"
                    height="280"
                    alt=""
                  />
                  <a className="caption" href="tickets.html">
                    <h4>London</h4>
                    <hr className="divider divider-white divider-md-left divider-40" />
                    <p>
                      When booking a ticket on our website, all you need to
                      think of is the list of things you’ll pack in your
                      suitcase, we will do everything else for you!
                    </p>
                  </a>
                </div>
              </div>
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item"
                data-filter="Type 4"
              >
                <div className="thumbnail">
                  <img
                    src={require("./images/gallery-11.jpg")}
                    className="img-responsive center-block thumbnail-image"
                    width="420"
                    height="280"
                    alt=""
                  />
                  <a className="caption" href="tickets.html">
                    <h4>London</h4>
                    <hr className="divider divider-white divider-md-left divider-40" />
                    <p>
                      When booking a ticket on our website, all you need to
                      think of is the list of things you’ll pack in your
                      suitcase, we will do everything else for you!
                    </p>
                  </a>
                </div>
              </div>
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 isotope-item"
                data-filter="Type 4"
              >
                <div className="thumbnail">
                  <img
                    src={require("./images/gallery-12.jpg")}
                    className="img-responsive center-block thumbnail-image"
                    width="420"
                    height="280"
                    alt=""
                  />
                  <a className="caption" href="tickets.html">
                    <h4>London</h4>
                    <hr className="divider divider-white divider-md-left divider-40" />
                    <p>
                      When booking a ticket on our website, all you need to
                      think of is the list of things you’ll pack in your
                      suitcase, we will do everything else for you!
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
