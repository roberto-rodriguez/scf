import React from "react";
import { Alert } from "reactstrap";
import Header from "../../cmp/header/Header";
import validator from "email-validator";
import InputField from "../../cmp/InputField"
import "./aboutStyles.scss";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorsObj: null,
            data: {
                name: "",
                email: "",
                subject: "",
                message: ""
            },
            submitted: false
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.baseState = this.state;
    }

    handleUpdate = (name, value ) => {
        
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
        var { data, submitted } = this.state;
        var errorsObj = {};
        var hasErrors = false;

        for (var prop in data) {
            if (!data[prop]) {
                errorsObj[prop] = "This field is required";
                hasErrors = true;
            }
        }

        if (!hasErrors) {

            if (!data.name.match(/^[a-zA-Z ]+$/)) {
                errorsObj["name"] = "Please enter only characters";
                hasErrors = true;
            }

            if (!validator.validate(data.email)) {
                errorsObj["email"] = "Invalid Email";
                hasErrors = true;
            }
        }

        if (hasErrors) {
            this.setState({ errorsObj, submitted: false });
        } else
            this.setState({ submitted: true });

        if (submitted) {
            this.setState(this.baseState);
        }
    };

    render() {
        var { data, errorsObj, submitted } = this.state;
        var { name, email, subject, message } = data;

        return (
            <div>
                <Header className="rd-navbar-wrap">
                    <br />
                </Header>
                <div className="row row-offset-4 justify-content-sm-center">
                    <div
                        className="col-md-6 col-lg-4 col-xl-3 col-9"
                    >
                        <div
                            style={{ display: submitted ? "none" : "block" }}
                        >
                            <h4>Contact Us</h4>
                            <p className="contactIntro">Use the form below to send us your comments or report any problems you experienced finding information about Fly Super Cheap.</p>
                            <form
                                className="rd-mailform rd-form text-left"
                                noValidate="novalidate"
                                onSubmit={this.handleSubmit}
                            >
                                <InputField
                                    name="name"
                                    value={name}
                                    label={"Name"}
                                    type={"text"}
                                    onChange={this.handleUpdate}
                                    errorsObj={errorsObj}
                                />
                                <InputField
                                    name="email"
                                    value={email}
                                    label={"Email"}
                                    onChange={this.handleUpdate}
                                    errorsObj={errorsObj}
                                />
                                <InputField
                                    name="subject"
                                    value={subject}
                                    label={"Subject"}
                                    type={"text"}
                                    onChange={this.handleUpdate}
                                    errorsObj={errorsObj}
                                />
                                <br />
                                <div className="form-wrap has-error">
                                    <label className="form-label-outside">Message:</label>
                                    <textarea type="text" className="form-input form-input-gray form-control-has-validation" name="message" value={message} onChange={evt => this.handleUpdate("message", evt.target.value)} />
                                    {errorsObj && errorsObj["message"] && (
                                        <span className="form-validation">{errorsObj["message"]}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div
                            style={{ display: submitted ? "block" : "none", minHeight: 315 }}
                        >
                            <Alert
                                style={{ marginTop: 30 }}
                                color="primary">The message has been received we will contact you as soon as possible.</Alert>
                        </div>
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

export default Contact;
