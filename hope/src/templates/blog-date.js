import PropTypes from "prop-types";
import React from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header";
import Breadcrumb from "../containers/global/breadcrumb/index.jsx";
import Footer from "../layouts/footer";
import BlogData from "../data/blog.json";
import { slugify } from "../utils";
import BlogItemContainer from "../containers/blog/blog-item";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const BlogDate = ({
    match: {
        params: { date },
    },
}) => {
    const data = BlogData.filter((blog) => slugify(blog.date) === date);
    const dateTitle = data[0].date;
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Hope – Blog Date" />
                <div className="wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <Breadcrumb
                            prevs={[
                                { text: "Home", path: "/" },
                                { text: "Blog", path: "/blog" },
                            ]}
                            contentThree={dateTitle}
                        />
                        <BlogItemContainer data={data} />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

BlogDate.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            date: PropTypes.string,
        }),
    }),
};

export default BlogDate;
