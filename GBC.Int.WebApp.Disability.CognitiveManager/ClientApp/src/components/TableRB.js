import React from 'react'
import { Table } from 'react-bootstrap'

const TableRB = (props) => {
    
    const { ColumnData, Loading, RowData } = props;

    return (
        <Table striped bordered hover responsive className="text-center">
            <thead>
                <tr>
                    {
                        ColumnData.map((Column, index) => {
                            return <th key={index}> {Column.headerName}</th>
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
        </Table>
    );
}
export default TableRB