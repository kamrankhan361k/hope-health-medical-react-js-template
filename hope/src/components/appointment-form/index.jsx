import { useForm } from "react-hook-form";
import React, { Fragment } from "react";

const AppointmentForm = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur",
    });
    const onSubmit = (data) => console.log(data);
    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)} method="POST">
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Enter your name..."
                                ref={register({ required: "Name is required" })}
                            />
                            {errors.name && <p>{errors.name.message}</p>}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="demo@yourmail.com"
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
                    <div className="col-md-3">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                ref={register({
                                    required: "Phone is required",
                                })}
                            />
                            {errors.phone && <p>{errors.phone.message}</p>}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group datepicker-group">
                            <label
                                htmlFor="datepicker"
                                className="form-label icon icofont-calendar"
                            >
                                <input
                                    className="form-control"
                                    id="datepicker"
                                    type="date"
                                    name="date"
                                    placeholder="Date"
                                    ref={register({
                                        required: "Date is required",
                                    })}
                                />
                            </label>
                            {errors.date && <p>{errors.date.message}</p>}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group mb-0">
                            <textarea
                                name="message"
                                rows="7"
                                placeholder="Your message here..."
                                ref={register({
                                    required: "Message is required",
                                })}
                            ></textarea>
                            {errors.message && <p>{errors.message.message}</p>}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group mb-0">
                            <button className="btn btn-theme" type="submit">
                                Make an appointment
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default AppointmentForm;
