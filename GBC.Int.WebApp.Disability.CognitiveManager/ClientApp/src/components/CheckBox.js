import React from 'react'
import { Field, ErrorMessage } from 'formik'

const Checkbox = (props) => {
    const { name, label, options, ...rest } = props;
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field name={name} className="form-control" {...rest}>
                {
                    ({ field }) => {
                        console.log(field);
                        return options.map(option => {
                            console.log(option.value);
                            return (
                                <div className="checkbox" key={option.value}>
                                    <input type="checkbox" id={option.value} {...field} value={option.value} />
                                    <label htmlFor={option.value} className="form-label">{option.key}</label>
                                </div>
                            );
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} />
        </div>
    );
}
export default Checkbox