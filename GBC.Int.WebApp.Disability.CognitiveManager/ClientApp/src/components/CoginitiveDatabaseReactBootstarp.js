import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ModalRB from './ModalRB'
import { useState } from 'react'
import AlertRB from './AlertRB'
import CoginitiveDatabaseFields from './CoginitiveDatabaseFields'
import { Form } from 'react-bootstrap';
import TableRB from './TableRB'
import { useEffect } from 'react'
import { FetchWrapper } from './FetchWrapper'
import CognitiveDBFields from './CognitiveDBFields'

const CoginitiveDatabaseReactBootstarp = () => {

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const [currentRow, setCurrentRow] = useState(null);
    const [formValues, setFormValues] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [search, setSearch] = useState(false);
    const [rowData, setRowData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [updateFormik, setUpdateFormik] = useState(true)
    const [errorClass, setErrorClass] = useState("danger");
   
    
    const ShowRemoveModal = (selectedRowData) => {
        setCurrentRow(selectedRowData);
        setShowRemoveModal(true);
    }
    
    useEffect(() => {
        const url = `CognitiveServer/ServerDetails?cognitiveId=${formik.values.CognitiveServiceId}&serverName=${formik.values.ServerName}&databaseName=${formik.values.DatabaseName}&methodName=${formik.values.MethodName}`;
        FetchWrapper.get(url)
            .then((response) => {
                console.log(response);
                setRowData(response);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
            })
    }, [search]);
    const onSubmit = (values, { setSubmitting, setErrors, resetForm }) => {
        //alert('1');
        setLoading(true);
        OnCreate(values);
        //setSubmitting(false);
        resetForm();
    }
    const OnCreate = (values) => {
        let apiUrl = 'CognitiveServer/ServerDetails'
        FetchWrapper.post(apiUrl, values)
            .then((responseJson) => {
                handleSeacrh()
                setLoading(false);
                formik.setErrors({ 'CognitiveDatabase Information': `Record inserted successfully into database !!`});
                setErrorClass('success');

            })
            .catch((error) => {
                alert(JSON.stringify("error"+error))
                handleSeacrh()
                setLoading(false);
            });
    };
    const OnUpdate = () => {
        //alert(JSON.stringify(formik.values));
        setLoading(true);
        let apiUrl = 'CognitiveServer/ServerDetails'
        FetchWrapper.put(apiUrl, formik.values)
            .then((responseJson) => {
                handleSeacrh()
                setLoading(false);
            })
            .catch((error) => {
                alert(JSON.stringify("error" + error))
                handleSeacrh()
                setLoading(false);
            });
        setShowUpdateModal(false);
        setFormValues(null);
    };
    const OnRemove = () => {
        //alert(JSON.stringify(currentRow));
        setLoading(true);
        let apiUrl = `CognitiveServer/ServerDetails?id=${currentRow.datastoreId}`
        FetchWrapper.delete(apiUrl)
            .then((responseJson) => {
                handleSeacrh()
                setLoading(false);
            })
            .catch((error) => {
                alert(JSON.stringify("error" + error))
                handleSeacrh()
                setLoading(false);
            });
        setShowRemoveModal(false);
    };

    const handleSeacrh = () => {
        setLoading(true);
        search ? setSearch(false) : setSearch(true);
    }

    const initialValues = {
        CognitiveServiceId: 'DisabilityTriageTool',
        DatabaseName: '',
        ServerName: '',
        MethodName: '',
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
    }
    const validationSchema = Yup.object({
        DatabaseName: Yup.string().required('Please enter database name'),
        ServerName: Yup.string().required('Please enter server name'),
        MethodName: Yup.string().required('Please enter method name')
    })
    
    const formik = useFormik({
        initialValues: formValues || initialValues,
        onSubmit,
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        enableReinitialize: true
        
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
    console.log(Object.keys(formik.errors));
    return (
        <Form className="border border-light p-5" onSubmit={formik.handleSubmit}>
            <CognitiveDBFields formik={formik} errorClass={errorClass} />
            <div className="form-group text-center">
                <button type="button" id=" Search" name="Search" className="btn btn-success col-sm-1 mr-2" onClick={() => { handleSeacrh() }}>Search</button>
                <button type="submit" id=" Insert" name="Insert" className="btn btn-success col-sm-1 mr-2">Insert</button>
            </div>
            <TableRB ColumnData={columnData} RowData={rowData} Loading={loading} />

            <ModalRB show={showUpdateModal} onHide={() => { setShowUpdateModal(false); setFormValues(null); }}
                header="Update record"
                footer={{ button1: "Update", button2: "Cancel" }}
                operation={() => { OnUpdate() }}
                mode="edit">

                <CognitiveDBFields formik={formik} errorClass={errorClass} />
            </ModalRB>

            <ModalRB show={showRemoveModal} onHide={() => { setShowRemoveModal(false) }}
                header="Delete record"
                footer={{ button1: "Yes", button2: "No" }}
                operation={() => { OnRemove() }}
                mode="delete">
                <h4>Are you sure to delete selected row?</h4>
            </ModalRB>
        </Form>
    );
}
export default CoginitiveDatabaseReactBootstarp