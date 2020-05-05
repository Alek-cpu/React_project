import {combineReducers} from 'redux';
import ContactReducers from "./contact";
import CardReducer from "./card";
import addActive from "./addActive";

const allReducers = combineReducers ({
   infLine: ContactReducers,
   add: addActive,
   card: CardReducer
});

export default allReducers;