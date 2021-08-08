import actionsTypes from "../redux/phoneBook-types";
import { nanoid } from "nanoid";

const addContact = (name, number) => ({
    type: actionsTypes.ADD,
    payload: {
        id: nanoid(5),
        name,
        number,
    }
});

const deleteContact = (contactId) => ({
    type: actionsTypes.DELETE,
    payload: contactId,
});

const changeFilter = value => ({
  type: actionsTypes.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter};
