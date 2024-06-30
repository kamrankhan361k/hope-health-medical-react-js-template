import React from "react";
import BlogGrid from "../../../components/blog-grid";
import BlogDetailsWrap from "../../../components/blog-details";
import PropTypes from "prop-types";
import BlogData from "../../../data/blog.json";
import SidebarSearch from "../../../components/sidebar/search";
import SidebarCategories from "../../../components/sidebar/sidebar-categories";
import SidebarPost from "../../../components/sidebar/sidebar-post";
import SidebarTag from "../../../components/sidebar/sidebar-tag";
import SidebarTitle from "../../../components/sidebar/sidebar-title";

const BlogDetailsContainer = ({ data }) => {
    return (
        <div className="blog-details-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="post-details-content">
                            <div className="post-details-body">
                                <BlogDetailsWrap data={data} />
                                <div className="related-post">
                                    <h2 className="title">
                                        <span>Related</span> Posts
                                    </h2>
                                    <div className="post-items-style3">
                                        <div className="row">
                                            {BlogData.slice(1, 3).map(
                                                (single, key) => {
                                                    return (
                                                        <div
                                                            className="col-md-6"
                                                            key={key}
                                                        >
                                                            <BlogGrid
                                                                data={single}
                                                            />
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-wrapper blog-sidebar-wrapper mb-md-80 pt-md-10 pt-160">
                            <div className="widget-item">
                                <SidebarTitle title="Search" />
                                <SidebarSearch />
                            </div>
                            <div className="widget-item">
                                <SidebarTitle title="Categories" />
                                <SidebarCategories data={BlogData} />
                            </div>
                            <div className="widget-item">
                                <SidebarTitle title="Recent posts" />
                                <SidebarPost data={BlogData} />
                            </div>
                            <div className="widget-item">
                                <SidebarTitle title="TAGS" />
                                <SidebarTag data={BlogData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

BlogDetailsContainer.propTypes = {
    data: PropTypes.object,
};

export default BlogDetailsContainer;
