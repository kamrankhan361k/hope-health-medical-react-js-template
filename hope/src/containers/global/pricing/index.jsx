import SectionTitle from "../../../components/section-title";
import PricingItem from "../../../components/pricing";
import HomeData from "../../../data/home.json";
import PropTypes from "prop-types";

const PricingContainer = ({ pricingClassOption }) => {
    return (
        <div className="pricing-area pricing-default-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classOption="text-center"
                            subTitle="Pricing List"
                            title="<span>Protect</span> With Health Care Card"
                        />
                    </div>
                </div>
                <div
                    className={`row row-gutter-0 pricing-items-style1 ${pricingClassOption}`}
                    data-aos="fade-up"
                    data-aos-duration="1100"
                >
                    {HomeData[7].pricing &&
                        HomeData[7].pricing.map((single, key) => {
                            return (
                                <div
                                    key={key}
                                    className="col-sm-6 col-md-6 col-lg-3"
                                >
                                    <PricingItem key={key} data={single} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

PricingContainer.propTypes = {
    pricingClassOption: PropTypes.string,
};
PricingContainer.defaultProps = {
    pricingClassOption: "row row-gutter-0 pricing-items-style1",
};

export default PricingContainer;
