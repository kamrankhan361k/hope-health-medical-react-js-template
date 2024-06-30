import PropTypes from "prop-types";
import React from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header";
import Breadcrumb from "../containers/global/breadcrumb/index.jsx";
import BlogDetailsContainer from "../containers/blog/blog-details";
import CommentContainer from "../containers/comment-container/index.jsx";
import Footer from "../layouts/footer";
import BlogData from "../data/blog.json";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const BlogDetailsPage = ({
    match: {
        params: { id },
    },
}) => {
    const blogId = parseInt(id, 10);
    const data = BlogData.filter((blogItem) => blogItem.id === blogId);
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Hope – Blog Details" />
                <div className="wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <Breadcrumb
                            prevs={[
                                { text: "Home", path: "/" },
                                { text: "Blog", path: "/blog" },
                            ]}
                            contentThree={data[0]?.title}
                        />
                        <BlogDetailsContainer data={data[0]} />
                        <CommentContainer />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

BlogDetailsPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
    }),
};

export default BlogDetailsPage;
