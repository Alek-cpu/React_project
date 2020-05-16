import {combineReducers} from 'redux';
import ContactReducers from "./contact";
import CardReducer from "./card";

const allReducers = combineReducers ({
   infLine: ContactReducers,
   card: CardReducer,
});

export default allReducers;