import { Link } from "react-router-dom";
import SidebarTitle from "../sidebar-title";

const SidebarWorkingTime = () => {
    return (
        <div className="widget-item">
            <div className="widget-work-hours">
                <SidebarTitle classOption="title" title="Work Hours" />
                <ul>
                    <li>
                        <span className="work-day">Monday</span>
                        <span className="work-hours">7:00 - 17:00</span>
                    </li>
                    <li>
                        <span className="work-day">Tuesday</span>
                        <span className="work-hours">7:00 - 17:00</span>
                    </li>
                    <li>
                        <span className="work-day">Wednesday</span>
                        <span className="work-hours">7:00 - 17:00</span>
                    </li>
                    <li>
                        <span className="work-day">Thursday</span>
                        <span className="work-hours">7:00 - 17:00</span>
                    </li>
                    <li>
                        <span className="work-day">Friday</span>
                        <span className="work-hours">7:00 - 17:00</span>
                    </li>
                    <li>
                        <span className="work-day">Saturday</span>
                        <span className="work-hours">9:00 - 11:00</span>
                    </li>
                    <li>
                        <span className="work-day">Sunday</span>
                        <span className="work-hours">9:00 - 11:00</span>
                    </li>
                </ul>
                <Link className="btn-theme btn-white" to="/">
                    REQUEST A CONSULTATION
                </Link>
            </div>
        </div>
    );
};

export default SidebarWorkingTime;
