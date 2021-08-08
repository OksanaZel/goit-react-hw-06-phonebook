// import React, { useState, useEffect } from "react";
import React from "react";
import { Container } from "./App.styled";
import Title from "../Title";
import ContactList from "../ContactList";
import ContactForm from "../ContactForm";
import Filter from "../Filter";
// import initialContacts from "../data/initialContacts.json";

export default function App() {
  // const [contacts, setContacts] = useState(() => {
    // return JSON.parse(window.localStorage.getItem("contacts")) ?? initialContacts});
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container>
        <Title title={"Phonebook"} />
        <ContactForm />
        <Filter/>
        <Title title={"Contacts"} />
    <ContactList/>  
    </Container>
  )
}
