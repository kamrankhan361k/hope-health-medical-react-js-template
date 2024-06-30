import React from "react";
import ContactAddress from "../../components/contact-address";
import ContactForm from "../../components/contact-form";
import SectionTitle from "../../components/section-title";

const ContactPageContainer = () => {
    return (
        <section className="contact-area">
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-12"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <ContactAddress />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="contact-form">
                            <SectionTitle
                                classOption="text-center"
                                subTitle="Contact"
                                title="<span> We Alway Ready</span> To Help Your"
                            />
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPageContainer;
