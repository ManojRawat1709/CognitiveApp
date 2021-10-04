/// <reference path="cognitivedbfields.js" />
import React from 'react'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import ModalMUI from './ModalMUI'
import PopupMUI from './PopupMUI'
import { useState } from 'react'
import AlertRB from './AlertRB'
import CoginitiveDatabaseFields from './CoginitiveDatabaseFields'
import TableRB from './TableRB'
import { useEffect } from 'react'
import { FetchWrapper } from './FetchWrapper'
import CognitiveDBFields from './CognitiveDBFields'
import CognitiveDBFieldsCompactMUI from './CognitiveDBFieldsCompactMUI'
import CognitiveDBFieldsCompact1 from './CognitiveDBFieldsCompact1'
import { Button, ButtonGroup, Fab, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Dropdown from './Dropdown'


const useStyles = makeStyles((theme) => ({
   
    root1: {
        flexGrow: 1,
    },
    root: {
        '& .MuiFormControl-root': {
            margin: theme.spacing(1),
            width: '100%',
        }
    },
}));

const CognitiveDBCompMUI = () => {
    const classes = useStyles();
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
        {
            headerName: 'Update', fieldName: '', method: ShowUpdateModal, cellRenderer: <Button variant="outlined" color="primary" startIcon={<EditIcon />}>Edit</Button>
        },
        { headerName: 'Remove', fieldName: '', method: ShowRemoveModal, cellRenderer: <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />}>Delete</Button> }
    ]
    //console.log(Object.keys(formik.errors));
    return (
        <Formik initialValues={formValues || initialValues} onSubmit={onSubmit} validationSchema={validationSchema} validateOnBlur={false} validateOnChange={false} enableReinitialize={true}>
            {
                formik => {
                    console.log('manoj'+message);
                    return <Form className={"border border-light p-5 " + classes.root}>
                       
                        {message && <AlertRB show={Object.keys(message).length != 0} onHide={() => { setMessage(null) }} errorClass={errorClass} messages={message} />}
                        <div className="p-20">
                        <div className="banner text-right p-20">
                            <img src="./banner_welcometoSLF_492w_73h_en.gif" className="rounded" alt="Cinque Terre" />
                            </div>
                        </div>
                        <Paper elevation={3}>
                            <div className="p-16">
                                <Grid container spacing={3} >
                                    <Grid item xs={5}>
                                        <TextField id="SearchDatabaseName" size="small" label=" Database Name" variant="outlined" fullWidth onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.databaseName} />
                                        <TextField id="SearchServerName" size="small" label="Server Name" variant="outlined" fullWidth onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.serverName} />
                                        <TextField id="SearchMethodName" size="small" label="Method Name" variant="outlined" fullWidth onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.methodName} />
                                        //<Dropdown data={columnData}/>
                                    </Grid>
                                    <Grid item xs={5} style={{ "position": "relative" }}>
                                        <ButtonGroup color="secondary" style={{
                                            "position": "relative","bottom": "-120px","right": "0px"}}>
                                            <Button id=" Search" size="small" name=" Search" onClick={() => { handleSeacrh(formik.values) }}> Search</Button>
                                            <Button id=" Reset" name="Reset" onClick={() => { handleReset(formik.resetForm) }}>Reset</Button>
                                        </ButtonGroup>
                                    </Grid>
                                </Grid>
                            </div>
                        
                        <div className="p-16">
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" style={{ "flexGrow": "1" }}>Cognitive Database Information</Typography>
                                <Button variant="outlined" color="inherit" startIcon={<AddIcon />} onClick={() => { setShowAddModal(true); setMessage(null) }}>Add </Button>
                            </Toolbar>
                            </AppBar>
                        </div>
                            <div className="p-16">
                                <TableRB ColumnData={columnData} RowData={rowData} Loading={loading} />
                            </div>

                        </Paper>
                        <PopupMUI show1={showAddModal} onHide1={() => { setShowAddModal(false) }}
                            header="Add record"
                            footer={{ button1: "Add", button2: "Cancel" }}
                            operation={() => { formik.handleSubmit() }}
                            mode="add">
                            <CognitiveDBFieldsCompactMUI formik={formik} errorClass={errorClass} />
                        </PopupMUI>

                        <ModalMUI show1={showUpdateModal} onHide1={() => { setShowUpdateModal(false); setFormValues(null); }}
                            header="Update record"
                            footer={{ button1: "Update", button2: "Cancel" }}
                            operation={() => { formik.handleSubmit() }}
                            mode="edit">
                            <CognitiveDBFieldsCompactMUI formik={formik} errorClass={errorClass} />
                        </ModalMUI>
                    </Form>
                }
            }
        </Formik>
    );
}
export default CognitiveDBCompMUI