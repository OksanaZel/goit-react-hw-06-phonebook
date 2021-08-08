// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

import { combineReducers } from "redux";
import actionsTypes from "../redux/phoneBook-types";
import initialContacts from "../data/initialContacts.json";

const items = (state = initialContacts, {type, payload}) => {
    switch (type) {
        case actionsTypes.ADD:
            return [payload, ...state];
        
        case actionsTypes.DELETE:
            return state.filter(contact => contact.id !== payload);
        
        default: return state;
    }
}

const filter = (state = "", {type, payload}) => {
    switch (type) {
        case actionsTypes.CHANGE_FILTER:
            return payload;
        
        default: return state;
    }
}

export default combineReducers({
    items,
    filter,
})