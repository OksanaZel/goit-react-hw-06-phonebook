import React from "react";
import { Container } from "./App.styled";
import Title from "../Title";
import ContactList from "../ContactList";
import ContactForm from "../ContactForm";
import Filter from "../Filter";


export default function App() {
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
