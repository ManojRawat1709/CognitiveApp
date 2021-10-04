import React, { Component,useState,useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert } from 'reactstrap';

function CognitiveFields() {

    const [rowData, setRowData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [searchRequired, SetSearchRequired] = useState(false)
    const [AlertProps, SetAlertProps] = useState({ cssClass: '', Messages: [] })

    useEffect(() => {
        console.log(formik.values);
        let apiUrl = `CognitiveFields/FieldDetails?fieldAssociationId=DisabilityTriageTool&fieldName=${formik.values.FieldName}&direction=${formik.values.Direction}&status=${formik.values.Status}`;
        fetch(apiUrl)
            .then(res => res.json())
            .then((result) => {
                setRowData(result);
                console.log(result);
                setLoading(false);
            },
                (error) => {
                    SetAlertProps({ cssClass: 'danger', Messages: [`error occured while retrieving data : ${error}`] })
                    setLoading(false);
                }
            )
    }, [searchRequired])
    const SearchInitiate = () => {
        searchRequired ? SetSearchRequired(false) : SetSearchRequired(true);
    }
    const CloseAlert = () => {
        SetAlertProps({ ...AlertProps, Messages: [] })
    }
    const ResetHandle = () => {
        SetAlertProps({ ...AlertProps, Messages: [] })
        SearchInitiate();
    }
    const SearchHandle = () => {
        setLoading(true);
        SearchInitiate();
    }
    const onRemove = (row) => {
        setLoading(true);
        let apiUrl = `CognitiveFields/FieldDetails?FieldId=${row.fieldId}`
        let options = {
            method: 'DELETE'
        };
        fetch(apiUrl, options)
            .then(response => response.json())
            .then(result => {
                SetAlertProps({ cssClass: 'success', Messages: ["Successfully deleted record !!"] });
                setLoading(false);
                SearchInitiate();
            })
            .catch(error => {
                setLoading(false);
                SearchInitiate();
                SetAlertProps({ cssClass: 'danger', Messages: [`error occured while deleting record : ${error}`] });
            })
    }
    const onUpdate = (values) => {
        setLoading(true);
        let data = {
            "FieldAssociationId": "DisabilityTriageTool", "FieldName": values.FieldName, "Direction": values.Direction, "Status": values.Status == "0" ? false : true
        };
        let apiUrl = 'CognitiveFields/FieldDetails'
        let options = {
            method: 'PUT',
            body: JSON.stringify(data),
            header: { 'Content-Type': 'application/json' }
        }
        SetAlertProps({ cssClass: 'info', Messages: ["Please wait while record updated.."] });
        fetch(apiUrl, options)
            .then(response => response.json())
            .then((result) => {
                setLoading(false);
                searchRequired();
                SetAlertProps({ cssClass: 'success', Messages:["Successfully updated record !!"] })
            })
            .catch((error) => {
                setLoading(false);
                SetAlertProps({ cssClass: 'danger', Messages:[`Error occured while updating record : ${error}`] })
            })
    }
    const OnCreate = (values) => {        
        setLoading(true);
        if (formik.errors.length > 0) {
            setLoading(false);
            SetAlertProps({ Messages: formik.errors, cssClass: 'danger' })
            return false;
        }
        let apiUrl = 'CognitiveFields/FieldDetails'
        let data = {
            "FieldAssociationId": "DisabilityTriageTool", "FieldName": values.FieldName, "Direction": values.Direction, "Status": values.Status == "0" ? false : true
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        };
        SetAlertProps({ cssClass: 'info', Messages: ["Record creation intiated.Please wait..."] });
        fetch(apiUrl, options).
            then((response) => {response.json()})
            .then((responseJson) => {
                SetAlertProps({ cssClass: 'success', Messages: ['Cognitive details successfully submitted into database'] })
                SearchInitiate()
                setLoading(false);
            })
            .catch((error) => {
                SetAlertProps({ cssClass: 'danger', Messages: [`error occured while inserting record ${error}`] })
                SearchInitiate()
                setLoading(false);
            });
    };
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
    const onSubmit = (values, { setSubmitting, setErrors, resetForm }) => {
        OnCreate(values);
        resetForm();
        setSubmitting(false);
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false
        //,validate
    });
    //const validate = values => {
    //    let error = {};
    //    if (!values.FieldName) {
    //        error.FieldName = "Please enter FieldName"
    //    }
    //    if (!values.Direction) {
    //        error.Direction = "Please enter Direction"
    //    }
    //    if (!values.Status) {
    //        error.Status = "please enter Status"
    //    }
    //    return error;
    //}
    return (
        <form className="border border-light p-5" onSubmit={(e) => formik.handleSubmit(e)}>
            {AlertProps.Messages.length > 0 ?
                <div className={"alert alert-" + AlertProps.cssClass + " alert-dismissible"}>
                    <a href="#" className="close" onClick={CloseAlert} data-dismiss="alert" aria-label="close">&times;</a>
                    <p> <strong>{AlertProps.cssClass.toUpperCase() + '!'}</strong> </p>
                    {
                        AlertProps.Messages.map((error, index) => (<p key={index}> {AlertProps.cssClass === "danger" ? "Error : " : null} {error} </p>))
                    }
                </div> : null}
            <div className="form-group row">
                <label htmlFor="FieldName" placeholder="FieldName" className="col-sm-2 col-form-label">Field Name</label>
                <input type="text"
                    id="FieldName"
                    name="FieldName"
                    className="form-control col-sm-10"
                    value={formik.values.FieldName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.FieldName && formik.touched.FieldName ? <div className="col-sm-10 err"> {formik.errors.FieldName} </div> : null}
            </div>
            <div className="form-group row">
                <label htmlFor="Direction" className="col-sm-2 col-form-label">Direction</label>
                <select id="Direction"
                    name="Direction"
                    className="form-control col-sm-10"
                    {...formik.getFieldProps('Direction')}
                >
                    <option value="">please select</option>
                    <option value="Input">Input</option>
                    <option value="Output">Output</option>
                </select>
                {formik.errors.Direction && formik.touched.Direction ? <div className="col-sm-10 err"> {formik.errors.Direction} </div> : null}
            </div>
            <div className="form-group row">
                <label htmlFor="Status" className="col-sm-2 col-form-label">Status</label>
                <select id="Status"
                    name="Status"
                    className="form-control col-sm-10"
                    value={formik.values.Status}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    <option value="">Please select</option>
                    <option value="1">Active</option>
                    <option value="0">InActive</option>
                </select>
                {formik.errors.Status && formik.touched.Status ? <div className="col-sm-10 err"> {formik.errors.Status} </div> : null}
            </div>
            <div className="form-group md-4 text-center mt-4">
                <button id="Search" name="Search" className="col-sm-2 btn btn-success mr-2" type="button" onClick={SearchHandle}>Search</button>
                <button id="Insert" name="Insert" className="col-sm-2 btn btn-success mr-2" type="submit">Insert</button>
                <button id="Reset" name="Reset" type="button" className=" col-sm-2 btn btn-primary mr-2" type="reset" onClick={ResetHandle}>Reset</button>
                <button id="Return" name="Return" type="button" className=" col-sm-2 btn btn-primary mr-2">Return</button>
            </div>
            <table className="table table-bordered table-responsive-md table-striped text-center">
                <thead>
                    <tr>
                        <th className="text-center">FieldName</th>
                        <th className="text-center">Direction</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Update</th>
                        <th className="text-center">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !loading && rowData ? rowData.map((row, index) => (
                            <tr key={index}>
                                <td className="pt-3-half">{row.fieldName}</td>
                                <td className="pt-3-half">{row.direction}</td>
                                <td className="pt-3-half">{row.status? "Active" : "InActive"}</td>
                                <td className="pt-3-half">
                                    <span><button type="button"
                                        className="btn btn-success btn-rounded btn-sm my-0">Update</button></span>
                                </td>
                                <td>
                                    <span><button type="button" className="btn btn-danger btn-rounded btn-sm my-0" onClick={() => { onRemove(row) }} >Remove</button></span>
                                </td>
                            </tr>
                        )) :
                            <tr className="loader" />

                        //<div class="spinner-grow text-primary a" style={{ width: "4rem", height: "4rem" }} role="status">
                        //</div>
                    }
                </tbody>
            </table>
        </form>
    );
}
export default CognitiveFields