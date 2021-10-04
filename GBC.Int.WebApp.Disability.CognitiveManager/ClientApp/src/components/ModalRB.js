import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalRB = (props) => {
    const type = props.mode === "delete" ? "danger" : "success"
    //console.log(props);
    return (
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title className={"w-100 font-weight-bold text-center text-" + type} >{props.header}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="mx-3 p-5">
                {props.children}
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-center p-3">
                <Button variant={type} className="col-sm-2" id="btnYes" data-dismiss="modal" onClick={props.operation}>{props.footer.button1}</Button>
                <Button variant="primary" className="col-sm-2" id="btnNo" data-dismiss="modal" onClick={() => { props.onHide() }}>{props.footer.button2}</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalRB