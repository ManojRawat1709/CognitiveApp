import React, { useState, useEffect, useContext } from 'react'
import alertContext from './Context'

const Alert = (props) => {

    const { AlertProps, CloseAlert } = useContext(alertContext);
    const { AlertType, Messages } = AlertProps;

    return (
        <>
            {Messages.length > 0 &&
                <div className={"alert alert-" + AlertType + " alert-dismissible fade show"}>
                    <button type="button" onClick={CloseAlert} className="close" data-dismiss="alert">&times;</button>
                    <strong>{AlertType.toUpperCase() + "!"}</strong> {Messages.map((msg, index) => <div key={index}>{msg}</div>)}
                </div>}
        </>
    );
}
export default Alert;