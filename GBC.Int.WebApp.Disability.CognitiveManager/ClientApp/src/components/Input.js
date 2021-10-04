import React, { Component } from 'react';
import { Field, ErrorMessage } from 'formik'

const Input = (props) => {
    const { name,id,label,...rest } = props;
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label">{label}</label>
            <Field id={name} name={name} className="form-control" {...rest} />
            <ErrorMessage name={props.name} />
        </div>
    );
}
export default Input 


