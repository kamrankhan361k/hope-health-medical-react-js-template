import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PricingItem = ({ data }) => {
    return (
        <div className={data.classOption}>
            <div className="pricing-title">
                <h5>{data.title}</h5>
            </div>
            <div
                className="pricing-amount"
                dangerouslySetInnerHTML={{ __html: data.price }}
            ></div>
            <div className="pricing-content">
                <p className="desc">{data.excerpt}</p>
                <ul className="pricing-list">
                    {data.pricingList &&
                        data.pricingList.map((single, key) => {
                            return (
                                <li key={key}>
                                    <i className="icofont-check-circled"></i>
                                    {single}
                                </li>
                            );
                        })}
                </ul>
            </div>
            <div className="pricing-footer">
                <Link className={data.btnClassOption} to="/">
                    Get Started Now
                </Link>
            </div>
        </div>
    );
};

PricingItem.propTypes = {
    data: PropTypes.object,
};

export default PricingItem;
