import React from "react";
import {Link, useLocation} from "react-router-dom";
import {FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt,
  FaEnvelope, FaShareSquare, FaQuestionCircle, FaClock, FaTv} from "react-icons/fa";

function CourseNav() {
    const links = [
        {label: "Account", icon: <FaRegUserCircle className="fs-2"/>},
        {label: "Dashboard", icon: <FaTachometerAlt className="fs-2"/>},
        {label: "Courses", icon: <FaBook className="fs-2"/>},
        {label: "Calendar", icon: <FaRegCalendarAlt className="fs-2"/>},
        {label: "Inbox", icon: <FaEnvelope className="fs-2"/>},
        {label: "History", icon: <FaClock className="fs-2"/>},
        {label: "Studio", icon: <FaTv className="fs-2"/>},
        {label: "Commons", icon: <FaShareSquare className="fs-2"/>},
        {label: "Help", icon: <FaQuestionCircle className="fs-2"/>},
    ];
    const {pathname} = useLocation();
    return (
        <div>
        <div>
            <ul className="m-navigation d-none d-sm-block">
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                </li>
            ))}
            </ul>
        </div>
        </div>   
    );
}

export default CourseNav;