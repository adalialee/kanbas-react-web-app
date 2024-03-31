import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
        });
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
    const [module, setModule] = useState({
        id: 2, name: "NodeJS Module",
        description: "Create a NodeJS module with ExpressJS",
        course: "Example Course", completed: false, score: 0,
        });
    const MODULE_URL = "http://localhost:4000/a5/module"   
    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
      };
      const updateTitle = async () => {
        const response = await axios
          .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
      };
      useEffect(() => {
        fetchAssignment();
      }, []);     
    return (
        <div>
            <h3>Working With Objects</h3>
            <h3>Modifying Properties</h3>
            <input onChange={(e) => setAssignment({
                    ...assignment, title: e.target.value })}
                value={assignment.title} type="text" />
            <button onClick={updateTitle} >
                Update Title to: {assignment.title}
            </button>
            <button onClick={fetchAssignment} >
                Fetch Assignment
            </button>
            <h4>Retrieving Objects</h4>
            <a href="http://localhost:4000/a5/assignment">
                Get Assignment
            </a>

            <h4>Retrieving Properties</h4>
            <a href="http://localhost:4000/a5/assignment/title">
                Get Title
            </a>

            <h4>Modifying Properties</h4>
            <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input type="text" 
                onChange={(e) => setAssignment({ ...assignment,
                    title: e.target.value })}
                value={assignment.title}/>

            <h4>Modules</h4>
            <a href="http://localhost:4000/a5/module">
                Get Module
            </a><br/>
            <a href="http://localhost:4000/a5/module/name">
                Get Name
            </a><br/>
            <a href={`${MODULE_URL}/title/${module.name}`}>
                Update Name
            </a><br/>
            <input type="text" 
                onChange={(e) => setModule({ ...module,
                    name: e.target.value })}
                value={module.name}/><br/>
            <input type="number" 
                onChange={(e) => setModule({ ...module,
                    score: parseInt(e.target.value) })}
                value={module.score}/>
            <input type="checkbox" 
                onChange={(e) => setModule({ ...module,
                    completed: e.target.checked })}
                checked={module.completed}/><br/>
            <input type="text" 
                onChange={(e) => setModule({ ...module,
                    description: e.target.value })}
                value={module.description}/><br/>
        </div>
    );
}
export default WorkingWithObjects;