import {combineReducers} from 'redux';
import infLine from './contact';
import card from './card';

const allReducers = combineReducers ({
   infLine: infLine,
   card: card,
});

export default allReducers;