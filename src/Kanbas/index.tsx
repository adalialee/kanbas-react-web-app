import {Routes, Route, Navigate, redirect} from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import "./index.css";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState } from "react";
import { courses } from "./Database";
import {useLocation, Link} from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { FaBars, FaChevronRight, FaTimes, FaGlasses, FaChevronDown, FaRegUserCircle, 
    FaTachometerAlt, FaBook, FaRegCalendarAlt, FaEnvelope, FaClock, FaEyeSlash,
    FaTv, FaShareSquare, FaQuestionCircle } from "react-icons/fa";
import "./index.css";
import ModifiedNav from "./Navigation/ModifiedNav";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
function Kanbas() {
    const [_courses, setCourses] = useState<any[]>(courses);
    const [course, setCourse] = useState({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-1", endDate: "2023-12-15",
    });
    const addNewCourse = () => {
        setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
    };
    const deleteCourse = (courseId: any) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            _courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };
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

    const links2 = [
        {label: "Home", icon: <FaRegUserCircle className="fs-2"/>},
        {label: "Modules", icon: <FaTachometerAlt className="fs-2"/>},
        {label: "Piazza", icon: <FaBook className="fs-2"/>},
        {label: "Zoom", icon: <FaRegCalendarAlt className="fs-2"/>},
        {label: "Assignments", icon: <FaEnvelope className="fs-2"/>},
        {label: "Quizzes", icon: <FaClock className="fs-2"/>},
        {label: "Grades", icon: <FaTv className="fs-2"/>},
        {label: "People", icon: <FaShareSquare className="fs-2"/>},
        {label: "Help", icon: <FaQuestionCircle className="fs-2"/>},
    ];

    const {pathname} = useLocation();
    // const links2 = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files"];

    return(
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation/>
                <div style={{flexGrow: 1}}>
                    <div>
                        <div className="d-none d-sm-block">
                            <FaBars className="red icon-padding-right more"/>    
                            <label className="more">CS4550.12631.202410</label>   
                            <FaChevronRight className="icon-padding-right more"/>
                            {pathname.includes("Assignments") && "Assignments"}
                            {pathname.includes("Home") && "Home"}
                            {pathname.includes("Modules") && "Modules"}
                            <button className="float-right"><FaGlasses className="me-2"/>Student View</button>
                            <hr/>
                        </div>

                        <div className="d-block d-sm-none top-area grid-row">
                            <div className="dropdown">
                                <button className="btn btn-dark dropdown-toggle float-left" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FaBars className="me-2 float-left" />
                                </button>
                                
                                <ul className="dropdown-menu bar">
                                <FaTimes className="float-right"/>
                                    {links.map((link, index) => (
                                        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                                            <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="dropdown">
                                <button className="btn btn-dark dropdown-toggle float-right" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                </button>
                                <ul className="dropdown-menu bar">
                                <FaTimes className="float-right"/>
                                    {links2.map((link, index) => (
                                        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                                            <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <FaGlasses className="me-2 float-right" />

                            <label>CS4550.12631.202410</label>
                            <br />
                            <label>Modules</label>
                        </div>

                        
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard"/>}/>
                            <Route path="Account" element={<h1>Account</h1>}/>
                            <Route path="Dashboard" element={
                                <Dashboard
                                    courses={_courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}/>
                            } />
                            <Route path="Courses/:courseId/*" element={
                                <Courses _courses={_courses} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;