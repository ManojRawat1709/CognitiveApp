import React from 'react';
import { Field, ErrorMessage } from 'formik';


const Select = (props) => {
    const { name, label, options, ...rest } = props;
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label"> {label} </label>
            <Field as='select' id={name} name={name} className="form-control" {...rest}>
                {
                    options.map(opt => {
                        return <option key={opt.value} value={opt.value}>{opt.key}</option>
                    })
                }
            </Field>
            <ErrorMessage name={props.name} />
        </div>
    );
}
export default Select;