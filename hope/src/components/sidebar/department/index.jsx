import { NavLink } from "react-router-dom";
import SidebarTitle from "../sidebar-title";
import PropTypes from "prop-types";
import { flatDeep, slugify, containsObject } from "../../../utils";

const DepartmentWidget = ({ data }) => {
    const cats = data.map((item) => {
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
        <div className="widget-item">
            <SidebarTitle title="Departments" />
            <div className="widget-side-nav">
                <ul>
                    {data.map((single, i) => {
                        return (
                            <li key={i}>
                                <NavLink
                                    activeClassName="active"
                                    to={
                                        process.env.PUBLIC_URL +
                                        `/service-details/${slugify(single.id)}`
                                    }
                                >
                                    {single.title}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

DepartmentWidget.propTypes = {
    data: PropTypes.array,
};

export default DepartmentWidget;
