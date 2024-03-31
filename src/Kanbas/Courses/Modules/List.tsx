import React, {useEffect, useState} from "react";

import { FaEllipsisV, FaGripVertical, FaChevronRight, FaCheckCircle, FaPlusCircle, FaChevronDown, FaPlus} from "react-icons/fa";
import { useParams } from "react-router";
import { modules } from "../../Database";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./reducer";
import * as client from "./client";
import { KanbasState } from "../../store";
import { findModulesForCourse, createModule } from "./client";
function ModuleList() {
    const { courseId } = useParams();
    const handleAddModule = () => {
      createModule(courseId, module).then((module) => {
        dispatch(addModule(module));
      });
    };  
    const moduleList = useSelector((state: KanbasState) =>
      state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
      state.modulesReducer.module);
    const dispatch = useDispatch();
    useEffect(() => {
      findModulesForCourse(courseId)
        .then((modules) =>
          dispatch(setModules(modules))
      );
    }, [courseId]);
    const handleDeleteModule = (moduleId: string) => {
      client.deleteModule(moduleId).then((status) => {
        dispatch(deleteModule(moduleId));
      });
    };  
    const handleUpdateModule = async () => {
      const status = await client.updateModule(module);
      dispatch(updateModule(module));
    };  
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
          <li className="list-group-item" style={{backgroundColor: 'white'}}>
            <button onClick={handleAddModule}
              className="add-button" style={{padding: '3px'}}>
              Add
            </button>
            <button 
              onClick={handleUpdateModule}
              className="update-button" style={{padding: '3px', marginRight: '10px'}}>
              Update
            </button>
            <input 
              value={module.name}
              onChange={(e) => dispatch(setModule({
                ...module, name: e.target.value
              }))}
            /><br/>
            <textarea value={module.description}
              onChange={(e) => dispatch(setModule({
                ...module, description: e.target.value
              }))}
            />
          </li>
          {moduleList.filter((module) => module.course === courseId)
            .map((module, index) => (
            <li
              className="list-group-item"
              key={index}
              style={{backgroundColor: 'white'}}>
              <div className="left">
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
                <FaEllipsisV className="me-2" />
                {module.name}<br/>
                <p>{module.description}</p>
              </div>
              <button
                onClick={() => handleDeleteModule(module._id)}
                className="delete-button" style={{padding: '3px'}}>
                  Delete
              </button>
              <button
                onClick={() => dispatch(setModule(module))}
                className="edit-button" style={{marginRight: '10px', padding: '3px'}}>
                  Edit
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
  export default ModuleList;
  