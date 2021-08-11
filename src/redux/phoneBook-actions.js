// import actionsTypes from "../redux/phoneBook-types";
import { createAction } from '@reduxjs/toolkit';
import { nanoid } from "nanoid";

const addContact = createAction("phoneBook/addContact", (name, number) => {    
    return {
        payload: {
        id: nanoid(5),
        name,
        number,
    }
    }
} )

const deleteContact = createAction("phoneBook/deleteContact");
const changeFilter = createAction("phoneBook/changeFilter");

// const addContact = (name, number) => ({
//     type: actionsTypes.ADD,
//     payload: {
//         id: nanoid(5),
//         name,
//         number,
//     }
// });

// const deleteContact = (contactId) => ({
//     type: actionsTypes.DELETE,
//     payload: contactId,
// });

// const changeFilter = value => ({
//   type: actionsTypes.CHANGE_FILTER,
//   payload: value,
// });

export default { addContact, deleteContact, changeFilter};
