import React, { Component, useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Modal from './Model';

import { Button } from 'reactstrap';

class ModelCaller extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            showModel: false
        });
        
    }

    buttonClick = () => {
        this.setState({ showModel: true })
    }

    render() {
        return (
            <form>
                    <div className="form-group text-center mt-4">
                    <Button className="col-sm-2 btn btn-success mr-2 err" type="button" data-toggle="modal" onClick={this.buttonClick}>Popup</Button>
                    <label className="err">manoj</label>
                    {this.state.showModel ? <Modal/> : null}
                </div>
            </form>
        );
    }
}
export default ModelCaller;

