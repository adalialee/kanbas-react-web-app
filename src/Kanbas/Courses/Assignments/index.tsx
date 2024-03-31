import React from "react";
import { FaCheckCircle, FaPenSquare, FaSearch, FaChevronRight, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { assignments } from "../../Database";
import "./index.css";
function Assignments() {
  const { courseId } = useParams();
  const COURSES_API = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };

  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]); 
  return (
    <>
        <div className="top">
            <input type="text" placeholder="Search for Assignment"/>
                <button className="float-right"><FaEllipsisV/></button>
                <button className="float-right">+ Group</button>
                <button className="add-assignment float-right">+ Assignment</button>
        </div>
        <hr/>
        <ul className="list-group wd-modules">
            <li className="list-group-item">
            <div>
                <FaEllipsisV className="me-2" />
                <FaChevronRight className="me-2"/>ASSIGNMENTS
                <span className="float-end">
                    <button className="top-button">40% of Total</button>
                    <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                </span>
            </div>
            <ul className="list-group">
                {assignmentList.map((assignment) => (
                <li className="list-group-item">
                    <div className="row">
                    <div>
                        <FaEllipsisV className="me-2" />
                        <FaPenSquare className="me-2 green" />
                        <Link
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link><br/>
                        <label className="red">Multiple Modules</label> | Due Sep 18 at 11:59pm | 100 pts
                        <span className="float-end">
                        <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
                    </span> 
                    </div>
                    
                    </div>
                </li>))}
            </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;