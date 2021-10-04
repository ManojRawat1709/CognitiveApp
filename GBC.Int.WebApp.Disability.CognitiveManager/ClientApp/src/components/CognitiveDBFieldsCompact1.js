import React, { Component, useState, useEffect,useContext } from 'react';
import { AgGridReact } from 'ag-grid-react';
import AlertRB from './AlertRB';

import { Form, Field, Formik, ErrorMessage } from 'formik'


const CognitiveDBFieldsCompact1 = (props) => {

    const { formik } = props;
    //alert(formik.errors['cssclass'])
    //alert(JSON.stringify(formik));

    return (
        <div>
            {Object.keys(formik.errors).length != 0 && <AlertRB show={Object.keys(formik.errors).length != 0} onHide={() => { formik.setErrors({}) }} errorClass={props.errorClass} messages={formik.errors} />}
            <div className="form-group">
                <label>Database Name</label>
                <Field name="DatabaseName1" className="form-control" type="input" placeholder="Database Name" />
            </div>
            <div className="form-group">
                <label>Server Name</label>
                <Field name="ServerName1" className="form-control" type="input" placeholder="Server Name" />
            </div>
            <div className="form-group">
                <label>Method Name</label>
                <Field type="input" className="form-control" name="MethodName1" placeholder="MethodName" />
            </div>
        </div>
    );
}
export default CognitiveDBFieldsCompact1;

