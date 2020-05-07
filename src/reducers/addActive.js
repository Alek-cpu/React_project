import {ADD_CONTACT} from "../constants/constants";

export default function (state = [], action) {

    switch (action.type) {
        case ADD_CONTACT:
            return action.payload
            break;
        default:
            return state;
    }
}