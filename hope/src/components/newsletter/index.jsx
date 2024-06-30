import React, { Fragment } from "react";
import PropTypes from "prop-types";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
    let email;
    const submit = (e) => {
        e.preventDefault();
        email &&
            email.value.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email.value,
            });
        let emailInput = document.getElementById("mc-form-email");
        emailInput.value = "";
    };
    // Change Handaler
    const inputChangedHandler = (e) => {
        console.log(e.target.value);
    };
    return (
        <Fragment>
            <form className="newsletter-form input-btn-group">
                <input
                    id="mc-form-email"
                    className="form-control"
                    type="email"
                    name="mail"
                    placeholder="Enter your email"
                    onChange={(e) => inputChangedHandler(e)}
                    ref={(node) => (email = node)}
                />
                <button
                    className="btn btn-theme"
                    type="button"
                    onClick={submit}
                >
                    <i className="icofont-long-arrow-right"></i>
                </button>
            </form>
            {status === "sending" && (
                <div style={{ color: "#3498db", fontSize: "12px" }}>
                    sending...
                </div>
            )}
            {status === "error" && (
                <div
                    style={{ color: "#e74c3c", fontSize: "12px" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    style={{ color: "#2ecc71", fontSize: "12px" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
        </Fragment>
    );
};

CustomForm.propTypes = {
    status: PropTypes.oneOf(["sending", "error", "success"]),
    message: PropTypes.string,
    onValidated: PropTypes.func,
};

const Newsletter = (props) => {
    return (
        <MailchimpSubscribe
            url={props.mailchimpUrl}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                />
            )}
        />
    );
};

Newsletter.propTypes = {
    mailchimpUrl: PropTypes.string,
};

export default Newsletter;
