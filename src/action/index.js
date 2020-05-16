import {ADD_NEW_CONTACT} from "../constants/constants";

export const addContact = (contact) => {
    return {
        type: ADD_NEW_CONTACT,
        payload: contact
    }
}