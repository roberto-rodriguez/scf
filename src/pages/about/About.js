import React from "react";
import Footer from "../../cmp/Footer";
import Header from "../../cmp/header/Header";
import FounderQuote from "../../cmp/onboarding/FounderQuote";

const About = () => {
  return (
    <div>
      <Header />

      <section id="aboutus" className="section-60 section-lg-80">
        <div className="container container-wide text-xl-left">
          <div className="row row-50 justify-content-xl-between">
            <div className="col-xl-6 order-xl-1">
              <div>
                <div className="img-wrap">
                  <figure>
                    <img
                      className="img-responsive center-block"
                      src="../../styles/images/overview.jpg"
                      width="550"
                      height="360"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="inset-xl-left-80">
                <h2 className="text-ubold" style={{ fontSize: 32 }}>
                  A Few Words About Us
                </h2>
                <br />
                <h5 className="text-info-dr">Our Mission</h5>
                <hr className="divider divider-lg-left divider-primary divider-80" />
                <p className="big text-base" style={{ paddingRight: "10%" }}>
                  We think everybody should be able to travel the world. Our
                  mission is to increase the possibilities of each one of us to
                  do so, making it way easier to find great flight deals as soon
                  as they show up and providing all the information about them.
                </p>
              </div>
            </div>
          </div>

          <div
            className="row justify-content-xl-between"
            style={{ marginTop: 20 }}
          >
            <div className="col-xl-6">
              <div className="inset-xl-left-80">
                <h5 className="text-info-dr">Our History</h5>
                <hr className="divider divider-lg-left divider-primary divider-80" />
                <p className="big text-base" style={{ paddingRight: "10%" }}>
                  <b>Fly Super Cheap</b> is a service created by Travelers for
                  Travelers, we built it primarily for ourselves, after
                  countless hours comparing prices across sites trying to catch
                  good deals, and out of frustration with existent cheap flight
                  services which deals lack of booking information and
                  transparency on prices across providers.
                </p>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="inset-xl">
                <h5 className="text-info-dr">Our Solution</h5>
                <hr className="divider divider-lg-left divider-primary divider-80" />
                <p className="big text-base" style={{ paddingRight: "10%" }}>
                  So we set to create a free and inspirational cheap flights
                  site, where every day we put together in one place the top 10
                  best deals departing from your city in the next 12 months,
                  including for each of them a transparent price comparation for
                  all major Flight Search sites and the links to book them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FounderQuote showFull />

      <section className="section-60 section-lg-80">
        <div className="container container-wide">
          <h5 className="view-animate fadeInUpBigger delay-04 text-info-dr active">
            Why People Choose Us
          </h5>
          <h2 className="view-animate fadeInUpBigger delay-04 text-ubold active">
            Our Advantages
          </h2>
          <hr className="view-animate fadeInUpBigger delay-06 divider divider-primary divider-80 active" />
          <div className="row row-50">
            <div className="col-md-6 col-lg-3 icon-box view-animate fadeInUpSmall delay-08 active">
              <span className="icon icon-lg text-primary-grad icon-primary icon-circle mdi mdi-airplane" />
              <h5 className="text-bold">
                We find the very best
                <br className="d-none d-lg-block" />
                Flight Deals every day
              </h5>
              <hr className="divider divider-info divider-50" />
              <p className="inset-xxl-left-40 inset-xxl-right-40">
                Every day we analyze all flight combinations from your city to
                other +200 cities around the world for the next 12 months, and
                post the best deals we find out of 640 000 possible
                combinations.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 icon-box view-animate fadeInUpSmall delay-08 active">
              <span className="icon icon-lg text-primary-grad icon-primary icon-circle mdi mdi-account-multiple" />
              <h5 className="text-bold">
                We verify our deals
                <br className="d-none d-lg-block" />
                with all major search sites
              </h5>
              <hr className="divider divider-info divider-50" />
              <p className="inset-xxl-left-40 inset-xxl-right-40">
                After we find these deals we compare these prices with all major
                Flight Search sites, including Google Flights, Kayak, Sky
                Scanner, Momondo and Kiwi.com and post these prices here too.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 icon-box view-animate fadeInUpSmall delay-08 active">
              <span className="icon icon-lg text-primary-grad icon-primary icon-circle fa-search" />
              <h5 className="text-bold">Easy to search</h5>
              <hr className="divider divider-info divider-50" />
              <p className="inset-xxl-left-40 inset-xxl-right-40">
                Convenient and fast way to search for the deals relevant to you,
                filtering by departure cities, destination and dates.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 icon-box view-animate fadeInUpSmall delay-08 active">
              <span
                className="icon icon-lg text-primary-grad icon-primary icon-circle mdi mdi-calendar-multiple-check"
                style={{ fontSize: 52 }}
              />
              <h5 className="text-bold">
                Easy Access and Reliable
                <br className="d-none d-lg-block" />
                Booking Information
              </h5>
              <hr className="divider divider-info divider-50" />
              <p className="inset-xxl-left-40 inset-xxl-right-40">
                For each deal we provide you 10 - 15 sample search, and for each
                of them we give you the links with the prices for all providers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
