import React from "react";
import { HashLink } from "react-router-hash-link";
import Header from "../../cmp/header/Header";
import Footer from "../../cmp/Footer";

class FaqPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFaq: 0
    };

    this.onExpand = this.onExpand.bind(this);
  }

  onExpand = faqId => this.setState({ selectedFaq: faqId });

  render() {
    const { selectedFaq } = this.state;
    return (
      <div>
        <div
          className="page text-center animated"
          style={{ animationDuration: "500ms" }}
        >
          <Header />          
          <section className="section-80 section-lg-120 bg-image-02">
            <div className="container container-wide text-xl-left">
              <div className="row">
                <div className="col-lg-7 col-xl-6 col-xxl-5 col-lg-preffix-5 col-xxl-preffix-6">
                  <h2 className="text-ubold">Frequently Asked Questions</h2>
                  <hr className="divider divider-lg-left divider-primary divider-80" />
                  <div
                    className="responsive-tabs responsive responsive-tabs-classNameic resp-easy-accordion"
                    data-type="accordion"
                    style={{ display: "block", width: "100%" }}
                  >
                    <ul
                      className="resp-tabs-list tabs-1 text-center tabs-group-default"
                      style={{ display: "none" }}
                    >
                      <li
                        className={
                          selectedFaq == 0
                            ? "resp-tab-item resp-tab-active"
                            : "resp-tab-item"
                        }
                        aria-controls="tab_item-0"
                        role="tab"
                      >
                        How do I select a one-way flight?
                      </li>
                      <li
                        className={
                          selectedFaq == 1
                            ? "resp-tab-item resp-tab-active"
                            : "resp-tab-item"
                        }
                        aria-controls="tab_item-1"
                        role="tab"
                      >
                        Can I make ticket reservations both for domestic and
                        international flights?
                      </li>
                      <li
                        className={
                          selectedFaq == 2
                            ? "resp-tab-item resp-tab-active"
                            : "resp-tab-item"
                        }
                        aria-controls="tab_item-2"
                        role="tab"
                      >
                        Why can&apost I find flights for a specific airline
                        I&aposm interested in?
                      </li>
                      <li
                        className={
                          selectedFaq == 3
                            ? "resp-tab-item resp-tab-active"
                            : "resp-tab-item"
                        }
                        aria-controls="tab_item-3"
                        role="tab"
                      >
                        How can I be sure that my reservation has been completed
                        successfully?
                      </li>
                      <li
                        className={
                          selectedFaq == 4
                            ? "resp-tab-item resp-tab-active"
                            : "resp-tab-item"
                        }
                        aria-controls="tab_item-4"
                        role="tab"
                      >
                        Do I have to confirm the departure time of my flight?
                      </li>
                    </ul>
                    <div className="resp-tabs-container text-md-left tabs-group-default">
                      <div
                        className={
                          selectedFaq == 0
                            ? "resp-accordion resp-tab-active"
                            : "resp-accordion"
                        }
                        role="tab"
                        aria-controls="tab_item-0"
                        onClick={() => this.onExpand(0)}
                      >
                        <span className="resp-arrow" />
                        How do I select a one-way flight?
                      </div>
                      <div
                        className={
                          selectedFaq == 0
                            ? "resp-tab-content resp-tab-content-active"
                            : "resp-tab-content"
                        }
                        aria-labelledby="tab_item-0"
                        style={{
                          display: selectedFaq == 0 ? "block" : "none"
                        }}
                      >
                        <p>
                          Using the flights search engine you have two options:
                          either simple journey (One way) or with return (Round
                          trip). Round trip is the default option. If you are
                          interested in a one way journey you will have to
                          select the respective button.
                        </p>
                      </div>
                      <div
                        className={
                          selectedFaq == 1
                            ? "resp-accordion resp-tab-active"
                            : "resp-accordion"
                        }
                        role="tab"
                        aria-controls="tab_item-1"
                        onClick={() => this.onExpand(1)}
                      >
                        <span className="resp-arrow" />
                        Can I make ticket reservations both for domestic and
                        international flights?
                      </div>
                      <div
                        className={
                          selectedFaq == 1
                            ? "resp-tab-content resp-tab-content-active"
                            : "resp-tab-content"
                        }
                        aria-labelledby="tab_item-1"
                        style={{
                          display: selectedFaq == 1 ? "block" : "none"
                        }}
                      >
                        <p>
                          Yes, you can select flights from any airport to
                          everywhere in the world.
                        </p>
                      </div>
                      <div
                        className={
                          selectedFaq == 2
                            ? "resp-accordion resp-tab-active"
                            : "resp-accordion"
                        }
                        role="tab"
                        aria-controls="tab_item-2"
                        onClick={() => this.onExpand(2)}
                      >
                        <span className="resp-arrow" />
                        Why can&apost I find flights for a specific airline
                        I&aposm interested in?
                      </div>
                      <div
                        className={
                          selectedFaq == 2
                            ? "resp-tab-content resp-tab-content-active"
                            : "resp-tab-content"
                        }
                        aria-labelledby="tab_item-2"
                        style={{
                          display: selectedFaq == 2 ? "block" : "none"
                        }}
                      >
                        <p>
                          Using our search engine you can make ticket
                          reservations for most of the airlines in the world.
                          However you cannot book tickets for charter flights,
                          flights operated by specific low cost airlines as well
                          as by companies that don&apost have representation in
                          Greece.
                        </p>
                      </div>
                      <div
                        className={
                          selectedFaq == 3
                            ? "resp-accordion resp-tab-active"
                            : "resp-accordion"
                        }
                        role="tab"
                        aria-controls="tab_item-3"
                        onClick={() => this.onExpand(3)}
                      >
                        <span className="resp-arrow" />
                        How can I be sure that my reservation has been completed
                        successfully?
                      </div>
                      <div
                        className={
                          selectedFaq == 3
                            ? "resp-tab-content resp-tab-content-active"
                            : "resp-tab-content"
                        }
                        aria-labelledby="tab_item-3"
                        style={{
                          display: selectedFaq == 3 ? "block" : "none"
                        }}
                      >
                        <p>
                          Right after the completion of the reservation
                          procedure on our web page, a success page will be
                          displayed on your screen and an e-mail containing your
                          e-ticket and related information will be sent to you
                          within 24 hours from the moment you have paid for your
                          reservation (usually this takes several minutes).
                        </p>
                      </div>
                      <div
                        className={
                          selectedFaq == 4
                            ? "resp-accordion resp-tab-active"
                            : "resp-accordion"
                        }
                        role="tab"
                        aria-controls="tab_item-4"
                        onClick={() => this.onExpand(4)}
                      >
                        <span className="resp-arrow" />
                        Do I have to confirm the departure time of my flight?
                      </div>
                      <div
                        className={
                          selectedFaq == 4
                            ? "resp-tab-content resp-tab-content-active"
                            : "resp-tab-content"
                        }
                        aria-labelledby="tab_item-4"
                        style={{
                          display: selectedFaq == 4 ? "block" : "none"
                        }}
                      >
                        <p>
                          If you want to confirm the departure time of your
                          flight we suggest you contact the airline or the
                          airport in order to be accurately informed. We will
                          make any possible effort to inform you in the event
                          that something changed on your flight. Nevertheless,
                          in case of bad weather conditions, we strongly
                          recommend that you contact directly the airline or the
                          airport.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-80 section-xl-120 bg-gray-lighter">
            <div className="container container-wide">
              <div className="row justify-content-sm-center">
                <div className="col-lg-8 col-xl-6">
                  <h2 className="text-ubold">Some of Your Questions</h2>
                  <hr className="divider divider-primary divider-80" />
                  <div className="text-lg-left offset-custom-60">
                    <ul className="list-marked">
                      <li> 
                        <HashLink smooth to="#q1" className="text-info-dr" data-custom-scroll-to="q1" >
                        Can I make changes to my reservation after I have
                        purchased it?
                        </HashLink> 
                      </li>
                      <li>
                      <HashLink smooth to="#q2" className="text-info-dr" data-custom-scroll-to="q2" >
                          I noticed some flights are operated by other airlines
                          and have a 24-hour hold. What does this mean?
                        </HashLink>
                      </li>
                      <li>
                      <HashLink smooth to="#q3" className="text-info-dr" data-custom-scroll-to="q3" >
                          Does the number of passengers I choose limit my lowest
                          fare flight choices?
                        </HashLink>
                      </li>
                      <li>
                      <HashLink smooth to="#q4" className="text-info-dr" data-custom-scroll-to="q4" id="q1" >
                          Can I book flights for multiple-stop itineraries
                          online?
                        </HashLink>
                      </li>
                      <li>
                      <HashLink smooth to="#q5" className="text-info-dr" data-custom-scroll-to="q5" >
                          I received a promotional offer to be redeemed online.
                          How can I redeem it?
                        </HashLink>
                      </li>
                    </ul>                    
                    <dl className="list-terms-variant-1" >
                      <dt className="h5" id="q2">
                        Can I make changes to my reservation after I have
                        purchased it?
                      </dt>
                      <dd>
                        <p>
                          Using the flights search engine you have two options:
                          either simple journey (One way) or with return (Round
                          trip). Round trip is the default option. If you are
                          interested in a one way journey you will have to
                          select the respective button.
                        </p>
                      </dd>
                      <dt className="h5" id="q3">
                        I noticed some flights are operated by other airlines
                        and have a 24-hour hold. What does this mean?
                      </dt>
                      <dd>
                        <p>
                          Flights operated by certain partners require a 24-hour
                          hold so we can ensure that your preferred flight and
                          seat are processed with that partner. Once we receive
                          confirmation of your itinerary from the partner
                          airline, we will notify you via email.
                        </p>
                      </dd>
                      <dt className="h5" id="q4">
                        Does the number of passengers I choose limit my lowest
                        fare flight choices?
                      </dt>
                      <dd>
                        <p>
                          Yes. Based on the number of travelers in your group,
                          the lowest fare may not be available on a particular
                          flight due to seat availability.
                        </p>
                      </dd>
                      <dt className="h5" id="q5">
                        Can I book flights for multiple-stop itineraries online?
                      </dt>
                      <dd>
                        <p>
                          Yes, you can purchase tickets for one-way or
                          multiple-destination travel by selecting “One way” or
                          “Multi-city” at the top of the flight search box on
                          the home page.
                        </p>
                      </dd>
                      <dt className="h5" id="q6">
                        I received a promotional offer to be redeemed
                        online. How can I redeem it?
                      </dt>
                      <dd>
                        <p>
                          If you have an offer code, you can select “All Search
                          Options” on the home page and then enter it in the
                          field at the bottom of the page. If you are redeeming
                          a gift certificate or electronic travel certificate,
                          it can be redeemed in the Payment section during the
                          flight booking process.
                        </p>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="snackbars" id="form-output-global" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default FaqPage;
