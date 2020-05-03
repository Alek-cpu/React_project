import {combineReducers} from 'redux';
import ContactReducers from "./contact";

const allReducers = combineReducers ({
   infLine: ContactReducers,
});

export default allReducers;