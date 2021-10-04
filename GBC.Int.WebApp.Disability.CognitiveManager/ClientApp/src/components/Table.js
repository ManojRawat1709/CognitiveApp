import React, { useState, useEffect, useReducer } from 'react';
import Modal from './Model';
import ConfirmationModal from './ConfirmationModal'
import CognitiveF from './CognitiveF'
import { Button } from 'reactstrap';

const Table = (props) => {
    const { ColumnData, Loading, RowData} = props;

    return (
        <table className="table table-bordered table-responsive-md table-striped text-center">
            <thead>
                <tr>
                    {
                        ColumnData.map((Column, index) => {
                            return <th key={index} className="text-center" > {Column.headerName}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    !Loading && RowData ? RowData.map((row, index) => (
                        <tr key={index}>
                            {
                                ColumnData.map((field, index) => {
                                    return (
                                        <td key={index} className="pt-3-half">
                                            {
                                                field.fieldName ? row[field.fieldName] : <span onClick={() => { field.method(row) }}> {field.cellRenderer} </span>
                                            }
                                        </td>);
                                })
                            }
                        </tr>
                    )) : <tr className="loader" />
                }
            </tbody>
        </table>
    );
}
export default Table;

