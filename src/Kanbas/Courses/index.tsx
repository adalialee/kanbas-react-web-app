import {Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import {HiMiniBars3} from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
// import courses from "../Database/courses.json"
import modules from "../Database/modules.json";
import { getSearchParamsForLocation } from "react-router-dom/dist/dom";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaChevronDown, FaChevronRight, FaPlus, FaGripVertical } from "react-icons/fa";
import "./index.css";
import Home from "./Home";
import Assignments from "./Assignments";
import { courses } from "../Database";

function Courses({ _courses }: { _courses: any[]; }) {
    const {pathname} = useLocation();
    const params = useParams();
    const {courseId} = params;
    const course = _courses.find((course) => course._id === courseId);
    const modulesForThisCourse = modules.filter(
        (module) => module.course === courseId
    );
    return (
        <div className="row">
            <h1><HiMiniBars3/>Course {course?.name}</h1>
            <CourseNavigation/>
            <div className="d-flex flex-fill col-12 col-sm-8 d-sm-block">
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;