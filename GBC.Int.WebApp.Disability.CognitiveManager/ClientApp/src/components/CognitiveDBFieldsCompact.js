import React, { Component, useState, useEffect,useContext } from 'react';
import { AgGridReact } from 'ag-grid-react';
import AlertRB from './AlertRB';

import { Form, Field, Formik, ErrorMessage } from 'formik'
import Error from './Error'


const CognitiveDBFieldsCompact = (props) => {

    const { formik } = props;
    //alert(formik.errors['cssclass'])
    //alert();
    //alert(JSON.stringify(Object.keys(formik.errors)));
    const a = Object.keys(formik.errors).includes('DatabaseName') && "invalid";
    const b = Object.keys(formik.errors).includes('ServerName') && "invalid";
    const c = Object.keys(formik.errors).includes('MethodName') && "invalid";
    return (
        <div>
            
            <div className="form-group">
                <label>Database Name</label>
                <Field name="DatabaseName" className={"form-control " + a} type="input" placeholder="Database Name" required />
                <ErrorMessage name="DatabaseName" component={Error}/>
            </div>
            <div className="form-group">
                <label>Server Name</label>
                <Field name="ServerName" className={"form-control " + b} type="input" placeholder="Server Name" />
                <ErrorMessage name="ServerName" component={Error} />
            </div>
            <div className="form-group">
                <label>Method Name</label>
                <Field type="input" className={"form-control " + c} name="MethodName" placeholder="MethodName" />
                <ErrorMessage name="MethodName" component={Error}/>
            </div>
        </div>
    );
}
export default CognitiveDBFieldsCompact;

