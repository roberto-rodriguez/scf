import React from "react";
import PropTypes from "prop-types";
import Header from "../../cmp/header/Header";
import faqList from "./faq.json";
import "./aboutStyles.scss";

class FaqPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      faqs: faqList.data,
      selectedFaq: 1,
      isSelected: false
    };

    this.onExpand = this.onExpand.bind(this);
  }

  onExpand = faqId => this.setState({ selectedFaq: faqId });

  render() {
    const { faqs } = this.state;
    return (
      <div>
        <Header />
        <br />
        <div
        style={{ display: "block" }}
        >
          <h5 className={"text-center h-margin-20 hr-title"}>
            <span className="float-center">
              <a
                className="bold-text pink-text"
                style={{ fontSize: 16 }}
              >
                Frequently Asked Questions
          </a>
              <i className="fa fa-long-arrow-center float-center bold-text pink-text margin-10 margin-top-3" />
            </span>
          </h5>
        </div>
        <div>
          <div className="container">
            {faqs.map(item => (
              <Faq key={item.id} faq={item} isSelected={item.id == this.state.selectedFaq} onExpand={this.onExpand} />
            ))}
          </div>
        </div>
        <div className="footer-box">
          <div className="footer-box-content">
            <nav>
              <ul>
                <li>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <a href="#">Flying</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

const Faq = ({ faq, isSelected, onExpand }) => {

  return (
    <div
      className="responsive-tabs responsive responsive-tabs-classic resp-easy-accordion faq-box"
      data-type="accordion"
      style={{ display: "block" }}
    >
      <div
        className="resp-tabs-container text-md-left tabs-group-default">
        <div
          className="resp-accordion resp-tab-active"
          role="tab"
          aria-controls="tab_item-0"
          onClick={() => { onExpand(faq.id) }}
        >
          <span className="resp-arrow" />
          {faq.question}
        </div>
        <div
          className="resp-tab-content resp-tab-content-active"
          aria-labelledby="tab_item-0"
          style={{ display: isSelected ? "block" : "none" }}
        >
          <p>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

Faq.propTypes = {
  faq: PropTypes.object,
  isSelected: PropTypes.bool,
  onExpand: PropTypes.func
};

export default FaqPage;
export { Faq };
