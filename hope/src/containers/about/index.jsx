import React from "react";
import AboutData from "../../data/about.json";
import ServiceData from "../../data/service.json";
import { LightgalleryItem, LightgalleryProvider } from "react-lightgallery";
import { Link } from "react-router-dom";
import { flatDeep, slugify, containsObject } from "../../utils";
import AboutAddress from "../../components/about-address";

const AboutContainer = () => {
    const cats = ServiceData.map((item) => {
        return item.categories;
    });
    let singleCatArray = flatDeep(cats);
    let categories = [];
    singleCatArray.forEach((cat) => {
        const obj = {
            title: cat.trim(),
            slug: slugify(cat),
            count: 1,
        };
        const objIndex = containsObject(obj, categories);
        if (objIndex !== -1) {
            const prevCount = categories[objIndex].count;
            categories[objIndex] = {
                title: cat.trim(),
                slug: slugify(cat),
                count: prevCount + 1,
            };
        } else {
            categories.push(obj);
        }
    });
    return (
        <div className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="text-pra" data-aos="fade-up">
                            {AboutData[0].pageTitle}
                        </p>
                        <div
                            className="service-list-content"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <h4 className="title">{AboutData[1].title}</h4>
                            {AboutData[1].excerpt.map((single, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="desc"
                                        dangerouslySetInnerHTML={{
                                            __html: single,
                                        }}
                                    />
                                );
                            })}
                            <div
                                className="service-list"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <ul>
                                    {ServiceData.slice(0, 4).map(
                                        (single, i) => {
                                            return (
                                                <li key={i}>
                                                    <Link
                                                        to={
                                                            process.env
                                                                .PUBLIC_URL +
                                                            `/service-details/${slugify(
                                                                single.id
                                                            )}`
                                                        }
                                                    >
                                                        {single.title}
                                                    </Link>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                                <ul>
                                    {ServiceData.slice(4, 8).map(
                                        (single, i) => {
                                            return (
                                                <li key={i}>
                                                    <Link
                                                        to={
                                                            process.env
                                                                .PUBLIC_URL +
                                                            `/service-details/${slugify(
                                                                single.id
                                                            )}`
                                                        }
                                                    >
                                                        {single.title}
                                                    </Link>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                                <ul>
                                    {ServiceData.slice(0, 4).map(
                                        (single, i) => {
                                            return (
                                                <li key={i}>
                                                    <Link
                                                        to={
                                                            process.env
                                                                .PUBLIC_URL +
                                                            `/service-details/${slugify(
                                                                single.id
                                                            )}`
                                                        }
                                                    >
                                                        {single.title}
                                                    </Link>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="office-center-content"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <h4 className="title">{AboutData[2].title}</h4>
                            {AboutData[2].excerpt.map((single, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="desc"
                                        dangerouslySetInnerHTML={{
                                            __html: single,
                                        }}
                                    />
                                );
                            })}
                            <div className="row">
                                <div className="col-md-6" data-aos="fade-up">
                                    <div className="gallery-item mb-30">
                                        <LightgalleryProvider>
                                            <LightgalleryItem
                                                group="any"
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    AboutData[3].gallery
                                                        .imageOne
                                                }
                                            >
                                                <div className="thumb">
                                                    <div className="lightbox-image">
                                                        <img
                                                            src={
                                                                process.env
                                                                    .PUBLIC_URL +
                                                                AboutData[3]
                                                                    .gallery
                                                                    .imageOne
                                                            }
                                                            alt="gallery"
                                                        />
                                                    </div>
                                                    <div className="overlay">
                                                        <i className="icofont-plus"></i>
                                                    </div>
                                                </div>
                                            </LightgalleryItem>
                                        </LightgalleryProvider>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6"
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                >
                                    <div className="gallery-item mb-30">
                                        <LightgalleryProvider>
                                            <LightgalleryItem
                                                group="any"
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    AboutData[3].gallery
                                                        .imageTwo
                                                }
                                            >
                                                <div className="thumb">
                                                    <div className="lightbox-image">
                                                        <img
                                                            src={
                                                                process.env
                                                                    .PUBLIC_URL +
                                                                AboutData[3]
                                                                    .gallery
                                                                    .imageTwo
                                                            }
                                                            alt="gallery"
                                                        />
                                                    </div>
                                                    <div className="overlay">
                                                        <i className="icofont-plus"></i>
                                                    </div>
                                                </div>
                                            </LightgalleryItem>
                                        </LightgalleryProvider>
                                    </div>
                                </div>
                                <div
                                    className="col-md-12"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    <div className="gallery-item">
                                        <LightgalleryProvider>
                                            <LightgalleryItem
                                                group="any"
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    AboutData[3].gallery
                                                        .imageThree
                                                }
                                            >
                                                <div className="thumb">
                                                    <div className="lightbox-image">
                                                        <img
                                                            src={
                                                                process.env
                                                                    .PUBLIC_URL +
                                                                AboutData[3]
                                                                    .gallery
                                                                    .imageThree
                                                            }
                                                            alt="gallery"
                                                        />
                                                    </div>
                                                    <div className="overlay">
                                                        <i className="icofont-plus"></i>
                                                    </div>
                                                </div>
                                            </LightgalleryItem>
                                        </LightgalleryProvider>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="office-address-content"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                {AboutData[4].address.map((single, i) => {
                                    return (
                                        <AboutAddress key={i} data={single} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContainer;
