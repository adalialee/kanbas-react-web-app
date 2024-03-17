import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Courses/Modules/reducer";
import modulesReducer from "../Courses/Modules/reducer";
export interface KanbasState {
    modulesReducer: {
        modules: any[];
        module: any;
    };
}
const store = configureStore({
    reducer: {
        modulesReducer
    }
});

export default store;