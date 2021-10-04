import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function CognitiveFieldsCompact() {

    const validationSchema = Yup.object({
        FieldName: Yup.string().required('Please enter FieldName'),
        Direction: Yup.string().required('Please select Direction'),
        Status: Yup.string().required('Please select Status')
    })

    const initialValues = {
        FieldName: '',
        Direction: '',
        Status: ''
    }

    const onSubmit = values => {
        alert(JSON.stringify(values));
    }
    return (
        <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
            {
                formik => {
                    return <Form className="border border-light p-5">
                        <div className="form-group row">
                            <label htmlFor="FieldName" className="col-sm-2 col-form-label">Field Name</label>
                            <Field type="text"
                                id="FieldName"
                                name="FieldName"
                                className="form-control col-sm-10"
                            />
                            <ErrorMessage name="FieldName" />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="Direction" className="col-sm-2 col-form-label">Direction</label>
                            <select id="Direction"
                                name="Direction"
                                className="form-control col-sm-10"
                            >
                                <option value="">please select</option>
                                <option value="Input">Input</option>
                                <option value="Output">Output</option>
                            </select>
                            <ErrorMessage name="Direction" />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="Status" className="col-sm-2 col-form-label">Status</label>
                            <select id="Status"
                                name="Status"
                                className="form-control col-sm-10"
                            >
                                <option value="">Please select</option>
                                <option value="active">Active</option>
                                <option value="InActive">InActive</option>
                            </select>
                            <ErrorMessage name="Status" />
                        </div>
                        <div className="form-group md-4 text-center mt-4">
                            <button id="Insert" name="Insert" className="col-sm-2 btn btn-success mr-2" type="submit">Insert</button>
                            <button id="Update" name="Update" className="col-sm-2 btn btn-danger mr-2" type="submit">Update</button>
                            <button id="Reset" name="Reset" className="col-sm-2 btn btn-primary mr-2">Reset</button>
                            <button id="Return" name="Return" className="col-sm-2 btn btn-primary mr-2">Return</button>
                        </div>
                    </Form>
                }}
        </Formik>
    );
}
export default CognitiveFieldsCompact