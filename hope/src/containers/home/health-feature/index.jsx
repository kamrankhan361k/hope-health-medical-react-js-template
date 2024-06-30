import HomeData from "../../../data/home.json";
import HealthFeature from "../../../components/health-feature";

const HealthFeatureContainer = () => {
    return (
        <section className="static-media">
            <div className="container">
                <div className="row mb-n4">
                    {HomeData[2].healthFeature &&
                        HomeData[2].healthFeature.map((single, key) => {
                            return (
                                <div
                                    key={key}
                                    className="col-lg-4 col-sm-6 mb-4"
                                >
                                    <HealthFeature data={single} key={key} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
};

export default HealthFeatureContainer;
