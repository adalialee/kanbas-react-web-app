import React, {useState} from "react";

import { modules } from "../../Database";
import { FaEllipsisV, FaGripVertical, FaChevronRight, FaCheckCircle, FaPlusCircle, FaChevronDown, FaPlus} from "react-icons/fa";
import { useParams } from "react-router";
import "./index.css";

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
      <>
        <div>
            <button>Collapse All</button>
            <button>View Progress</button>
            <button>
                <FaCheckCircle className="text-success" />
                Publish All
                <FaChevronDown />
            </button>
            <button className="mod"><FaPlus/>Module</button>
            <button><FaEllipsisV/></button>
        </div>
        <hr/>
        <div className="bottom-margin">
            <li className="list-group-item">
                <ul className="list-group">
                    <li className="list-group-item week-0">
                        <FaGripVertical className="right-margin"/>
                        <FaChevronRight className="right-margin"/>
                        Resources
                        <span className="float-end">
                            <div className="row">
                                <div className="d-flex align-items-center">
                                    <FaCheckCircle className="text-success right-margin"/>
                                    <FaChevronDown className="larger-right-margin"/>
                                    <FaPlus className="larger-right-margin"/>
                                    <FaEllipsisV/>
                                </div>
                            </div>
                        </span>
                    </li>
                </ul>
            </li>
        </div>
        <div className="bottom-margin">
            <li className="list-group-item">
                <ul className="list-group">
                    <li className="list-group-item week-0">
                        <FaGripVertical className="right-margin"/>
                        <FaChevronRight className="right-margin"/>
                        Required Textbook
                        <span className="float-end">
                            <div className="row">
                                <div className="d-flex align-items-center">
                                    <FaCheckCircle className="text-success right-margin"/>
                                    <FaChevronDown className="larger-right-margin"/>
                                    <FaPlus className="larger-right-margin"/>
                                    <FaEllipsisV/>
                                </div>
                            </div>
                        </span>
                    </li>
                </ul>
            </li>
        </div>
        <ul className="list-group wd-modules">
          {modulesList.map((module) => (
            <li
              className="list-group-item"
              onClick={() => setSelectedModule(module)}>
              
              <div className="left">
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson) => (
                    <li className="list-group-item">
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </>
    );
  }
  export default ModuleList;
  