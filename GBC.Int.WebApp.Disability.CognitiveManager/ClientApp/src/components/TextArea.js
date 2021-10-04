import React from 'react'
import { Field, ErrorMessage } from 'formik'

const Textarea = (props) => {
    const { name, id, label, ...rest } = props;
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label">{label}</label>
            <Field as='textarea' name={name} id={id} className="form-control" {...rest} />
            <ErrorMessage name={name} />
        </div>
        );
}
export default Textarea