import React, { useState, useEffect, useReducer } from 'react';
import ConfirmationModal from './ConfirmationModal'
import CognitiveF from './CognitiveF'
import Table from './Table';
import TableRB from './TableRB'
import alertContext from './Context'
import { FetchWrapper } from './FetchWrapper'

const CognitiveDetailsHook = () => {

    const [Cognitive, SetCognitive] = useState({ CognitiveId: '', ContentType: '', PlatformType: '' })
    const [CognitiveUpdate, SetCognitiveUpdate] = useState({ CognitiveId: '', ContentType: '', PlatformType: '' })
    const [rowData, setRowData] = useState(null)
    const [AlertProps, SetAlertProps] = useState({ AlertType: '', Messages: [] })
    const [searchRequired, SetSearchRequired] = useState(false)
    const [updateModel, setUpdateModal] = useState(false)
    const [removeModel, setRemoveModel] = useState(false)
    const [loading, setLoading] = useState(true)
    const [currentRow, setCurrentRow] = useState(null)

    useEffect(() => {
        let apiUrl = `Cognitive/CognitiveDetails?CognitiveId=${Cognitive.CognitiveId}&PlatformId=${Cognitive.PlatformType}&ContentType=${Cognitive.ContentType}`;
        FetchWrapper.get(apiUrl)
            .then((result) => {
                setRowData(result);
                setLoading(false);
            },
                (error) => {
                    SetAlertProperties('danger', [`error occured while retrieving data : ${error}`]);
                    setLoading(false);
                }
            )
    }, [searchRequired]);

    const OnCreate = (e) => {
        e.preventDefault();
        setLoading(true);
        const error = validate(Cognitive.CognitiveId, Cognitive.ContentType, Cognitive.PlatformType)
        if (error.length > 0) {
            setLoading(false);
            SetAlertProperties('danger', error);
            return false;
        }
        let apiUrl = 'Cognitive/CognitiveDetails'
        let data = {
            "CognitiveServiceId": Cognitive.CognitiveId, "PlatformId": parseInt(Cognitive.PlatformType), "ContentType": Cognitive.ContentType
        };
        SetAlertProperties('info', ["Record creation intiated.Please wait..."]);
        FetchWrapper.post(apiUrl, data)
            .then((responseJson) => {
                SetCognitive({ CognitiveId: '', ContentType: '', PlatformType: '' })
                SetAlertProperties('success', [`Cognitive details for CognitiveId '${Cognitive.CognitiveId}' successfully inserted into database !!`]);
                SearchInitiate()
                setLoading(false);
            })
            .catch((error) => {
                SetCognitive({ CognitiveId: '', ContentType: '', PlatformType: '' })
                SetAlertProperties('danger', [`error occured while inserting record ${error}`]);
                SearchInitiate()
                setLoading(false);
            });
    };
    
    const updateData = (UpdatedData) => {
        //alert(JSON.stringify(CognitiveUpdate));
        const error = validate(CognitiveUpdate.CognitiveId, CognitiveUpdate.ContentType, CognitiveUpdate.PlatformType)
        if (error.length > 0) {
            SetAlertProperties('danger', error);
            return false;
        }
        setLoading(true);
        let data = {
            "CognitiveServiceId": CognitiveUpdate.CognitiveId, "PlatformId": parseInt(CognitiveUpdate.PlatformType), "ContentType": CognitiveUpdate.ContentType
        };
        let apiUrl = 'Cognitive/CognitiveDetails'
        FetchWrapper.put(apiUrl, data)
            .then((responseJson) => {
                SetCognitive({ CognitiveId: '', ContentType: '', PlatformType: '' })
                SetAlertProperties('success', [`Details for CognitiveId '${CognitiveUpdate.CognitiveId}' updated successfully !!`]);
                SearchInitiate()
                setLoading(false);
            })
            .catch((error) => {
                SetCognitive({ CognitiveId: '', ContentType: '', PlatformType: '' })
                SetAlertProperties('danger', [`error occured while inserting record ${error}`]);
                SearchInitiate()
                setLoading(false);
            });
        CloseUpdateModal();
    }
    const removeData = () => {
        setLoading(true);
        let apiUrl = `Cognitive/CognitiveDetails?CognitiveId=${currentRow.cognitiveServiceId}`;
        FetchWrapper.delete(apiUrl)
            .then((responseJson) => {
                SetCognitive({ CognitiveId: '', ContentType: '', PlatformType: '' })
                SetAlertProperties('success', [`CognitiveId '${currentRow.cognitiveServiceId}' deleted successfully !!`]);
                setLoading(false);
                SearchInitiate()
            })
            .catch((error) => {
                SetCognitive({ CognitiveId: '', ContentType: '', PlatformType: '' })
                SetAlertProperties('danger', [`error occured while deleting record ${error}`]);
                setLoading(false);
                SearchInitiate()
            });
        CloseRemoveModal();
    }

    const SearchInitiate = () => {
        searchRequired ? SetSearchRequired(false) : SetSearchRequired(true);
    }
    const validate = (cognitive, contentType, platformType) => {
        const errors = [];
        if (cognitive.trim() === "") {
            errors.push('Please enter CognitiveId');
        }
        if (contentType === "") {
            errors.push('Please select ContentType');
        }
        if (platformType === "") {
            errors.push('Please select Platform');
        }
        return errors;
    }
    const CloseAlert = () => {
        alert('1');
        SetAlertProperties('clean');
    }
    const Reset = () => {
        SetCognitive({ CognitiveId: '', ContentType: '', PlatformType: '' })
        SetAlertProperties('clean');
        SearchInitiate()
    }
    const SearchdData = () => {
        setLoading(true);
        SearchInitiate();
    }
    const SetAlertProperties = (type, message) => {
        type === 'clean' ?
            SetAlertProps({ ...AlertProps, AlertType: '', Messages: [] }) : SetAlertProps({ ...AlertProps, AlertType: type, Messages: message })
    }
    const ShowUpdateModal = (selectedRowData) => {
        SetAlertProperties('clean');
        SetCognitive({ CognitiveId: '', ContentType: '', PlatformType: '' })
        SetCognitiveUpdate({ CognitiveId: selectedRowData.cognitiveServiceId, ContentType: selectedRowData.contentType, PlatformType: selectedRowData.platformId });
        setUpdateModal(true);
    }
    const CloseUpdateModal = () => {
        alert('2');
        SetAlertProperties('clean');
        setUpdateModal(false);
    }
    const ShowRemoveModal = (selectedRowData) => {
        SetAlertProperties('clean');
        setCurrentRow(selectedRowData);
        setRemoveModel(true);
    }
    const CloseRemoveModal = () => {
        SetAlertProperties('clean');
        setRemoveModel(false);
    }
    const columnData = [
            { headerName: 'CognitiveId', fieldName: 'cognitiveServiceId' },
            { headerName: 'Platform', fieldName: 'platformId' },
            { headerName: 'CognitiveId', fieldName: 'contentType' },
            { headerName: 'ContentType', fieldName: '', cellRenderer:'details' },
            { headerName: 'Database', fieldName: '', cellRenderer:'details' },
            { headerName: 'Update', fieldName: '', method: ShowUpdateModal, cellRenderer: <button type="button" className="btn btn-success btn-rounded btn-sm my-0" >Update</button> },
            { headerName: 'Remove', fieldName: '', method: ShowRemoveModal, cellRenderer: <button type="button" className="btn btn-danger btn-rounded btn-sm my-0">Remove</button> }
        ]
    const handleCognitiveChange = (e) => {
        SetCognitive({ ...Cognitive, [e.target.name] : e.target.value })
    }
    const handleCognitiveUpdateChange = (e) => {
        SetCognitiveUpdate({ ...CognitiveUpdate, [e.target.name]: e.target.value })
    }
    return (
        <form className="border border-light p-5">
            <alertContext.Provider value={{ AlertProps, CloseAlert }}>
                <CognitiveF Mode="add" Fields={Cognitive} SetFields={handleCognitiveChange} />
                <div className="form-group text-center mt-4">
                    <button id="search" name="search" type="button" className="col-sm-2 btn btn-success mr-2" onClick={SearchdData}>Search</button>
                    <button className="col-sm-2 btn btn-success mr-2" type="submit" onClick={(e) => OnCreate(e)}>Insert</button>
                    <button type="button" className="col-sm-2 btn btn-primary mr-2" onClick={Reset}>Reset</button>
                </div>
                <Table ColumnData={columnData} RowData={rowData} Loading={loading} />
                {updateModel && <ConfirmationModal setCloseModal={CloseUpdateModal} Operation={updateData}
                    header="Update Details"
                    footer={{ button1: "Update", button2: "Back" }}
                    Mode="edit">
                    <CognitiveF Mode="edit" Fields={CognitiveUpdate} SetFields={handleCognitiveUpdateChange} />
                </ConfirmationModal>}
                {removeModel && <ConfirmationModal setCloseModal={CloseRemoveModal} Operation={() => removeData()}
                    header="Delete record"
                    footer={{ button1: "Yes", button2: "No" }}
                    Mode="remove">
                    <h4>Are you sure to delete selected row?</h4>
                </ConfirmationModal>}
            </alertContext.Provider>
        </form>
    );
}
export default CognitiveDetailsHook;

