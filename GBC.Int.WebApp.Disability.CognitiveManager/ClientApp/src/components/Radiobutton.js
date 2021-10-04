import React from 'react'
import { Field, ErrorMessage } from 'formik'

const RadioButton = (props) => {
    const { name,label,options,...rest } = props
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label">{label}</label>
            <Field name={name} className="form-control" {...rest}>
                {
                    ({ field }) => {
                        return options.map(option => {
                            return (
                                <div className="radio" key={option.value}>
                                    <input type="radio" id={option.value} checked={field.value === option.value} {...field} value={option.value} />
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
export default RadioButton