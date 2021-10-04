import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Button } from 'reactstrap';

class CognitiveDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cssClass:'',
            Messages: [],
            CognitiveId: '',
            ContentType: '',
            PlatformType: '',
            columnDefs: [
                { headerName: "CognitiveId", field: "cognitiveServiceId", sortable: true, filter: true },
                { headerName: "Platform", field: "platformId", sortable: true, filter: true },
                { headerName: "ContentType", field: "contentType", sortable: true, filter: true },
                {
                    headerName: "Cognitive", cellRenderer: function (params) {
                        return '<a href="https://www.google.com" onClick={this.abcd} target="_blank" rel="noopener">' + 'details' + '</a>'
                    }
                },
                {
                    headerName: "Database",
                    field: "cognitiveServiceId",
                    cellRenderer: (params) => {
                        var link = document.createElement('a');
                        link.href = '#';
                        link.innerText = params.value;
                        link.addEventListener('click', (e) => {
                            e.preventDefault();
                            console.log(e);
                        });
                        return link;
                    }
                }
            ],
            rowData: null
        }
    }
    componentDidMount() {
        this.LoadData();
    }
    OnCreate = (e) => {
        e.preventDefault();
        const { CognitiveId, ContentType, PlatformType } = this.state;
        const error = this.validate(CognitiveId, ContentType, PlatformType)
        if (error.length > 0) {
            this.setState({
                Messages: error,
                cssClass: 'danger'
            });
            return false;
        }
        let apiUrl = 'Cognitive/CognitiveDetails'
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        let data = {
            "CognitiveServiceId": this.state.CognitiveId, "PlatformId": parseInt(this.state.PlatformType), "ContentType": this.state.ContentType
        };
        console.log("data : " + data);
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: myHeaders
        };
        this.setState({
            cssClass: 'info',
            Messages: ["Record creation intiated.Please wait..."]
        })
        fetch(apiUrl, options).
            then((response) => {
                return response.json();
            })
            .then((responseJson) => {

                console.log(responseJson);
                this.setState({
                    cssClass: 'success',
                    Messages: ["Cognitive detailssuccessfully submitted into database"],
                    CognitiveId: '',
                    PlatformType: '',
                    ContentType: ''
                });
                this.LoadData();
                // Do something with the response
            })
            .catch((error) => {
                this.setState({
                    cssClass: 'danger',
                    Messages: ["error occured while inserting record"],
                    CognitiveId: '',
                    PlatformType: '',
                    ContentType: ''
                });
            });
    }
    LoadData = () => {
        console.log(this.state);
        let url = 'Cognitive/CognitiveDetails?CognitiveId=' + this.state.CognitiveId + '&PlatformId=' + this.state.PlatformType + '&ContentType=' + this.state.ContentType;
        fetch(url)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    rowData: result
                })
            },
                (error) => {
                    this.setState({ error });
                }
            )
    }
    OnUpdate = () => {

        console.log(this.state);
        let apiUrl = 'Cognitive/CognitiveDetails'
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        let data = {
            "CognitiveServiceId": this.state.CognitiveId, "PlatformId": parseInt(this.state.PlatformType), "ContentType": this.state.ContentType
        };
        console.log("data : " + data);
        const options = {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: myHeaders
        };
        fetch(apiUrl, options)
            .then(res => res.json())
            .then((result) => {
                this.setState({ response: result })
            },
                (error) => {
                    const e = [];
                    e.push(error);
                    this.setState({ Messages: error });
                }
            )
    }
    OnChangeMapping = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });
    }
    validate = (cognitive,contentType,platformType) => {
        const errors = [];
        if (cognitive.trim() === "") {
            errors.push('Please enter CognitiveId');
        }
        if (contentType.trim() === "") {
            errors.push('Please select ContentType');
        }
        if (platformType.trim() === "") {
            errors.push('Please select Platform');
        }
        return errors;
    }
    CloseAlert = () => {
        this.setState({
            Messages: []
        })
    }
    Reset = () => {
        this.setState({
            Messages: [],
            CognitiveId: '',
            PlatformType: '',
            ContentType: ''
        });
    }
    render() {
        const { Messages, cssClass } = this.state;
        return (

            <form className="border border-light p-5">
                {Messages.length > 0 ?
                    <div className={"alert alert-" + cssClass + " alert-dismissible"}>
                        <a href="#" className="close" onClick={this.CloseAlert} data-dismiss="alert" aria-label="close">&times;</a>
                        <p> <strong>{cssClass.toUpperCase() + '!'}</strong> </p>
                        {
                            Messages.map((error, index) => (<p key={index}> {cssClass === "danger" ? "Error : " : null} {error} </p>))
                        }
                </div> : null}
                <div className="form-group row">
                    <label htmlFor="CognitiveId" className="col-sm-2 col-form-label">Cognitive Id</label>
                    <input type="text"
                        id="CognitiveId"
                        name="CognitiveId"
                        className="form-control mb-4 col-sm-10"
                        placeholder="CognitiveId"
                        value={this.state.CognitiveId}
                        onChange={this.OnChangeMapping}
                    />
                </div>
                <div className="form-group row">
                    <label htmlFor="Platform" className="col-sm-2 col-form-label">Platform</label>
                <select id="Platform"
                    name="Platform"
                        className="form-control mb-4 col-sm-10"
                    value={this.state.PlatformType}
                        onChange={(e) => { this.setState({ PlatformType: e.target.value }) }}>
                        <option value="">Please select</option>
                        <option value="16">SQL</option>
                        <option value="17">AWS</option>
                    </select>
                </div>
                <div className="form-group row">
                    <label htmlFor="ContentType" className="col-sm-2 col-form-label">Content type</label>
                <select id="ContentType"
                    name="ContentType"
                        className="form-control mb-4 col-sm-10"
                    value={this.state.ContentType}
                        onChange={(e) => { this.setState({ ContentType: e.target.value }) }}>
                        <option value="">Please select</option>
                        <option value="json">JSON</option>
                        <option value="Xml">XML</option>
                    </select>
                    {this.state.ContentTypeError}
                </div>
                <div className="form-group text-center mt-4">
                    <Button className="col-sm-2 btn btn-success mr-2" type="submit" onClick={(e) => this.OnCreate(e)}>Insert</Button>
                    <Button className="col-sm-2 btn btn-danger mr-2" type="submit" onClick={this.OnUpdate}>Update</Button>
                    <Button className="col-sm-2 btn btn-primary mr-2" onClick={this.Reset}>Reset</Button>
                </div>
                    <div id="myGrid" style={{height: '500px', width: '900px'}} className="ag-theme-alpine">
                    <AgGridReact
                        onGridReady={params => this.gridApi = params.api}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        pagination={true}>
                    </AgGridReact>                    
                </div>
            </form>
        );
    }
}
export default CognitiveDetails;

