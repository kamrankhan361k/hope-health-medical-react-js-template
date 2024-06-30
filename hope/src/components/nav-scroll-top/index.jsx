import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const NavScrollTop = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return props.children;
};

export default withRouter(NavScrollTop);
