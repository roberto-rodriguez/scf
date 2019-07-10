import React from "react";
import * as Proxy from "../../actions/Proxy";
import validator from "email-validator";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLabel: 0,
      errorsObj: null,
      submitted: false,
      sended: false,
      data: {
        name: "",
        email: "",
        message: ""
      }
    };

    this.toggleClass = this.toggleClass.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.baseState = this.state;
  }

  toggleClass = labId => {
    this.setState({ selectedLabel: labId })
  }

  handleUpdate = ({ target: { name, value } }) => {

    this.setState(prevState => ({
      ...prevState,
      data: {
        ...prevState.data,
        [name]: value
      }
    }));

  }

  handleSubmit = event => {

    event.preventDefault();
    var { data } = this.state;
    const { name, email, message } = data;
    var errorsObj = {};
    var hasErrors = false;

    for (var prop in data) {
      if (!data[prop]) {
        errorsObj[prop] = "This field is required";
        hasErrors = true;
      }
    }

    if (!data.name == "") {
      if (!data.name.match(/^[a-zA-Z ]+$/)) {
        errorsObj["name"] = "Please enter only characters";
        hasErrors = true;
      }
    }

    if (!data.email == "") {
      if (!validator.validate(data.email)) {
        errorsObj["email"] = "Invalid Email";
        hasErrors = true;
      }
    }

    if (hasErrors) {
      this.setState({ errorsObj, submitted: false });
    } else {
      this.setState({ errorsObj, submitted: true });
      setTimeout(() => this.setState({ submitted: false }), 2500)
      Proxy.post("contact/add", { name, email, message })  
      setTimeout(() => this.setState({ sended: true }), 2501)
      setTimeout(() => this.setState(this.baseState), 5000)            
      }    
  };

  render() {
    const { selectedLabel, errorsObj, data, submitted, sended } = this.state;
    const { name, email, message } = data;

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
            noValidate
            onSubmit={this.handleSubmit}
          >
            <div className="form-wrap form-wrap-sm">
              <label
                className={selectedLabel == 1 ? "text-gray-light form-label rd-input-label focus" : name == "" ? "text-gray-light form-label rd-input-label" : "text-gray-light form-label rd-input-label focus not_empty"}
              >
                Your name
              </label>
              <input
                className="form-input form-input-dark form-control-has-validation form-control-last-child"
                id="footer-name"
                type="text"
                name="name"
                value={name}
                data-constraints="@Required"
                onClick={() => this.toggleClass(1)}
                onChange={this.handleUpdate}
              />
              {!errorsObj && selectedLabel > 1 && name == "" && (
                <span className="form-validation">This field is required</span>
              )}
              {errorsObj && errorsObj["name"] && (
                <span className="form-validation">{errorsObj["name"]}</span>
              )}
            </div>
            <div className="form-wrap form-wrap-sm">
              <label
                className={selectedLabel == 2 ? "text-gray-light form-label rd-input-label focus" : email == "" ? "text-gray-light form-label rd-input-label" : "text-gray-light form-label rd-input-label focus not_empty"}
              >
                Your e-mail
              </label>
              <input
                className="form-input form-input-dark form-control-has-validation form-control-last-child"
                id="footer-email"
                type="email"
                name="email"
                value={email}
                data-constraints="@Email @Required"
                onClick={() => this.toggleClass(2)}
                onChange={this.handleUpdate}
              />
              {!errorsObj && selectedLabel > 2 && email == "" && (
                <span className="form-validation">This field is required</span>
              )}
              {errorsObj && errorsObj["email"] && (
                <span className="form-validation">{errorsObj["email"]}</span>
              )}
            </div>
            <div className="form-wrap form-wrap-sm">
              <label
                className={selectedLabel == 3 ? "text-gray-light form-label rd-input-label focus" : message == "" ? "text-gray-light form-label rd-input-label" : "text-gray-light form-label rd-input-label focus not_empty"}
              >
                Message
              </label>
              <textarea
                className="form-input form-input-dark form-control-has-validation form-control-last-child"
                id="footer-message"
                style={{ height: 90 }}
                name="message"
                value={message}
                data-constraints="@Required"
                onClick={() => this.toggleClass(3)}
                onChange={this.handleUpdate}
              />
              {errorsObj && errorsObj["message"] && (
                <span className="form-validation">{errorsObj["message"]}</span>
              )}
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
        {submitted &&
          <div className="snackbars active" id="form-output-global">
            <p>
              <span className="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span>
              <span>Sending</span>
            </p>
          </div>}
        <div className={sended ? "snackbars active" : "snackbars"} id="form-output-global">
          <p>
            <span className="icon text-middle mdi mdi-check icon-xxs"></span>
            <span>Successfully sent!</span>
          </p>
        </div>

      </div>
    );
  }
}

export default Contact;
