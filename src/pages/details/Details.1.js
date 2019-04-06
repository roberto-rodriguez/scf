import React from "react";

import "./detailsStyles.scss";
import HomeHeader from "./cmp/DetailsHeader";

const Details = () => {
  return (
    <div>
      <HomeHeader />
      <section className="section-80 section-lg-120 bg-gray-lighter">
        <div className="container container-wide">
          <div className="row row-50 text-xl-left">
            <div className="col-xl-8">
              <div className="inset-xxl-right-80">
                <h2 className="text-ubold">
                  New York, NY (JFK) to London (Any)
                </h2>
                <h5 className="text-gray">2 Adults, economy</h5>
                <hr className="divider divider-lg-left divider-primary divider-80" />
                <div className="row row-20 row-offset-7 justify-content-sm-between text-left">
                  <div className="col-md-8 col-lg-6 col-xxl-4">
                    <div className="row row-20">
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label
                            className="form-label-outside"
                            htmlFor="departure-date"
                          >
                            Departure
                          </label>
                          <input
                            className="form-input form-input-gray"
                            id="departure-date"
                            type="text"
                            data-time-picker="date"
                            data-constraints="@Required"
                            name="departure"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label
                            className="form-label-outside"
                            htmlFor="return-date"
                          >
                            Return
                          </label>
                          <input
                            className="form-input form-input-gray"
                            id="return-date"
                            type="text"
                            data-time-picker="date"
                            data-constraints="@Required"
                            name="return"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-xxl-3">
                    <span className="small">Sort by</span>

                    <select
                      className="form-input select-filter"
                      data-placeholder="Select an option"
                      data-minimum-results-for-search="Infinity"
                      data-constraints="@Required"
                    >
                      <option>Price: low to high</option>
                      <option value="2">Item 1-1</option>
                      <option value="3">Item 1-2</option>
                      <option value="4">Item 1-2</option>
                      <option value="5">Item 2-1</option>
                      <option value="6">Item 2-2</option>
                      <option value="7">Item 2-3</option>
                    </select>
                  </div>
                </div>
                <ul className="list-tickets">
                  <li className="list-item">
                    <div className="list-item-inner">
                      <div className="list-item-main">
                        <div className="list-item-top">
                          <div className="list-item-logo"> 
                            <img src={require("./images/logo-01.jpg")} alt=""/>
                          </div>
                          <div className="list-item-content">
                            <div className="list-item-content-left">
                              <div className="text-bold text-base">7:55am</div>
                              <span className="small d-block">JFK</span>
                            </div>
                            <div className="list-item-content-line-wrapper small">
                              <div className="list-item-content-line-top">
                                6h 50m
                              </div>
                              <div className="list-item-content-line" />
                              <div className="list-item-content-line-bottom text-info-dr">
                                Direct
                              </div>
                            </div>
                            <div className="list-item-content-right">
                              <div className="text-bold text-base">7:45pm</div>
                              <span className="small d-block">LHR</span>
                            </div>
                          </div>
                        </div>
                        <hr className="divider divider-wide" />
                        <div className="list-item-bottom">
                          <div className="list-item-logo"> 
                            <img src={require("./images/logo-01.jpg")} alt=""/>
                          </div>
                          <div className="list-item-content">
                            <div className="list-item-content-left">
                              <div className="text-bold text-base">9:50pm</div>
                              <span className="small d-block">LGW</span>
                            </div>
                            <div className="list-item-content-line-wrapper small">
                              <div className="list-item-content-line-top">
                                18h 40m
                              </div>
                              <div className="list-item-content-line" />
                              <div className="list-item-content-line-bottom">
                                <span className="text-primary-dr">1 stop</span>
                                <span> DUB</span>
                              </div>
                            </div>
                            <div className="list-item-content-right">
                              <div className="text-bold text-base">
                                11:30am (+1)
                              </div>
                              <span className="small d-block">JFK</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="list-item-footer">
                        <span className="small">7 deals from</span>
                        <h5 className="text-bold list-item-price">$1,323</h5>
                        <a
                          className="button button-primary button-xs button-no-shadow"
                          href="#"
                        >
                          select
                        </a>
                      </div>
                    </div>
                    <div className="small text-gray-light list-item-subtitle">
                      Operated by American Airlines
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="list-item-inner">
                      <div className="list-item-main">
                        <div className="list-item-top">
                          <div className="list-item-logo"> 
                            <img src={require("./images/logo-02.jpg")} alt=""/>
                          </div>
                          <div className="list-item-content">
                            <div className="list-item-content-left">
                              <div className="text-bold text-base">7:55am</div>
                              <span className="small d-block">JFK</span>
                            </div>
                            <div className="list-item-content-line-wrapper small">
                              <div className="list-item-content-line-top">
                                6h 50m
                              </div>
                              <div className="list-item-content-line" />
                              <div className="list-item-content-line-bottom text-info-dr">
                                Direct
                              </div>
                            </div>
                            <div className="list-item-content-right">
                              <div className="text-bold text-base">7:45pm</div>
                              <span className="small d-block">LHR</span>
                            </div>
                          </div>
                        </div>
                        <hr className="divider divider-wide" />
                        <div className="list-item-bottom">
                          <div className="list-item-logo"> 
                            <img src={require("./images/logo-03.jpg")} alt=""/>
                          </div>
                          <div className="list-item-content">
                            <div className="list-item-content-left">
                              <div className="text-bold text-base">9:50pm</div>
                              <span className="small d-block">LGW</span>
                            </div>
                            <div className="list-item-content-line-wrapper small">
                              <div className="list-item-content-line-top">
                                18h 40m
                              </div>
                              <div className="list-item-content-line" />
                              <div className="list-item-content-line-bottom">
                                <span className="text-primary-dr">1 stop</span>
                                <span> DUB</span>
                              </div>
                            </div>
                            <div className="list-item-content-right">
                              <div className="text-bold text-base">
                                11:30am (+1)
                              </div>
                              <span className="small d-block">JFK</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="list-item-footer">
                        <span className="small">7 deals from</span>
                        <h5 className="text-bold list-item-price">$1,623</h5>
                        <a
                          className="button button-primary button-xs button-no-shadow"
                          href="#"
                        >
                          select
                        </a>
                      </div>
                    </div>
                    <div className="small text-gray-light list-item-subtitle">
                      Operated by American Airlines
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="list-item-inner">
                      <div className="list-item-main">
                        <div className="list-item-top">
                          <div className="list-item-logo"> 
                            <img src={require("./images/logo-04.jpg")} alt=""/>
                          </div>
                          <div className="list-item-content">
                            <div className="list-item-content-left">
                              <div className="text-bold text-base">7:55am</div>
                              <span className="small d-block">JFK</span>
                            </div>
                            <div className="list-item-content-line-wrapper small">
                              <div className="list-item-content-line-top">
                                6h 50m
                              </div>
                              <div className="list-item-content-line" />
                              <div className="list-item-content-line-bottom text-info-dr">
                                Direct
                              </div>
                            </div>
                            <div className="list-item-content-right">
                              <div className="text-bold text-base">7:45pm</div>
                              <span className="small d-block">LHR</span>
                            </div>
                          </div>
                        </div>
                        <hr className="divider divider-wide" />
                        <div className="list-item-bottom">
                          <div className="list-item-logo"> 
                            <img src={require("./images/logo-05.jpg")} alt=""/>
                          </div>
                          <div className="list-item-content">
                            <div className="list-item-content-left">
                              <div className="text-bold text-base">9:50pm</div>
                              <span className="small d-block">LGW</span>
                            </div>
                            <div className="list-item-content-line-wrapper small">
                              <div className="list-item-content-line-top">
                                18h 40m
                              </div>
                              <div className="list-item-content-line" />
                              <div className="list-item-content-line-bottom">
                                <span className="text-primary-dr">1 stop</span>
                                <span> DUB</span>
                              </div>
                            </div>
                            <div className="list-item-content-right">
                              <div className="text-bold text-base">
                                11:30am (+1)
                              </div>
                              <span className="small d-block">JFK</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="list-item-footer">
                        <span className="small">7 deals from</span>
                        <h5 className="text-bold list-item-price">$1,846</h5>
                        <a
                          className="button button-primary button-xs button-no-shadow"
                          href="#"
                        >
                          select
                        </a>
                      </div>
                    </div>
                    <div className="small text-gray-light list-item-subtitle">
                      Operated by American Airlines
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="list-item-inner">
                      <div className="list-item-main">
                        <div className="list-item-top">
                          <div className="list-item-logo"> 
                            <img src={require("./images/logo-04.jpg")} alt=""/>
                          </div>
                          <div className="list-item-content">
                            <div className="list-item-content-left">
                              <div className="text-bold text-base">7:55am</div>
                              <span className="small d-block">JFK</span>
                            </div>
                            <div className="list-item-content-line-wrapper small">
                              <div className="list-item-content-line-top">
                                6h 50m
                              </div>
                              <div className="list-item-content-line" />
                              <div className="list-item-content-line-bottom text-info-dr">
                                Direct
                              </div>
                            </div>
                            <div className="list-item-content-right">
                              <div className="text-bold text-base">7:45pm</div>
                              <span className="small d-block">LHR</span>
                            </div>
                          </div>
                        </div>
                        <hr className="divider divider-wide" />
                        <div className="list-item-bottom">
                          <div className="list-item-logo"> 
                            <img src={require("./images/logo-05.jpg")} alt=""/>
                          </div>
                          <div className="list-item-content">
                            <div className="list-item-content-left">
                              <div className="text-bold text-base">9:50pm</div>
                              <span className="small d-block">LGW</span>
                            </div>
                            <div className="list-item-content-line-wrapper small">
                              <div className="list-item-content-line-top">
                                18h 40m
                              </div>
                              <div className="list-item-content-line" />
                              <div className="list-item-content-line-bottom">
                                <span className="text-primary-dr">1 stop</span>
                                <span> DUB</span>
                              </div>
                            </div>
                            <div className="list-item-content-right">
                              <div className="text-bold text-base">
                                11:30am (+1)
                              </div>
                              <span className="small d-block">JFK</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="list-item-footer">
                        <span className="small">7 deals from</span>
                        <h5 className="text-bold list-item-price">$1,846</h5>
                        <a
                          className="button button-primary button-xs button-no-shadow"
                          href="#"
                        >
                          select
                        </a>
                      </div>
                    </div>
                    <div className="small text-gray-light list-item-subtitle">
                      Operated by American Airlines
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="list-item-inner">
                      <div className="list-item-main">
                        <div className="list-item-top">
                          <div className="list-item-logo"> 
                            <img src={require("./images/logo-06.jpg")} alt=""/>
                          </div>
                          <div className="list-item-content">
                            <div className="list-item-content-left">
                              <div className="text-bold text-base">7:55am</div>
                              <span className="small d-block">JFK</span>
                            </div>
                            <div className="list-item-content-line-wrapper small">
                              <div className="list-item-content-line-top">
                                6h 50m
                              </div>
                              <div className="list-item-content-line" />
                              <div className="list-item-content-line-bottom text-info-dr">
                                Direct
                              </div>
                            </div>
                            <div className="list-item-content-right">
                              <div className="text-bold text-base">7:45pm</div>
                              <span className="small d-block">LHR</span>
                            </div>
                          </div>
                        </div>
                        <hr className="divider divider-wide" />
                        <div className="list-item-bottom">
                          <div className="list-item-logo"> 
                            <img src={require("./images/logo-07.jpg")} alt=""/>
                          </div>
                          <div className="list-item-content">
                            <div className="list-item-content-left">
                              <div className="text-bold text-base">9:50pm</div>
                              <span className="small d-block">LGW</span>
                            </div>
                            <div className="list-item-content-line-wrapper small">
                              <div className="list-item-content-line-top">
                                18h 40m
                              </div>
                              <div className="list-item-content-line" />
                              <div className="list-item-content-line-bottom">
                                <span className="text-primary-dr">1 stop</span>
                                <span> DUB</span>
                              </div>
                            </div>
                            <div className="list-item-content-right">
                              <div className="text-bold text-base">
                                11:30am (+1)
                              </div>
                              <span className="small d-block">JFK</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="list-item-footer">
                        <span className="small">7 deals from</span>
                        <h5 className="text-bold list-item-price">$2,298</h5>
                        <a
                          className="button button-primary button-xs button-no-shadow"
                          href="#"
                        >
                          select
                        </a>
                      </div>
                    </div>
                    <div className="small text-gray-light list-item-subtitle">
                      Operated by American Airlines
                    </div>
                  </li>
                </ul>
                <ul className="pagination">
                  <li className="disabled">
                    <span aria-label="Previous">
                      <span className="fa-chevron-left" aria-hidden="true" />
                    </span>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span className="fa-chevron-right" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 tickets-aside">
              <div className="row row-30">
                <div className="col-xl-12 col-md-6">
                  <div className="thumbnail-btn">
                    <img        
                      className="img-responsive center-block thumbnail-img" 
                      src={require("./images/tickets-01.jpg")} 
                      width="570"
                      height="300"
                      alt=""
                    />
                    <div className="caption">
                      <h4>Find a Hotel</h4>
                      <a
                        className="button button-primary button-xs"
                        href="blog-single-post.html"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6">
                  <div className="thumbnail-btn">
                    <img
                      className="img-responsive center-block thumbnail-img"
                      src={require("./images/tickets-02.jpg")}  
                      width="570"
                      height="300"
                      alt=""
                    />
                    <div className="caption">
                      <h4>Rent a Car</h4>
                      <a
                        className="button button-primary button-xs"
                        href="blog-single-post.html"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="text-bold hr-title">Latest Blog Posts</h5>
              <div className="row row-50 row-md-30 justify-content-sm-center text-md-left">
                <div className="col-md-10 col-lg-6 col-xl-12">
                  <div className="unit flex-column flex-md-row">
                    <div className="unit-left">
                      <img
                        className="center-block img-responsive" 
                        src={require("./images/post-01.jpg")} 
                        width="180"
                        height="110"
                        alt=""
                      />
                    </div>
                    <div className="unit-body">
                      <h5 className="text-bold" style="line-height: 28px;">
                        <a
                          className="text-info-dr"
                          href="blog-single-post.html"
                        >
                          9 Ways to Become a Successful{" "}
                          <br className="veil.d-xl-block" /> Travel Blogger
                        </a>
                      </h5>
                      <hr className="divider divider-wide" />
                      <p>
                        <span className="text-middle text-gray-light icon icon-xs mdi mdi-calendar-clock" />
                        <span className="text-middle inset-left-8">
                          Sep 12, 2019 at 3:28pm
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-12">
                  <div className="unit flex-column flex-md-row">
                    <div className="unit-left">
                      <img
                        className="center-block img-responsive" 
                        src={require("./images/post-02.jpg")} 
                        width="180"
                        height="110"
                        alt=""
                      />
                    </div>
                    <div className="unit-body">
                      <h5 className="text-bold" style="line-height: 28px;">
                        <a
                          className="text-info-dr"
                          href="blog-single-post.html"
                        >
                          Visiting Paris on a Budget
                        </a>
                      </h5>
                      <hr className="divider divider-wide" />
                      <p>
                        <span className="text-middle text-gray-light icon icon-xs mdi mdi-calendar-clock" />
                        <span className="text-middle inset-left-8">
                          Sep 12, 2019 at 3:28pm
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-10 col-lg-12">
                  <div className="unit flex-column flex-md-row">
                    <div className="unit-left">
                      <img
                        className="center-block img-responsive" 
                        src={require("./images/post-03.jpg")} 
                        width="180"
                        height="110"
                        alt=""
                      />
                    </div>
                    <div className="unit-body">
                      <h5 className="text-bold" style="line-height: 28px;">
                        <a
                          className="text-info-dr"
                          href="blog-single-post.html"
                        >
                          How to Make Travel Videos
                        </a>
                      </h5>
                      <hr className="divider divider-wide" />
                      <p>
                        <span className="text-middle text-gray-light icon icon-xs mdi mdi-calendar-clock" />
                        <span className="text-middle inset-left-8">
                          Sep 12, 2019 at 3:28pm
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
