import React, { Component, useState, useEffect,useContext } from 'react';
import { AgGridReact } from 'ag-grid-react';
import AlertRB from './AlertRB';
import Grid from '@material-ui/core/Grid';
import { Button, ButtonGroup, Fab, TextField } from '@material-ui/core'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import Error from './Error'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiFormControl-root': {
            margin: theme.spacing(1),
            width: '97%',
        }
    },
}));

const CognitiveDBFieldsCompactMUI = (props) => {
    const classes = useStyles();
    const { formik } = props;
    //alert(formik.errors['cssclass'])
    //alert();
    //alert(JSON.stringify(Object.keys(formik.errors)));
    const a = Object.keys(formik.errors).includes('DatabaseName') && "invalid";
    const b = Object.keys(formik.errors).includes('ServerName') && "invalid";
    const c = Object.keys(formik.errors).includes('MethodName') && "invalid";
    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12}>
                <TextField id="DatabaseName" className={a} size="small" label=" Database Name" variant="outlined" fullWidth onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.databaseName} InputLabelProps={{
                    shrink: true,
                }} />
                <ErrorMessage name="DatabaseName" component={Error} />
                <TextField id="ServerName" size="small" className={b} label="Server Name" variant="outlined" fullWidth onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.serverName} InputLabelProps={{
                    shrink: true,
                }}/>
                <ErrorMessage name="ServerName" component={Error} />
                <TextField id="MethodName" className={c} size="small" label="Method Name" variant="outlined" fullWidth onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.methodName} InputLabelProps={{
                    shrink: true,
                }}/>
                <ErrorMessage name="MethodName" component={Error} />
            </Grid>
        </Grid>
    );
}
export default CognitiveDBFieldsCompactMUI;

