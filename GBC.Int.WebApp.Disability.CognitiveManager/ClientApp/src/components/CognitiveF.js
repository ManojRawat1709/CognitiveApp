import React, { Component, useState, useEffect,useContext } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Alert from './Alert';


const CognitiveF = (props) => {
    const { Fields, SetFields, Mode } = props;

    return (
        <div>
            <Alert />
            <div className="form-group row">
                <label htmlFor="CognitiveId" className={"col-form-label" + (Mode === "add" ? " col-sm-2" : "")}>Cognitive Id</label>
                <input type="text"
                    id="CognitiveId"
                    name="CognitiveId"
                    className={"form-control mb-4" + (Mode === "add" ? " col-sm-10" : "")}
                    placeholder="CognitiveId"
                    value={Fields.CognitiveId}
                    onChange={e => SetFields(e)}
                />
            </div>
            <div className="form-group row">
                <label htmlFor="PlatformType" className={"col-form-label" + (Mode === "add" ? " col-sm-2" : "")}>Platform</label>
                <select id="PlatformType"
                    name="PlatformType"
                    className={"form-control mb-4" + (Mode === "add" ? " col-sm-10" : "")}
                    value={Fields.PlatformType}
                    onChange={e => SetFields(e)}>
                    <option value="">Please select</option>
                    <option value="16">SQL</option>
                    <option value="17">AWS</option>
                </select>
            </div>
            <div className="form-group row">
                <label htmlFor="ContentType" className={"col-form-label" + (Mode === "add" ? " col-sm-2" : "")}>Content type</label>
                <select id="ContentType"
                    name="ContentType"
                    className={"form-control mb-4" + (Mode === "add" ? " col-sm-10" : "")}
                    value={Fields.ContentType}
                    onChange={e => SetFields(e)}>
                    <option value="">Please select</option>
                    <option value="json">JSON</option>
                    <option value="Xml">XML</option>
                </select>
            </div>

        </div>
    );
}
export default CognitiveF;

