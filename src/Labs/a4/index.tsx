import React, { useState } from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ChildStateComponent from "./ChildStateComponent";
import ReduxExamples from "./ReduxExamples";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }
    const [counter, setCounter] = useState(123);
    return(
        <>
            <h1>Assignment 4</h1><br/>
            <ClickEvent/><br/>
            <PassingDataOnEvent/><br/>
            <PassingFunctions theFunction={sayHello}/><br/>
            <EventObject/><br/>
            <Counter/><br/>
            <BooleanStateVariables/><br/>
            <StringStateVariables/><br/>
            <DateStateVariable/><br/>
            <ObjectStateVariable/><br/>
            <ArrayStateVariable/><br/>
            <ChildStateComponent counter={counter} setCounter={setCounter}/><br/>
            <ReduxExamples/><br/>
        </>
    );
};

export default Assignment4;