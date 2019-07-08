import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="col" style={{ width: "40%", marginLeft: '20%' }}>
        <div className="inset-xxl-left-50">
          <h5 className="text-bold">Contact Us</h5>
          <hr className="divider divider-50 divider-info divider-sm-left" />

          <form
            className="rd-mailform rd-form text-md-left"
            data-form-output="form-output-global"
            data-form-type="contact"
            method="post"
            action="bat/rd-mailform.php"
          >
            <div className="form-wrap form-wrap-sm">
              <label className="text-gray-light form-label rd-input-label">
                Your name
              </label>
              <input
                className="form-input form-input-dark form-control-has-validation form-control-last-child"
                id="footer-name"
                type="text"
                name="name"
                data-constraints="@Required"
              />
              <span className="form-validation" />
            </div>
            <div className="form-wrap form-wrap-sm">
              <label className="text-gray-light form-label rd-input-label">
                Your e-mail
              </label>
              <input
                className="form-input form-input-dark form-control-has-validation form-control-last-child"
                id="footer-email"
                type="email"
                name="email"
                data-constraints="@Email @Required"
              />
              <span className="form-validation" />
            </div>
            <div className="form-wrap form-wrap-sm">
              <label className="text-gray-light form-label rd-input-label">
                Message
              </label>
              <textarea
                className="form-input form-input-dark form-control-has-validation form-control-last-child"
                id="footer-message"
                style={{ height: 90 }}
                name="message"
                data-constraints="@Required"
              />
              <span className="form-validation" />
            </div>
            <button
              className="button button-primary button-xs button-naira button-naira-up"
              type="submit"
            >
              <span className="icon fa-envelope-o" />
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
