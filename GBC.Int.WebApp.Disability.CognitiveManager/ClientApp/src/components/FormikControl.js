import React from 'react'
import Input from './Input'
import Textarea from './TextArea'
import Select from './Select'
import RadioButton from './Radiobutton'
import Checkbox from './CheckBox'

const FormikControl = (props) => {
    const { control, ...rest } = props
    switch (control) {
        case 'Input': return <Input {...rest} />
        case 'Select': return <Select {...rest} />
        case 'Textarea': return <Textarea {...rest} />
        case 'Radio': return <RadioButton {...rest} />
        case 'Checkbox': return <Checkbox {...rest} />
        case 'Datetime': return null
        default: return null
    }
}
export default FormikControl