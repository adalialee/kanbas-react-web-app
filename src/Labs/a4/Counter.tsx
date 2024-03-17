import React, { useState } from "react";
import "./index.css";
function Counter() {
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button id="up-button"
                onClick={() => setCount(count + 1)}>
                Up
            </button>
            <button id="down-button"
                onClick={() => setCount(count - 1)}>
                Down
            </button>
        </div>
    );
}
export default Counter;