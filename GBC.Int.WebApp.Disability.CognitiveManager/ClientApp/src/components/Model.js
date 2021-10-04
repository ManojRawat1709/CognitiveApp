import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Button } from 'reactstrap';
import $ from 'jquery';

class Modal extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //alert('hello');
        //const { handleModalCloseClick } = this.props;
        //(this.modal).modal('show');
        //(this.modal).on('hidden.bs.modal', handleModalCloseClick);
        //$(ReactDOM.findDOMNode(this.refs.modal)).modal();
    }
    render() {
        return (
            <div className="modal fade show modal-backdrop" aria-modal="true" id="modalAdd" tabIndex="-1" role="dialog" aria-labelledby="modalAdd"
                aria-hidden="false">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        
                        <div className="modal-body mx-3">
                            <div className="md-form mb-5">
                                <input type="text" id="inputName" className="form-control validate"></input>
                                <label data-error="wrong" data-success="right" htmlFor="inputName">Name</label>
                            </div>

                            <div className="md-form mb-5">
                                <input type="text" id="inputPosition" className="form-control validate"></input>
                                <label data-error="wrong" data-success="right" htmlFor="inputPosition">Position</label>
                            </div>

                            <div className="md-form mb-5">
                                <input type="text" id="inputOfficeInput" className="form-control validate"></input>
                                <label data-error="wrong" data-success="right" htmlFor="inputOfficeInput">Office</label></div>

                            <div className="md-form mb-5">
                                <input type="text" id="inputAge" className="form-control validate"></input>
                                <label data-error="wrong" data-success="right" htmlFor="inputAge">Age</label>
                            </div>

                            <div className="md-form mb-5">
                                <input type="date" id="inputDate" className="form-control" placeholder="Select Date"></input>
                                <label data-error="wrong" data-success="right" htmlFor="inputDate"></label>
                            </div>

                            <div className="md-form mb-5">
                                <input type="text" id="inputSalary" className="form-control validate"></input>
                                <label data-error="wrong" data-success="right" htmlFor="inputSalary">Salary</label>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
            );
    }
}
export default Modal;

