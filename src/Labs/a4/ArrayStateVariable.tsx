import React, { useState } from "react";
import "./index.css";
function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div>
            <h2>Array State Variable</h2>
            <button onClick={addElement} id="add-element-button">Add Element</button>
            <ul className="numbers">
                {array.map((item, index) => (
                    <li key={index} className="numbers">
                        {item}
                        <button onClick={() => deleteElement(index)} id="delete-button">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ArrayStateVariable;