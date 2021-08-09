import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../redux/phoneBook-actions";
import { GoPrimitiveDot } from "react-icons/go";
import {AiOutlineUserDelete} from "react-icons/ai"
import { ContactListContainer, ContactListItem, Button} from "./ContactList.styled";

export default function ContactList(/*{ contacts, onDeleteContact }*/) {
    
     const getVisibleContact = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }
    const contacts = useSelector(({contacts:{items, filter}}) => getVisibleContact(items,filter));

    const dispatch = useDispatch();

    return (
        <ContactListContainer>
            {contacts.map(({id, name, number}) => (
                <ContactListItem key={id}>
                    <GoPrimitiveDot/>
                    {name}: {number}
                    <Button onClick={() => dispatch(contactsActions.deleteContact(id))}>
                        <AiOutlineUserDelete />
                        Delete</Button>
                </ContactListItem>
            ))}
        </ContactListContainer>
    )
}

//  const getVisibleContact = (allContacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
//   }

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//     contacts: getVisibleContact(items, filter)
// })

// const mapDispatchToProps = dispatch => ({
//     onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
// })

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string,
//         name: PropTypes.string,
//         number: PropTypes.string,
//     })),
//     onDeleteContact: PropTypes.func,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
