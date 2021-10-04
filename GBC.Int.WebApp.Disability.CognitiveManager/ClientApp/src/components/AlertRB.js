import React from 'react'
import { Alert } from 'react-bootstrap'

const AlertRB = (props) => {
    console.log(props.messages);
    return (
        <Alert {...props} variant={props.errorClass} onClose={() => props.onHide()} dismissible>
            {props.messages && <Alert.Heading>{props.errorClass.toUpperCase() + ' !'}</Alert.Heading>}
            {
                Object.keys(props.messages).map((key, i) =>
                    <div>
                        <strong>{key}</strong> : {props.messages[key]}
                    </div>
                )
            }
            
        </Alert>
    );
}
export default AlertRB