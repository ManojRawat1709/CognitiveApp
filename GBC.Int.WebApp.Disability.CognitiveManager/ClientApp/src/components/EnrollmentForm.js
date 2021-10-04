import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const EnrollmentForm = () => {

    const course = [
            { value: "", key: "Please select course" },
            { value: "1", key: "Course1" },
            { value: "2", key: "Course2" },
            { value: "3", key: "Course3" }
    ];
    const skillset = [
        { value: "1", key: "ReactJS" },
        { value: "2", key: ".Net Core" },
        { value: "3", key: "SQL" }
    ]
    const modeofcontact = [
        { value: '1', key: 'Phone Number' },
        { value: '2', key: 'Email' }
    ]

    const initialValues = ({
        Name: '',
        Bio: '',
        Course: '',
        Email: '',
        Skillset: [],
        ModeOfContact: '',
        PhoneNumber:''
    })
    const onSubmit = (values, { setSubmitting, setErrors, resetForm }) => {
        alert(JSON.stringify(values));
        resetForm();
        setSubmitting(false);
    }
    const validationSchema = Yup.object({
        //Name: Yup.string().required('Please enter Name'),
        //Bio: Yup.string().required('Please enter Bio'),
        //Course: Yup.string().required('Please select Course'),
        //Email: Yup.string().required('Please enter Email').email('Please enter valid email'),
        //PhoneNumber: Yup.string().required('Please enter Phone number'),
        Skillset: Yup.array().required('Please select SkillSet'),
        ModeOfContact: Yup.string().required('Please select Mode of Contact')
    })

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
            {
                formik => {
                    console.log(formik.errors);
                    return <Form className="border border-light p-5">
                        <FormikControl control="Checkbox" name="SkillSet" id="SkillSet" label="Skill Set" options={skillset} />
                        <FormikControl control="Radio" name="ModeOfContact" id="ModeOfContact" label="Mode of Contact" options={modeofcontact} />
                        <div className="field-group text-center mt-4">
                            <button id="Insert" name="Insert" className="col-sm-2 btn btn-success mr-2" type="submit">Insert</button>
                        </div>
                    </Form>
                }
            }
        </Formik>
    );
}
export default EnrollmentForm