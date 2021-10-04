/// <reference path="cognitivedbfields.js" />
import React from 'react'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import ModalRB from './ModalRB'
import { useState } from 'react'
import AlertRB from './AlertRB'
import CoginitiveDatabaseFields from './CoginitiveDatabaseFields'
import TableRB from './TableRB'
import { useEffect } from 'react'
import { FetchWrapper } from './FetchWrapper'
import CognitiveDBFields from './CognitiveDBFields'
import CognitiveDBFieldsCompact from './CognitiveDBFieldsCompact'
import CognitiveDBFieldsCompact1 from './CognitiveDBFieldsCompact1'

const CognitiveDBComp = () => {

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [currentRow, setCurrentRow] = useState(null);
    const [formValues, setFormValues] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [search, setSearch] = useState(false);
    const [rowData, setRowData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [updateFormik, setUpdateFormik] = useState(true)
    const [errorClass, setErrorClass] = useState("danger");
    const [message, setMessage] = useState(null);
   
    
    const ShowRemoveModal = (selectedRowData) => {
        setCurrentRow(selectedRowData);
        setShowRemoveModal(true);
        setMessage(null)
    }
    
    useEffect(() => {
        OnSeacrh(initialValues);
    }, []);
    const OnSeacrh = (values) => {
        const url = `CognitiveServer/ServerDetails?cognitiveId=${values.CognitiveServiceId}&serverName=${values.SearchServerName}&databaseName=${values.SearchDatabaseName}&methodName=${values.SearchMethodName}`;
        FetchWrapper.get(url)
            .then((response) => {
                console.log(response);
                setRowData(response);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setMessage({ 'Error': `error occured while retrieving record : ${error}` })
                setErrorClass('danger');
            })
    }
    const onSubmit = (values, { setSubmitting, setErrors, resetForm }) => {
        alert(JSON.stringify(values));
        setLoading(true);
        if (values.DatastoreId == 0) {
            OnCreate(values, setErrors);
        } else {
            OnUpdate(values, setErrors);
        }
        setSubmitting(false);
        resetForm();
    }
    const OnCreate = (values, setErrors) => {
        let apiUrl = 'CognitiveServer/ServerDetails'
        FetchWrapper.post(apiUrl, values)
            .then((responseJson) => {
                handleSeacrh(initialValues)
                setMessage({'CognitiveDatabase Information': `Record inserted successfully !!`});
                setErrorClass('success');
                setLoading(false);
            })
            .catch((error) => {
                alert(JSON.stringify("error" + error))
                setMessage({ 'Error': `error occured while inserting record : ${error}` })
                setErrorClass('danger');
                handleSeacrh(initialValues)
                setLoading(false);
            });
        setShowAddModal(false);
    };
    const OnUpdate = (values, setErrors) => {
        let apiUrl = 'CognitiveServer/ServerDetails'
        FetchWrapper.put(apiUrl, values)
            .then((responseJson) => {
                handleSeacrh(initialValues)
                setMessage({ 'CognitiveDatabase Information': `Record updated successfully !!` });
                setErrorClass('success');
                setLoading(false);
            })
            .catch((error) => {
                setMessage({ 'Error': `error occured while updating record : ${error}` })
                setErrorClass('danger');
                handleSeacrh(initialValues)
                setLoading(false);
            });
        setShowUpdateModal(false);
        setFormValues(null);
    };
    const OnRemove = () => {
        setLoading(true);
        let apiUrl = `CognitiveServer/ServerDetails?id=${currentRow.datastoreId}`
        FetchWrapper.delete(apiUrl)
            .then((responseJson) => {
                handleSeacrh(initialValues)
                setMessage({ 'CognitiveDatabase Information': `Record removed successfully !!` });
                setErrorClass('success');
                setLoading(false);
            })
            .catch((error) => {
                setMessage({ 'Error': `error occured while deleting record : ${error}` })
                setErrorClass('danger');
                handleSeacrh(initialValues)
                setLoading(false);
            });
        setShowRemoveModal(false);
    };
    const handleReset = (resetForm) => {
        setLoading(true);
        resetForm();
        OnSeacrh(initialValues);
    }
    const handleSeacrh = (values) => {        
        setLoading(true);
        //alert(JSON.stringify(values));
        OnSeacrh(values);
    }

    const initialValues = {
        CognitiveServiceId: 'DisabilityTriageTool',
        DatabaseName: '',
        ServerName: '',
        MethodName: '',
        SearchDatabaseName: '',
        SearchServerName: '',
        SearchMethodName: '',
        DatastoreId:0
    }
    const ShowUpdateModal = (selectedRowData) => {
        //setCurrentRow(selectedRowData);
        var updatedData = {
            CognitiveServiceId: 'DisabilityTriageTool',
            DatabaseName: selectedRowData.databaseName,
            ServerName: selectedRowData.serverName,
            MethodName: selectedRowData.methodName,
            DatastoreId: selectedRowData.datastoreId
        }
        setFormValues(updatedData);
        setShowUpdateModal(true);
        setMessage(null)
    }
    const validationSchema = Yup.object({
        DatabaseName: Yup.string().required('Please enter database name'),
        ServerName: Yup.string().required('Please enter server name'),
        MethodName: Yup.string().required('Please enter method name')
    })
    const handleUpdateModalShow = () => {
        //alert('show');
        setShowUpdateModal(true);
    }
    const handleUpdateModalHide = () => {
        //alert('hide');
        setShowUpdateModal(false);
    }
    const handleRemoveModalShow = () => {
        //alert('show');
        setShowRemoveModal(true);
    }
    const handleRemoveModalHide = () => {
        //alert('hide');
        setShowRemoveModal(false);
    }

    const columnData = [
        { headerName: 'CognitiveId', fieldName: 'cognitiveServiceId' },
        { headerName: 'DatabaseName', fieldName: 'databaseName' },
        { headerName: 'ServerName', fieldName: 'serverName' },
        { headerName: 'MethodName', fieldName: 'methodName' },
        { headerName: 'Update', fieldName: '', method: ShowUpdateModal, cellRenderer: <button type="button" className="btn btn-success btn-rounded btn-sm my-0" >Update</button> },
        { headerName: 'Remove', fieldName: '', method: ShowRemoveModal, cellRenderer: <button type="button" className="btn btn-danger btn-rounded btn-sm my-0">Remove</button> }
    ]
    //console.log(Object.keys(formik.errors));
    return (
        <Formik initialValues={formValues || initialValues} onSubmit={onSubmit} validationSchema={validationSchema} validateOnBlur={false} validateOnChange={false} enableReinitialize={true}>
            {
                formik => {
                    console.log('manoj'+message);
                    return <Form className="border border-light p-5">
                        <div className="p-20">
                            <div className="banner text-right">
                            <img src="./banner_welcometoSLF_492w_73h_en.gif" className="rounded" alt="Cinque Terre" />
                            </div>
                        </div>
                        {message && <AlertRB show={Object.keys(message).length != 0} onHide={() => { setMessage(null) }} errorClass={errorClass} messages={message} />}
                        
                        <div className="form-group row">
                            <div className="col-6">
                                <Field name="SearchDatabaseName" className="form-control" type="input" placeholder="Database Name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-6">
                                <Field name="SearchServerName" className="form-control" type="input" placeholder="Server Name" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-6">
                                <Field type="input" className="form-control" name="SearchMethodName" placeholder="MethodName" />
                            </div>
                            <div className="col-6">
                                <button type="button" id=" Search" name="Search" onClick={() => { handleSeacrh(formik.values) }} className="btn btn-success col-sm-2 mr-2">Search</button>
                                <button type="button" id=" Reset" name="Reset" onClick={() => { handleReset(formik.resetForm) }} className="btn btn-success col-sm-2 mr-2">Reset</button>
                            </div>
                        </div>
                        <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h4>Cognitive Database Information</h4>
                            </div>
                            <div className="col-sm-6 text-right">
                                <button type="button" id=" Insert" name="Insert" onClick={() => { setShowAddModal(true); setMessage(null) }} className="btn btn-success col-sm-2">Insert</button>
                            </div>
                         </div>
                        </div>
                            <TableRB ColumnData={columnData} RowData={rowData} Loading={loading} />
                        <ModalRB show={showAddModal} onHide={() => { setShowAddModal(false) }}
                            header="Add record"
                            footer={{ button1: "Add", button2: "Cancel" }}
                            operation={() => { formik.handleSubmit() }}
                            mode="edit">
                            <CognitiveDBFieldsCompact formik={formik} errorClass={errorClass} />
                        </ModalRB>

                        <ModalRB show={showUpdateModal} onHide={() => { setShowUpdateModal(false); setFormValues(null); }}
                            header="Update record"
                            footer={{ button1: "Update", button2: "Cancel" }}
                            operation={() => { formik.handleSubmit() }}
                            mode="edit">
                            <CognitiveDBFieldsCompact formik={formik} errorClass={errorClass} />
                        </ModalRB>

                        <ModalRB show={showRemoveModal} onHide={() => { setShowRemoveModal(false) }}
                            header="Delete record"
                            footer={{ button1: "Yes", button2: "No" }}
                            operation={() => { OnRemove() }}
                            mode="delete">
                            <h4>Are you sure to delete selected row?</h4>
                        </ModalRB>
                    </Form>
                }
            }
        </Formik>
    );
}
export default CognitiveDBComp