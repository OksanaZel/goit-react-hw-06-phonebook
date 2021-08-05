import React, { useState, useEffect} from "react";
import { nanoid } from "nanoid";
import { Container } from "./App.styled";
import Title from "../Title";
import ContactList from "../ContactList";
import ContactForm from "../ContactForm";
import Filter from "../Filter";
import initialContacts from "../data/initialContacts.json";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? initialContacts});
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return
    }

      const contact = {
        id: nanoid(5),
        name,
        number,
      }

      setContacts(prevContacts => [ contact,...prevContacts])
  }

  const changeFilter = (e) => {
    console.log(e.currentTarget.value);
    setFilter(e.currentTarget.value);
  }

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  const deleteContact = (contactId) => {
     setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId))
  }

  const visibleContacts = getVisibleContact();

  return (
    <Container>
        <Title title={"Phonebook"} />
        <ContactForm onSubmit={addContact} />
        <Filter value={filter} onChange={changeFilter} />
        <Title title={"Contacts"} />
        <ContactList contacts={visibleContacts} onDeleteContact={deleteContact}/>
      </Container>
  )
}
