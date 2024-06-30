import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, errors } = useForm({
        mode: "onBlur",
    });
    return (
        <form
            className="contact-form-wrapper"
            action="https://getform.io/f/a17a2715-d7ee-4ac4-8fcb-12f1eed43b2c"
            method="POST"
            data-aos="fade-up"
            data-aos-duration="1200"
        >
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            ref={register({ required: "Name is required" })}
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            ref={register({
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address",
                                },
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="subject"
                            placeholder="Subject (optional)"
                            ref={register({
                                required: "Subject is required",
                            })}
                        />
                        {errors.subject && <p>{errors.subject.message}</p>}
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group mb-0">
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Write your message here"
                            ref={register({
                                required: "Message is required",
                            })}
                        ></textarea>
                        {errors.message && <p>{errors.message.message}</p>}
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <div className="form-group mb-0">
                        <button
                            className="btn btn-theme btn-block"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
