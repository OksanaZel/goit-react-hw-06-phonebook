// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
// import actionsTypes from "../redux/phoneBook-types";
import actions from "./phoneBook-actions";
import initialContacts from "../data/initialContacts.json";

const items = createReducer(initialContacts, {
    [actions.addContact]: (state, { payload }) => {
        if (state.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase())) {
            alert(`${payload.name} is already in contacts`);
            return state;
        }
        return [payload, ...state]
    } ,
        
        
    [actions.deleteContact]: (state, {payload}) => state.filter(contact => contact.id !== payload),
})

const filter = createReducer("", {
    [actions.changeFilter]: (_, action) => action.payload,
})

export default combineReducers({
    items,
    filter,
})

// const items = (state = initialContacts, {type, payload}) => {
//     switch (type) {
//         case actionsTypes.ADD:
//             return [payload, ...state];
        
//         case actionsTypes.DELETE:
//             return state.filter(contact => contact.id !== payload);
        
//         default: return state;
//     }
// }

// const filter = (state = "", {type, payload}) => {
//     switch (type) {
//         case actionsTypes.CHANGE_FILTER:
//             return payload;
        
//         default: return state;
//     }
// }

