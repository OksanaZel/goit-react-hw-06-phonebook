import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../redux/phoneBook-actions";
import { Label, Input } from "../ContactForm/ContactForm.styled";

function Filter({value, onChange}) {
    return (
        <Label>Find contacts by name
          <Input type="text" value={value} onChange={onChange}/>
        </Label>
    )
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}

const mapStateToProps = (state) => ({
    value: state.contacts.filter,
})

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
