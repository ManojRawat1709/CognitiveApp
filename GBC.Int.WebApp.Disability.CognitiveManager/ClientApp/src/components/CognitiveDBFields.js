import React, { Component, useState, useEffect,useContext } from 'react';
import { AgGridReact } from 'ag-grid-react';
import AlertRB from './AlertRB';
import { Form } from 'react-bootstrap';


const CognitiveDBFields = (props) => {

    const { formik } = props;
    //alert(formik.errors['cssclass'])
    //alert(JSON.stringify(formik));

    return (
        <div>
            {Object.keys(formik.errors).length != 0 && <AlertRB show={Object.keys(formik.errors).length != 0} onHide={() => { formik.setErrors({}) }} errorClass={props.errorClass} messages={formik.errors} />}
            <Form.Group controlId="DatabaseName">
                <Form.Label>Database Name</Form.Label>
                <Form.Control type="input" placeholder="Database Name" value={formik.values.DatabaseName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
            </Form.Group>
            <Form.Group controlId="ServerName">
                <Form.Label>Server Name</Form.Label>
                <Form.Control type="input" placeholder="Server Name" value={formik.values.ServerName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
            </Form.Group>
            <Form.Group controlId="MethodName">
                <Form.Label>Method Name</Form.Label>
                <Form.Control type="input" placeholder="MethodName" value={formik.values.MethodName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
            </Form.Group>
        </div>
    );
}
export default CognitiveDBFields;

