import React from 'react'; // Import React
import { Link, useLocation } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import "/Users/adalialee/2024/spring/webdev/kanbas-react-web-app/src/Kanbas/Courses/Navigation/index.css";

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files"];
    const { pathname } = useLocation();
    let icon = null; // Declare the icon variable
    
    return (
        <ul className="wd-navigation d-none d-sm-block">
            <label className="small">202410_Fall 2023 Semest...</label>
            {links.map((link, index) => {
                if (index >= links.length - 4) {
                    icon = <FaEyeSlash className="eye"/>; // Assign the icon
                } else {
                    icon = null; // Reset the icon to null for other links
                }
                return (
                    <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
                        <Link to={link}>
                            {link} {icon && icon} {/* Render icon only if it's not null */}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default CourseNavigation;
