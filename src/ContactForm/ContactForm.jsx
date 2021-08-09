import React from "react";
import PropTypes from "prop-types";
import * as Yup from 'yup';
import { IoPersonAddOutline } from "react-icons/io5"
import { useFormik } from "formik";
import { Form, Label, Input, Button } from "./ContactForm.styled";
import { connect } from "react-redux";
// import { useDispatch } from "react-redux";
import contactsActions from "../redux/phoneBook-actions";

function ContactForm({ onSubmit }) {
  // const dispacth = useDispatch();

   const formik = useFormik({
     initialValues: {
       name: '',
       number: '',
     },
     validationSchema: Yup.object({
       name: Yup.string()
         .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Имя может состоять только из букв, апострофа, тире и пробелов.')
         .required('Oбязательное поле'),
       number: Yup.string()
         .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, 'Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +')
         .required('Oбязательное поле'),
     }),
     onSubmit: (values, { setSubmitting, resetForm }) => {
       onSubmit(values),
       setSubmitting(false),
       resetForm()
     },
   });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label>Name
        <Input
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <>{formik.errors.name}</>
        ) : null}
      </Label>

      <Label>Number
        <Input
          id="number"
          name="number"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
        {formik.touched.number && formik.errors.number ? (
          <>{formik.errors.number}</>
        ) : null}
      </Label>

      <Button type="submit" disabled={formik.isSubmitting}><IoPersonAddOutline /> Add contact</Button>
    </Form>
  );
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (({ name, number }) => dispatch(contactsActions.addContact(name, number))
  )
})

export default connect(null, mapDispatchToProps)(ContactForm);