import {combineReducers} from "redux";

import libraries from "./libraries";
import frameworks from "./frameworks";


// композиция функций
export default combineReducers({
    libraries,
    frameworks
})